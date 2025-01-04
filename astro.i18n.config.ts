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
    "Je suis intéressé·e à participer aux événements et à la consultation publique.",
  subscribe: "S'abonner",
  subscribeSubtext: "",
  subscribed: "Merci! Vous êtes maintenant abonné",
  formError: "Vous n'étiez pas abonné·e en raison d'une erreur.",
  followUsOn: "Suivez-nous sur",
  and: "et",

  homeHeading: "Consultation publique&nbsp;: dates annoncées",
  homeBody: `Cet hiver, l'OCPM et l'arrondissement de Verdun organiseront des événements dans le cadre de la démarche de consultation.`,
  consultationLinkText: "Calendrier et informations",

  contactUs: "Contactez-nous",

  questionsAndAnswersHeading: "Questions et réponses",
  aroundTheWorldHeading: "Rues piétonnes à travers le monde",
  consultationHeading: "Consultation publique",

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

  writeALetterHeading: "Écrire une lettre de soutien",
  writeALetterSubheading: `Utilisez notre outil pour rédiger une lettre de soutien pendant la période de soumission d'opinions. (23 janvier - 12 février 2025)`,
  myNameIs: "Je m'appelle",
  myAgeIs: "Mon age est",
  iLiveInVerdun: "J'habite à Verdun",
  iveLivedInVerdunLongTime: "J'habite à Verdun depuis longtemps",
  howLong: "Depuis combien de temps?",
  yearsExample: "ex: 15 ans",
  iLiveNearPromenadeWellington: "J'habite près de la Promenade Wellington",
  iLiveOnPromenadeWellington: "J'habite sur la Promenade Wellington",
  iFrequentPromenadeWellington: "Je fréquente la Promenade Wellington",
  iHaveVisitedWithMyChildren: "Et j'ai visité avec mes enfants",
  howOften: "À quelle fréquence?",
  howOftenExample: "ex: Chaque jour, chaque semaine",
  iWorkNearPromenadeWellington: "Je travaille près de la Promenade Wellington",
  iWorkOnPromenadeWellington: "Je travaille sur la Promenade Wellington",
  nameOfWorkplace: "Nom de l'entreprise",
  roleAtWorkplace: "Votre rôle",
  workplaceExampleRoles: "Propriétaire, employé, etc.",
  involvedInOrganization:
    "Je suis impliqué·e dans une organisation dans un domaine pertinent",
  involvedInExamples:
    "ex: Sciences sociales, santé publique, environnement, urbanisme, affaires...",
  typeOfOrganization: "Type d'organisation",
  nameOfOrganization: "Nom de l'organisation",
  roleAtOrganization: "Votre rôle",
  organizationExampleRoles: "Membre, contributeur, etc.",
  iHaveAccessibilityNeeds: "J'ai des besoins en accessibilité",
  describeThem: "Décrivez-les",
  accessibilityNeedsExample:
    "Une déficience visuelle, une aide à la mobilité, etc.",
  supportReason:
    "Une rue Wellington piétonne toute l'année permettra surtout de...",
  neighbourhoodMorePleasant: "Rendre le quartier plus agréable",
  increaseComfortAndSafety: "Augmenter le confort et la sécurité de la rue",
  promoteCommercialHub: "La promouvoir en tant que pôle commercial",
  communitySpace: "Créer un nouvel espace communautaire",
  ecologicalTransition: "Soutenir notre transition écologique",
  carFreeStreets: "Soutenir le concept de rues sans voitures",
  ideasSupport:
    "Certaines idées que j'aimerais voir sur une rue Wellington piétonne toute l'année sont...",
  ideasSupportLimitNotice: "Choisissez jusqu'à 3",
  info: "Infos...",
  showMore: "Voir plus",
  otherComments: "D'autres commentaires que vous aimeriez inclure?",
  otherCommentsExample:
    "ex: J'ai visité les rues piétonnes à l'étranger, j'ai une histoire personnelle à partager, etc.",
  yourLetter: "Votre lettre de soutien à l'OCPM",
  generateLetter: "Générer une lettre avec ChatGPT",
  generatingLetter: "Génération de la lettre...",
  letterNotice: `Cette page est destinée à vous aider à rédiger une lettre de soutien. 
    Veuillez la relire attentivement et apporter les modifications nécessaires.`,
  copyLetter: "Sélectionner la lettre et copier",
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

  homeHeading: "Public consultation dates announced",
  homeBody: `This winter, the OCPM and borough of Verdun will be hosting events as part of the consultation process.`,
  consultationLinkText: "Schedule and information",

  contactUs: "Contact us",

  questionsAndAnswersHeading: "Questions and answers",
  aroundTheWorldHeading: "Pedestrian streets around the world",
  consultationHeading: "Public consultation",

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

  writeALetterHeading: "Write a letter",
  writeALetterSubheading:
    "Get help writing a letter of support as part of the opinion submission period. (January 23 - February 12, 2025)",
  myNameIs: "My name is",
  myAgeIs: "My age is",
  iLiveInVerdun: "I live in Verdun",
  iveLivedInVerdunLongTime: "I've lived in Verdun for a long time",
  howLong: "How long?",
  yearsExample: "ex: 15 years",
  iLiveNearPromenadeWellington: "I live near Promenade Wellington",
  iLiveOnPromenadeWellington: "I live on Promenade Wellington",
  iFrequentPromenadeWellington: "I frequent Promenade Wellington",
  iHaveVisitedWithMyChildren: "And I have visited with my children",
  howOften: "How often?",
  howOftenExample: "ex: Daily, weekly",
  iWorkNearPromenadeWellington: "I work near Promenade Wellington",
  iWorkOnPromenadeWellington: "I work on Promenade Wellington",
  nameOfWorkplace: "Name of workplace",
  roleAtWorkplace: "Your role",
  workplaceExampleRoles: "Owner, employee, etc.",
  involvedInOrganization: "I'm involved in an organization in a relevant field",
  involvedInExamples:
    "ex: Social sciences, public health, environment, urban planning, business...",
  typeOfOrganization: "Type of organization",
  nameOfOrganization: "Name of organization",
  roleAtOrganization: "Your role",
  organizationExampleRoles: "Member, contributor, etc.",
  iHaveAccessibilityNeeds: "I have accessibility needs",
  describeThem: "Describe them",
  accessibilityNeedsExample: "I have low vision, a mobility device, etc.",
  supportReason:
    "A year-round pedestrian Wellington street will most importantly...",
  neighbourhoodMorePleasant: "Make the neighbourhood more pleasant",
  increaseComfortAndSafety: "Increase comfort and street safety",
  promoteCommercialHub: "Promote it as a commercial hub",
  communitySpace: "Create a new community space",
  ecologicalTransition: "Support our ecological transition",
  carFreeStreets: "Support the concept of car-free streets",
  ideasSupport:
    "Some ideas I'd mot like to see on a year-round pedestrian Wellington street are...",
  ideasSupportLimitNotice: "Pick up to 3",
  info: "Info...",
  showMore: "Show more",
  otherComments: "Any other comments you'd like to include?",
  otherCommentsExample:
    "ex: I have visited pedestrian streets abroad, I have a personal story to share, etc.",
  yourLetter: "Your letter of support to the OCPM",
  generateLetter: "Generate letter with ChatGPT",
  generatingLetter: "Generating letter...",
  letterNotice: `This page is meant to assist you in writing a letter of support. 
    Please re-read it carefully and make necessary changes.`,
  copyLetter: "Select letter and copy",
};

export const translations = { en, fr };

export default defineAstroI18nConfig({
  defaultLangCode: "fr",
  supportedLangCodes: ["en"],
  showDefaultLangCode: false,
  translations,
  routeTranslations: {
    en: {
      consultation: "consultation",
      petition: "petition",
      "a-travers-le-monde": "around-the-world",
      "boite-a-idees": "share-an-idea",
      "questions-reponses": "q-a",
      "ecrire-une-lettre": "write-a-letter",
    },
  },
});
