export type Langs = 'en' | 'fr'
export type LangObject = {
  [langCode in Langs]: string;
}