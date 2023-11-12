export type Langs = 'en' | 'fr'
export type LangObject = {
  [langCode in Langs]: string;
}

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

export type SigningLocation = {
  name: string;
  href: string;
  address: string;
}

export type SigningEvent = {
  name: LangObject,
  location: LangObject,
  href: string,
  dateStart: Date,
  dateEnd: Date,
}

export type Step = {
  date: LangObject,
  title: LangObject,
  subtitle: LangObject,
  completed: boolean
}