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

  headerDescription: `Une initiative citoyenne pour piétonniser 
    la rue Wellington toute l'année`,

  howToSignHeading: "Comment signer",
  howToSign:
    "Les résidents de Verdun peuvent signer la pétition pour demander une consultation publique auprès de l'arrondissement.",
  atASupportingBusiness: "Chez un commerce participant",
  upcomingEvents: "Évènements à venir",

  step: "étape",
  completed: "complétée",
  "in-progress": "en cours",
  coming: "à venir",
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

  homeHeading: "Consultation publique",
  homeBody: `L'Office de consultation publique de Montréal (OCPM) organise la consultation publique sur la piétonnisation à l'année de la rue Wellington. La date et les détails seront annoncés dans les prochains jours.`,
  consultationLink: "https://ocpm.qc.ca/pietonisationwellington",
  consultationLinkText: "Piétonisation permanente de la rue Wellington - OCPM",

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
  goHome: "Page d'accueil 👈",

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

  headerDescription: `A citizens' initiative to make Wellington 
    a year-round pedestrian street`,

  howToSignHeading: "How to sign the petition",
  howToSign:
    "Residents of Verdun can sign the petition to order a public consultation with the borough.",
  atASupportingBusiness: "At a supporting business",
  upcomingEvents: "Upcoming events",

  step: "step",
  completed: "completed",
  "in-progress": "in progress",
  coming: "coming soon",
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

  homeHeading: "Public consultation",
  homeBody: `The Office de consultation publique de Montréal (OCPM) is hosting the public consultation on the year-round pedestrianization of Wellington street. Date and details to be announced in the coming days.`,
  consultationLink: "https://ocpm.qc.ca/pietonisationwellington",
  consultationLinkText: "Piétonisation permanente de la rue Wellington - OCPM",

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
  goHome: "Go home 👈",

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
