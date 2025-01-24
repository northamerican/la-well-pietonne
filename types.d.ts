import { ObjectId } from "mongodb";

export type Langs = "en" | "fr";
export type LangObject = Record<Langs, string>;

export type Street = {
  images: {
    src: string;
    alt: LangObject;
  }[];
  name: LangObject;
  description: LangObject;
  location: LangObject;
  body: LangObject;
};

export type Idea = {
  _id: ObjectId;
  image: string;
  name: LangObject;
  description: LangObject;
  votesCount: number;
  hasVoted: boolean;
  authorName?: string;
  pending?: true;
};

export type EventInfo = {
  name: LangObject;
  location: LangObject;
  description: LangObject;
  href?: string;
  dateStart: Date;
  dateEnd: Date;
};

export type Step = {
  date: LangObject;
  title: LangObject;
  href?: string;
  subtitle: LangObject;
  status: "completed" | "in-progress" | "coming";
};
