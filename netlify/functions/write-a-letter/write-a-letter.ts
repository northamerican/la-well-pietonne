import { Handler } from "@netlify/functions";
import { StatusCodes } from "http-status-codes";
import { MongoClient } from "mongodb";

export const handler: Handler = async ({ body }) => {
  const mongoUri = `mongodb+srv://public:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DB_URL}/?retryWrites=true&w=majority&appName=la-well-pietonne`;
  const client = new MongoClient(mongoUri, {
    maxIdleTimeMS: 10000,
  });
  const db = client.db("la-well-pietonne");
  const writeALetterLogCollection = db.collection<{
    form: Record<string, string>;
    userPrompt: string;
    message?: string;
    error?: string;
  }>("write-a-letter-log");

  const openAiApiKey = process.env.OPEN_AI_API_KEY;
  const form = JSON.parse(body);

  const systemRoleContent = `You are an assistant that specializes in writing letters in favor of pedestrianizing Wellington street (Promenade Wellington) in Montreal's borough of Verdun. It is pedestrianized in the summer only for the last several years. After a petition and public initiative was started, the public is now being consulted to make the pedestrian street permanent, with an eventual redevelopment. The letter is addressed to a public consultation office called "Office de consultation publique de Montréal" or OCPM for short. They are hosting the consultation and will be receiving this opinion letter as part of the process, now, in January and Febraury 2025.
  The user supplies you with summarized information to craft the letter. Some of the information provided will be more relevant than others, and you should use your judgment to decide what to include in the letter provided it conveys their support, eagerness, and how they and the community would benefit from a pedestrian street. The letter should be natrual and not overly formal. Their age, occupation and provided info can be reflected in the writing style and length of the letter, so it is more authentic and varied between letters.
  If they are particularly old or young, it may enhance credibility to include their provided age.
  If they are a parent or long time resident.
  If they work at or live near or on the street.
  If they work or are involved in an organization like social sciences, public health, environment, urban planning, or similar that may give them expertise or authority on the subject.
  If they have accessibility needs that would give them priority or credibility for supporting a pedestrian street.
  If they provided other comments or experiences that would help craft a persuasive letter in support of a pedestrian street.
  Ideas provided by the user should not be copied verbatim, but can be paraphrased or summarized in the letter.
  The letter will be sent as an email, so it should not formatted with a header or address.
  Do not include any references to the pandemic or social distancing.
  The letter may be output in English or French from Quebec, based on their provided preference.`;

  const promptBegin = `Here is a summary for use in my letter: `;

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
    ? `I frequent Promenade Wellington ${form.howOften || "often"}. ${
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
        `I work ${roleAtWorkplace} at ${form.nameOfWorkplace} on Promenade Wellington }.`,
    ]
      .filter(Boolean)
      .at(-1) ?? "";

  const roleAtOrganization = form.roleAtOrganization
    ? `am a ${form.roleAtOrganization}`
    : "am involved";
  const typeOfOrganization = form.typeOfOrganization
    ? `, which is a ${form.typeOfOrganization}`
    : "";
  const orgInvolved = form.involvedInOrganization
    ? `I ${roleAtOrganization} at ${form.nameOfOrganization} ${typeOfOrganization}.`
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
    ? `My favorite ideas for the pedestrian street include ${ideasList.join(
        "; "
      )}.`
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
    comments,
    language,
  ]
    .filter(Boolean)
    .join(" ");

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${openAiApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          {
            role: "developer",
            content: systemRoleContent,
          },
          {
            role: "user",
            content: userPrompt,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const responseJson = await response.json();
    const message = responseJson.choices[0].message.content;

    await writeALetterLogCollection.insertOne({
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
      form,
      userPrompt,
      error: error.toString(),
    });

    console.error(error);
    return {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      body: error.toString(),
    };
  }
};
