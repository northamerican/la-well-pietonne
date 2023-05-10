import { defineAstroI18nConfig } from 'astro-i18n'

const siteUrl = 'https://lawellpietonne.com'

const fr = {
  siteUrlBase: siteUrl,
  siteUrl,
  siteName: 'La Well piétonne',
  siteDescription: 'Consultation publique et pétition pour la piétonnisation permanente de la rue Wellington',

  otherLangs: {
    en: 'English'
  },

  headerDescription: 'Une initiative pour piétonniser la rue Wellington en permanence',

  howToSignHeading: 'Comment signer', 
  howToSign: 'Les résidents de Verdun peuvent signer la pétition pour demander une consultation publique auprès de l\'arrondissement.',
  atASupportingBusiness: 'Chez un commerce participant',
  onTheStreet: 'Dans la rue',

  step: 'étape',
  completed: 'complétée',
  stepsTitle: 'Progrès de l\'initiative',
  steps: {
    1: {
      date: '24 avril',
      title: 'Pétition approuvé',
      subtitle: 'par l\'arrondissement de Verdun'
    },
    2: {
      date: '10 mai',
      title: 'Début de la période de signatures',
      subtitle: '90 jours'
    },
    3: {
      date: '8 août',
      title: 'Fin de la période de signatures',
      subtitle: '3031 signatures requises'
    },
    4: {
      date: 'Fin 2023',
      title: 'Consultation publique',
      subtitle: 'avec les résidents de Verdun'
    }
  },

  petitionTextHeading: 'La texte du pétition',
  
  seeCta: 'Voir la pétition',
  signCta: 'Signer la pétition',
  signCtaSubtext: 'sur montreal.ca',
  signCtaRequirements: 'Résidents de Verdun âgé de 15 ans ou plus',

  email: 'Courriel',
  optional: 'facultatif',

  stayConnected: 'Restez connecté·e',
  byEmail: 'Par courriel',
  onSocialMedia: 'Sur les réseaux sociaux',
  getInvolved: 'Je suis également intéressé·e par le bénévolat ou la collecte de signatures',
  subscribe: 'S\'abonner',
  subscribeSubtext: '',
  subscribed: 'Merci!',
  formError: 'Vous n\'étiez pas abonné·e en raison d\'une erreur.',
  followUsOn: 'Suivez-nous sur',
  and: 'et',

  inspirationAndReading: 'Inspiration et lecture',

  footerNoticeUnaffiliated: 'Ce site n\'est pas affiliée à ',

  contactUs: 'Contactez-nous',

  notFound: '404 : Introuvable',
  goHome: 'Page d\'accueil',

  petitionUrl: 'https://montreal.ca/petitions/detail/6428dc4ac490e6ee4229c32a',
  petitionSignUrl: 'https://montreal.ca/petitions/signer/6428dc4ac490e6ee4229c32a',
}

const en = {
  siteUrlBase: siteUrl,
  siteUrl: `${siteUrl}/en`,
  siteName: 'La Well Piétonne',
  siteDescription: 'A public consultation and petition to pedestrianize Wellington street permanently',

  otherLangs: {
    fr: 'Français'
  },

  headerDescription: 'An initiative to make Wellington a pedestrian street permanently',

  howToSignHeading: 'How to sign the petition', 
  howToSign: 'Residents of Verdun can sign the petition to order a public consultation with the borough.',
  atASupportingBusiness: 'At a supporting businesses',
  onTheStreet: 'On the street',

  step: 'step',
  completed: 'completed',
  stepsTitle: 'Initiative progress',
  steps: {
    1: {
      date: 'April 24',
      title: 'Petition approved',
      subtitle: 'by the borough of Verdun'
    },
    2: {
      date: 'May 10',
      title: 'Signature period beings',
      subtitle: '90 days'
    },
    3: {
      date: 'August 8',
      title: 'Signature period ends',
      subtitle: '3031 signatures needed'
    },
    4: {
      date: 'Late 2023',
      title: 'Public consultation',
      subtitle: 'with residents of Verdun'
    }
  },

  petitionTextHeading: 'Petition text',

  seeCta: 'See petition',
  signCta: 'Sign the petition',
  signCtaSubtext: 'on montreal.ca',
  signCtaRequirements: 'Must be a resident of Verdun age 15 or older',

  email: 'E-mail',
  optional: 'optional',

  stayConnected: 'Stay connected',
  byEmail: 'By e-mail',
  onSocialMedia: 'On social media',
  getInvolved: 'I\'m also interested in volunteering or gathering signatures',
  subscribe: 'Subscribe',
  subscribeSubtext: '',
  subscribed: 'Thanks!',
  formError: 'You could not be subscribed due to an error.',
  followUsOn: 'Follow us on',
  and: 'and',

  inspirationAndReading: 'Inspiration and reading',
  
  footerNoticeUnaffiliated: 'This site is not affiliated with ',
  
  contactUs: 'Contact us',

  notFound: '404: Not Found',
  goHome: 'Go home',

  petitionUrl: 'https://montreal.ca/en/petitions/details/6428dc4ac490e6ee4229c32a',
  petitionSignUrl: 'https://montreal.ca/en/petitions/sign/6428dc4ac490e6ee4229c32a',
}

export const translations = { en, fr }

export default defineAstroI18nConfig({
  defaultLangCode: 'fr',
  supportedLangCodes: ['en'],
  showDefaultLangCode: false,
  translations: { en, fr },
  routeTranslations: {
    en: {
      signer: 'sign',
      petition: 'petition'
    }
  },
})