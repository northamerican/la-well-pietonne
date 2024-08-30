import { Handler } from "@netlify/functions";
import { MongoClient, ObjectId } from "mongodb";
import { StatusCodes } from "http-status-codes";
import { validate as uuidValidate } from "uuid";
import getIpOrSubnet from "../../../public/js/getIpOrSubnet";

export const handler: Handler = async ({ headers, queryStringParameters }) => {
  const mongoUri = `mongodb+srv://public:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DB_URL}/?retryWrites=true&w=majority&appName=la-well-pietonne`;
  const client = new MongoClient(mongoUri, {
    maxIdleTimeMS: 10000,
  });
  const { session } = headers;
  const validSession = uuidValidate(session);

  try {
    const db = client.db("la-well-pietonne");
    const ideasCollection = db.collection<{
      votes: string[];
      votesByIp: string[];
      // etc
    }>("ideas");
    const ideasVoteLogCollection = db.collection<{
      timestamp: Date;
      session: string;
      clientIp: string;
      ideaId: ObjectId;
    }>("ideas-vote-log");
    const { session } = headers;
    const { id } = queryStringParameters;
    const clientIp = getIpOrSubnet(headers["x-nf-client-connection-ip"]);
    const idea = await ideasCollection.findOne({ _id: new ObjectId(id) });
    const hasVoted = idea.votesByIp.includes(clientIp);

    if (!idea || !validSession) {
      return {
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      };
    }

    if (hasVoted) {
      return {
        statusCode: StatusCodes.FORBIDDEN,
      };
    }

    await ideasCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $push: { votes: session, votesByIp: clientIp },
      }
    );

    await ideasVoteLogCollection.insertOne({
      timestamp: new Date(),
      session,
      clientIp,
      ideaId: new ObjectId(id),
    });

    return {
      statusCode: StatusCodes.OK,
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      body: error.toString(),
    };
  } finally {
    client.close();
  }
};
