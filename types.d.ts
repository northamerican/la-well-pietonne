export type Langs = "en" | "fr";
export type LangObject = {
  [langCode in Langs]: string;
};

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

export type EventInfo = {
  name: LangObject;
  location: LangObject;
  description: LangObject;
  href: string;
  dateStart: Date;
  dateEnd: Date;
};
export type Step = {
  date: LangObject;
  title: LangObject;
  subtitle: LangObject;
  completed: boolean;
};
