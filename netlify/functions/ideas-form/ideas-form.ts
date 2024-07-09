import { MongoClient } from "mongodb";
import { StatusCodes } from "http-status-codes";
import { Handler } from "@netlify/functions";
import getIpOrSubnet from "../../../public/js/getIpOrSubnet";

export const handler: Handler = async ({ body, headers }) => {
  const mongoUri = `mongodb+srv://public:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DB_URL}/?retryWrites=true&w=majority&appName=la-well-pietonne`;
  const client = new MongoClient(mongoUri, {
    maxIdleTimeMS: 10000,
  });

  try {
    const db = client.db("la-well-pietonne");
    const ideasCollection = db.collection("ideas");
    const { name, description, authorName, email } = JSON.parse(body);
    const { session } = headers;
    const clientIp = getIpOrSubnet(headers["x-nf-client-connection-ip"]);

    if (typeof name !== "string")
      throw new TypeError(`Invalid idea name of type ${typeof name}`);
    if (typeof description !== "string")
      throw TypeError(`Invalid idea description of type ${typeof description}`);
    if (typeof authorName !== "string")
      throw TypeError(`Invalid authorName of type ${typeof authorName}`);
    if (typeof email !== "string")
      throw TypeError(`Invalid email of type ${typeof email}`);

    const insertRes = await ideasCollection.insertOne({
      name: {
        en: name,
        fr: name,
      },
      description: {
        en: description,
        fr: description,
      },
      votes: [session],
      votesByIp: [clientIp],
      submittedBy: session,
      authorName,
      email,
      pending: true,
    });

    return {
      statusCode: StatusCodes.CREATED,
      body: JSON.stringify(insertRes),
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
