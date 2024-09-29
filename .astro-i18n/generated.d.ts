type DefaultLangCode = "fr";
type SupportedLangCode = "en";
type LangCode = DefaultLangCode | SupportedLangCode;
type RouteUri =
  | "/404"
  | "/a-travers-le-monde"
  | "/boite-a-idees"
  | "/petition"
  | "/questions-reponses"
  | "/signer";
type RouteParams = {
  "/404": undefined;
  "/a-travers-le-monde": undefined;
  "/boite-a-idees": undefined;
  "/petition": undefined;
  "/questions-reponses": undefined;
  "/signer": undefined;
};
type TranslationPath =
  | "siteUrlBase"
  | "siteUrl"
  | "siteName"
  | "siteDescription"
  | "otherLangs.fr"
  | "isoLangCode"
  | "headerDescription"
  | "howToSignHeading"
  | "howToSign"
  | "atASupportingBusiness"
  | "upcomingEvents"
  | "step"
  | "completed"
  | "stepsHeading"
  | "petitionTextHeading"
  | "email"
  | "optional"
  | "stayConnected"
  | "byEmail"
  | "onSocialMedia"
  | "getInvolved"
  | "subscribe"
  | "subscribeSubtext"
  | "subscribed"
  | "formError"
  | "followUsOn"
  | "and"
  | "homeHeading"
  | "homeBody"
  | "inspirationAndReading"
  | "footerNoticeUnaffiliated"
  | "contactUs"
  | "questionsAndAnswersHeading"
  | "aroundTheWorldHeading"
  | "shareAnIdeaHeading"
  | "shareAnIdeaSubheading"
  | "ideasGallery"
  | "shareYourIdea"
  | "ideaName"
  | "ideaDetails"
  | "authorName"
  | "submit"
  | "stayConnectedByEmail"
  | "yourIdeaIsBeingSubmitted"
  | "iLikeThisIdea"
  | "ideaBy"
  | "ideaFormSuccess"
  | "ideaFormError"
  | "notFound"
  | "goHome"
  | "online"
  | "petitionLinkText"
  | "onlinePetitionNotice"
  | "petitionUrl"
  | "petitionSignUrl"
  | "otherLangs.en";
type TranslationOptions = {
  siteUrlBase: {} | undefined;
  siteUrl: {} | undefined;
  siteName: {} | undefined;
  siteDescription: {} | undefined;
  "otherLangs.fr": {} | undefined;
  isoLangCode: {} | undefined;
  headerDescription: {} | undefined;
  howToSignHeading: {} | undefined;
  howToSign: {} | undefined;
  atASupportingBusiness: {} | undefined;
  upcomingEvents: {} | undefined;
  step: {} | undefined;
  completed: {} | undefined;
  stepsHeading: {} | undefined;
  petitionTextHeading: {} | undefined;
  email: {} | undefined;
  optional: {} | undefined;
  stayConnected: {} | undefined;
  byEmail: {} | undefined;
  onSocialMedia: {} | undefined;
  getInvolved: {} | undefined;
  subscribe: {} | undefined;
  subscribeSubtext: {} | undefined;
  subscribed: {} | undefined;
  formError: {} | undefined;
  followUsOn: {} | undefined;
  and: {} | undefined;
  homeHeading: {} | undefined;
  homeBody: {} | undefined;
  inspirationAndReading: {} | undefined;
  footerNoticeUnaffiliated: {} | undefined;
  contactUs: {} | undefined;
  questionsAndAnswersHeading: {} | undefined;
  aroundTheWorldHeading: {} | undefined;
  shareAnIdeaHeading: {} | undefined;
  shareAnIdeaSubheading: {} | undefined;
  ideasGallery: {} | undefined;
  shareYourIdea: {} | undefined;
  ideaName: {} | undefined;
  ideaDetails: {} | undefined;
  authorName: {} | undefined;
  submit: {} | undefined;
  stayConnectedByEmail: {} | undefined;
  yourIdeaIsBeingSubmitted: {} | undefined;
  iLikeThisIdea: {} | undefined;
  ideaBy: {} | undefined;
  ideaFormSuccess: {} | undefined;
  ideaFormError: {} | undefined;
  notFound: {} | undefined;
  goHome: {} | undefined;
  online: {} | undefined;
  petitionLinkText: {} | undefined;
  onlinePetitionNotice: {} | undefined;
  petitionUrl: {} | undefined;
  petitionSignUrl: {} | undefined;
  "otherLangs.en": {} | undefined;
};

declare module "astro-i18n" {
  export * from "astro-i18n/";

  export function l<Uri extends RouteUri>(
    route: Uri | (string & {}),
    ...args: keyof RouteParams extends Uri
      ? [
          params?: Record<string, string>,
          targetLangCode?: LangCode,
          routeLangCode?: LangCode
        ]
      : [
          params: RouteParams[Uri],
          targetLangCode?: LangCode,
          routeLangCode?: LangCode
        ]
  ): string;

  export function t<Path extends TranslationPath>(
    path: Path | (string & {}),
    ...args: undefined extends TranslationOptions[Path]
      ? [
          options?: keyof TranslationOptions extends Path
            ? Record<string, unknown>
            : TranslationOptions[Path],
          langCode?: LangCode
        ]
      : [options: TranslationOptions[Path], langCode?: LangCode]
  ): string;

  export function extractRouteLangCode(route: string): LangCode | undefined;

  type Translation =
    | string
    | { [translationKey: string]: string | Translation };
  type Translations = { [langCode: string]: Record<string, Translation> };
  type RouteTranslations = { [langCode: string]: Record<string, string> };
  type InterpolationFormatter = (value: unknown, ...args: unknown[]) => string;
  class AstroI18n {
    defaultLangCode: DefaultLangCode;
    supportedLangCodes: SupportedLangCode[];
    showDefaultLangCode: boolean;
    translations: Translations;
    routeTranslations: RouteTranslations;
    get langCodes(): LangCode[];
    get langCode(): LangCode;
    set langCode(langCode: LangCode);
    get formatters(): Record<string, InterpolationFormatter>;
    init(
      Astro: { url: URL },
      formatters?: Record<string, InterpolationFormatter>
    ): void;
    addTranslations(translations: Translations): void;
    addRouteTranslations(routeTranslations: RouteTranslations): void;
    getFormatter(name: string): InterpolationFormatter | undefined;
    setFormatter(name: string, formatter: InterpolationFormatter): void;
    deleteFormatter(name: string): void;
  }
  export const astroI18n: AstroI18n;
}
