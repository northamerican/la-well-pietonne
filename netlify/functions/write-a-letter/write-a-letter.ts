import { Handler } from "@netlify/functions";
import { StatusCodes } from "http-status-codes";
import { MongoClient } from "mongodb";
import getIpOrSubnet from "../../../public/js/getIpOrSubnet";
import OpenAI from "openai";

export const handler: Handler = async ({ body, headers }) => {
  const mongoUri = `mongodb+srv://public:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DB_URL}/?retryWrites=true&w=majority&appName=la-well-pietonne`;
  const client = new MongoClient(mongoUri, {
    maxIdleTimeMS: 10000,
  });
  const db = client.db("la-well-pietonne");
  const clientIp = getIpOrSubnet(headers["x-nf-client-connection-ip"]);
  const writeALetterLogCollection = db.collection<{
    clientIp: string;
    timestamp: Date;
    form: Record<string, string>;
    userPrompt: string;
    message?: string;
    error?: string;
  }>("write-a-letter-log");

  const rateLimitWindowMS = 6 * 60 * 60 * 1000; // 6 hours
  const maxRequestsPerWindow = 5;

  const recentRequestsCount = await writeALetterLogCollection.countDocuments({
    clientIp,
    timestamp: { $gte: new Date(Date.now() - rateLimitWindowMS) },
  });

  if (recentRequestsCount >= maxRequestsPerWindow) {
    return {
      statusCode: StatusCodes.TOO_MANY_REQUESTS,
    };
  }

  const openAiApiKey = process.env.OPEN_AI_API_KEY;
  // const deepSeekApiKey = process.env.DEEP_SEEK_API_KEY;
  const form = JSON.parse(body);

  const systemRoleContent = `You are an assistant that specializes in writing letters in favour of pedestrianizing Wellington street (Promenade Wellington) in Montreal's borough of Verdun. It is currently pedestrianized only in the summer months for the last several years. The street is mixed use with many shops, restaurants and residential units. After a public initiative and petition was made, the public is now being consulted to make the pedestrian street permanent, with an eventual redevelopment. 
  The letter is addressed to a public consultation office called "Office de consultation publique de Montréal" or OCPM for short. They are hosting the consultation and will be receiving this opinion letter as part of the process, now, in January and Febraury 2025.
  The user supplies you with summarized information to craft the letter. Some of the information provided will be more relevant than others, and you should use your judgment to decide what to include in the letter provided it conveys their support, eagerness, and how they and the community would benefit from a pedestrian street. The letter should be written in natural, casual language. Their age, occupation and info provided info should be reflected in the writing style and length of the letter, so it is more authentic and varied.
  If they are particularly old or young, it may enhance credibility to include their provided age.
  If they are a parent it gives them credibility as their children can also enjoy the street.
  If that are a long time resident, it give them credibility as they have seen the street evolve and have a sense of history.
  If they work at or live near or on the street, they are directly impacted and have a stake in the outcome.
  If they work or are involved in an organization like social sciences, public health, environment, urban planning, or similar that may give them expertise or authority on the subject, include that.
  If they have accessibility needs, it would give them priority or credibility for supporting a pedestrian street.
  If they provided other comments or experiences are relevant to a letter in support of the pedestrian street, include that.
  Ideas provided by the user should not be copied verbatim, but can be paraphrased or summarized in the letter.
  Don't include a placeholder for the user's address in the header if they don't live in Verdun.
  Don't enclose the response in characters like --- or \`\`\`.
  Do not include any references to the pandemic or social distancing.
  The letter may be output in English or French from Quebec, based on their provided preference.`;

  const promptBegin = `Here is a summary for use in my letter in favor of pedestrianizing wellington street: `;

  const name = `My name is ${form.name}.`;
  const age = form.age ? `I am ${form.age} years old.` : "";

  const iLiveIn =
    [
      form.iLiveInVerdun && "I live in Verdun.",
      form.iLiveNearPromenadeWellington && "I live near Promenade Wellington.",
      form.iLiveOnPromenadeWellington && "I live on Promenade Wellington.",
    ]
      .filter(Boolean)
      .at(-1) ?? "";

  const longTime = form.iveLivedInVerdunLongTime
    ? `I have lived in Verdun for ${form.howLong || "a long time"}.`
    : "";

  const frequentOften = form.iFrequentPromenadeWellington
    ? `I go to Promenade Wellington ${form.howOften || "often"}. ${
        form.iHaveVisitedWithMyChildren
          ? `and I have visited with my children.`
          : ""
      }`
    : "";

  const roleAtWorkplace = form.roleAtWorkplace
    ? `as ${form.roleAtWorkplace}`
    : "";
  const workNear =
    [
      form.iWorkNearPromenadeWellington && `I work near Promenade Wellington.`,
      form.iWorkOnPromenadeWellington && `I work on Promenade Wellington.`,
      form.nameOfWorkplace &&
        `I work ${roleAtWorkplace} at ${form.nameOfWorkplace} on Promenade Wellington.`,
    ]
      .filter(Boolean)
      .at(-1) ?? "";

  const roleAtOrganization = form.roleAtOrganization
    ? `am a ${form.roleAtOrganization}`
    : "am involved";
  const nameOfOrganization = form.nameOfOrganization
    ? form.nameOfOrganization
    : "an organization";
  const typeOfOrganization = form.typeOfOrganization
    ? `, which is a ${form.typeOfOrganization}`
    : "";
  const hasOrganizationInfo =
    [
      form.roleAtOrganization,
      form.nameOfOrganization,
      form.typeOfOrganization,
    ].filter(Boolean).length > 1;
  const orgInvolved = hasOrganizationInfo
    ? `I ${roleAtOrganization} at ${nameOfOrganization} ${typeOfOrganization}.`
    : "";

  const accessibilityNeeds = form.accessibilityNeeds
    ? `which are ${form.accessibilityNeeds}`
    : "";
  const accessibility = form.accessibilityNeeds
    ? `I have accessibility needs ${accessibilityNeeds}.`
    : "";

  const supportReason = form.supportReason
    ? `My top reason for supporting a year-round pedestrian Wellington street is because it will ${form.supportReason}.`
    : "";

  const ideasList = Object.keys(form)
    .filter((field) => field.startsWith("idea."))
    .map((idea) => idea.replace("idea.", ""));
  const ideas = ideasList.length
    ? `My favourite ideas for the pedestrian street include ${ideasList.join(
        "; "
      )}.`
    : "";

  const feeling = form.feeling
    ? `Here's how pedestrianizing Wellington street makes me feel: ${form.feeling}`
    : "";

  const concerns = form.concerns
    ? `Some remaining concerns I may have are: ${form.concerns}.`
    : "";

  const comments = form.otherComments
    ? `Other comments I have: ${form.otherComments}.`
    : "";

  const language = `The letter should be written in ${
    form.langCode === "en" ? "English" : "French from Quebec"
  }`;

  const userPrompt = [
    promptBegin,
    name,
    age,
    iLiveIn,
    longTime,
    frequentOften,
    workNear,
    orgInvolved,
    accessibility,
    supportReason,
    ideas,
    feeling,
    concerns,
    comments,
    language,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const openai = new OpenAI({
      baseURL: "https://api.openai.com/v1",
      apiKey: openAiApiKey,
      // baseURL: "https://api.deepseek.com",
      // apiKey: deepSeekApiKey,
    });

    const completion = await openai.chat.completions.create({
      messages: [
        { role: "developer", content: systemRoleContent },
        // { role: "system", content: systemRoleContent },
        {
          role: "user",
          content: userPrompt,
        },
      ],
      model: "gpt-4o",
      // model: "deepseek-reasoner",
      temperature: 1,
    });

    const message = completion.choices[0].message.content;

    await writeALetterLogCollection.insertOne({
      clientIp,
      timestamp: new Date(),
      form,
      userPrompt,
      message,
    });

    return {
      statusCode: StatusCodes.OK,
      body: JSON.stringify({ message }),
    };
  } catch (error) {
    await writeALetterLogCollection.insertOne({
      clientIp,
      timestamp: new Date(),
      form,
      userPrompt,
      error: error.toString(),
    });

    console.error(error);
    return {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      body: error.toString(),
    };
  } finally {
    client.close();
  }
};
