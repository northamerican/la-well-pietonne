import { defineAstroI18nConfig } from "astro-i18n";

const siteUrl = "https://lawellpietonne.com";

const fr = {
  siteUrlBase: siteUrl,
  siteUrl,
  siteName: "La Well piétonne",
  siteDescription:
    "Consultation publique et pétition pour la piétonnisation permanente de la rue Wellington",

  otherLangs: {
    en: "English",
  },
  isoLangCode: "fr-ca",

  headerDescription:
    "Une initiative citoyenne pour piétonniser la rue Wellington toute l'année",

  howToSignHeading: "Comment signer",
  howToSign:
    "Les résidents de Verdun peuvent signer la pétition pour demander une consultation publique auprès de l'arrondissement.",
  atASupportingBusiness: "Chez un commerce participant",
  upcomingEvents: "Évènements à venir",

  step: "étape",
  completed: "complétée",
  stepsHeading: "Progrès de l'initiative",

  petitionTextHeading: "Texte de la pétition",

  email: "Courriel",
  optional: "facultatif",

  stayConnected: "Restez connecté·e",
  byEmail: "Par courriel",
  onSocialMedia: "Sur les réseaux sociaux",
  getInvolved:
    "Je suis intéressé·e à participer aux événements et à la consultation publique",
  subscribe: "S'abonner",
  subscribeSubtext: "",
  subscribed: "Merci! Vous êtes maintenant abonné",
  formError: "Vous n'étiez pas abonné·e en raison d'une erreur.",
  followUsOn: "Suivez-nous sur",
  and: "et",

  completeHeading: "Ça bouge à la mairie!",
  completeBody: `L'arrondissement de Verdun a maintenant budgété et mandaté l'Office de consultation publique de Montréal (OCPM) pour tenir la consultation publique sur la piétonnisation à l'année de la rue Wellington.
La date sera bientôt fixée.

Profitez du beau temps et suivez-nous ici pour les mises à jour.`,

  inspirationAndReading: "Inspiration et lecture",

  footerNoticeUnaffiliated: "Ce site n'est pas affiliée à ",

  contactUs: "Contactez-nous",

  questionsAndAnswersHeading: "Questions et réponses",

  aroundTheWorldHeading: "Rues piétonnes à travers le monde",

  shareAnIdeaHeading: "Boite à idées",
  shareAnIdeaSubheading:
    "À quoi devrait ressembler notre rue piétonne ouverte toute l'année ?",
  ideasGallery: "Galerie d'idées",
  shareYourIdea: "Partagez votre idée ici",

  ideaName: "Votre idée",
  ideaDetails: "Dites-nous en plus...",
  authorName: "Votre nom",
  submit: "Soumettre",
  stayConnectedByEmail: "Restez connecté·e par courriel",
  yourIdeaIsBeingSubmitted: "Votre idée est en cours de publication...",
  iLikeThisIdea: "J'aime cette idée !",
  ideaBy: "Idée de",
  ideaFormSuccess: "Merci ! Votre idée a été soumise.",
  ideaFormError: "Désolé, une erreur s'est produite.",

  notFound: "404 : Introuvable",
  goHome: "Page d'accueil",

  online: "En ligne",
  petitionLinkText: "Signer la pétition sur montreal.ca",
  onlinePetitionNotice: "Résidents de Verdun âgé de 15 ans ou plus.",

  petitionUrl: "https://montreal.ca/petitions/detail/6428dc4ac490e6ee4229c32a",
  petitionSignUrl:
    "https://montreal.ca/petitions/signer/6428dc4ac490e6ee4229c32a",
};

const en = {
  siteUrlBase: siteUrl,
  siteUrl: `${siteUrl}/en`,
  siteName: "La Well Piétonne",
  siteDescription:
    "A public consultation and petition to pedestrianize Wellington street permanently",

  otherLangs: {
    fr: "Français",
  },
  isoLangCode: "en-ca",

  headerDescription:
    "A citizens' initiative to make Wellington a year-round pedestrian street",

  howToSignHeading: "How to sign the petition",
  howToSign:
    "Residents of Verdun can sign the petition to order a public consultation with the borough.",
  atASupportingBusiness: "At a supporting business",
  upcomingEvents: "Upcoming events",

  step: "step",
  completed: "completed",
  stepsHeading: "Initiative progress",

  petitionTextHeading: "Petition text",

  email: "E-mail",
  optional: "optional",

  stayConnected: "Stay connected",
  byEmail: "By e-mail",
  onSocialMedia: "On social media",
  getInvolved:
    "I'm also interested in attending events and public consultation",
  subscribe: "Subscribe",
  subscribeSubtext: "",
  subscribed: "Thanks! You've been subscribed.",
  formError: "You could not be subscribed due to an error.",
  followUsOn: "Follow us on",
  and: "and",

  completeHeading: "Things are moving at borough hall!",
  completeBody: `The borough of Verdun has now budgeted and assigned l'Office de consultation publique de Montréal (OCPM) to host the public consultation on the year-round pedestrianization of Wellington street. The date will soon be set.

Enjoy the lovely weather and follow us here for updates.`,

  inspirationAndReading: "Inspiration and reading",

  footerNoticeUnaffiliated: "This site is not affiliated with ",

  contactUs: "Contact us",

  questionsAndAnswersHeading: "Questions and answers",

  aroundTheWorldHeading: "Pedestrian streets around the world",

  shareAnIdeaHeading: "Share an idea",
  shareAnIdeaSubheading:
    "What should our year-round pedestrian street look like?",
  ideasGallery: "Ideas gallery",
  shareYourIdea: "Share an idea here",

  ideaName: "Your idea",
  ideaDetails: "Tell us more...",
  authorName: "Your name",
  submit: "Submit",
  stayConnectedByEmail: "Stay connected by e-mail",
  yourIdeaIsBeingSubmitted: "Your idea is being published...",
  iLikeThisIdea: "I like this idea!",
  ideaBy: "Idea by",
  ideaFormSuccess: "Thanks! Your idea has been submitted.",
  ideaFormError: "Sorry, an error occurred.",

  notFound: "404: Not Found",
  goHome: "Go home",

  online: "Online",
  petitionLinkText: "Sign the petition on montreal.ca",
  onlinePetitionNotice: "Must be a resident of Verdun age 15 or older.",

  petitionUrl:
    "https://montreal.ca/en/petitions/details/6428dc4ac490e6ee4229c32a",
  petitionSignUrl:
    "https://montreal.ca/en/petitions/sign/6428dc4ac490e6ee4229c32a",
};

export const translations = { en, fr };

export default defineAstroI18nConfig({
  defaultLangCode: "fr",
  supportedLangCodes: ["en"],
  showDefaultLangCode: false,
  translations,
  routeTranslations: {
    en: {
      signer: "sign",
      petition: "petition",
      "a-travers-le-monde": "around-the-world",
      "boite-a-idees": "share-an-idea",
      "questions-reponses": "q-a",
    },
  },
});
