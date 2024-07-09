import { MongoClient } from "mongodb";
import { StatusCodes } from "http-status-codes";
import { Handler } from "@netlify/functions";
import { validate as uuidValidate } from "uuid";
import getIpOrSubnet from "../../../public/js/getIpOrSubnet";

export const handler: Handler = async ({ headers, queryStringParameters }) => {
  const mongoUri = `mongodb+srv://public:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DB_URL}/?retryWrites=true&w=majority&appName=la-well-pietonne`;
  const client = new MongoClient(mongoUri, {
    maxIdleTimeMS: 10000,
  });

  try {
    const db = client.db("la-well-pietonne");
    const ideasCollection = db.collection("ideas");
    const { session } = headers;
    const clientIp = getIpOrSubnet(queryStringParameters.clientIp);
    const validSession = uuidValidate(session);

    const maxVotes = 99;
    const ideas = await ideasCollection
      .find()
      .filter({
        $or: [
          { pending: false },
          { pending: { $exists: false } },
          // Show pending idea matching session id (not ip)
          { $and: [{ pending: true }, { submittedBy: session }] },
        ],
      })
      .toArray();

    return {
      statusCode: StatusCodes.CREATED,
      body: JSON.stringify(
        ideas.map(
          ({
            _id,
            name,
            description,
            image,
            votes,
            votesByIp,
            authorName,
            pending,
          }) => {
            const hasVoted =
              validSession &&
              (votes.includes(session) || votesByIp?.includes(clientIp));
            return {
              _id,
              name,
              description,
              image,
              votesCount: Math.min(votes.length, maxVotes),
              hasVoted,
              authorName,
              pending,
            };
          }
        )
      ),
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
