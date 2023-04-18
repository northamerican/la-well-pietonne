import { defineAstroI18nConfig } from 'astro-i18n'

const en = {
  siteName: 'La Well Piétonne',
  siteDescription: 'A public consultation and petition to pedestrianize Wellington street permanently',

  otherLangs: {
    fr: 'Français'
  },

  headerDescription: 'A public consultation to make Wellington a pedestrian street permanently',

  stepsTitle: 'Initiative progress',
  steps: {
    1: {
      title: 'Petition draft',
      subtitle: 'Signed by 25 residents'
    },
    2: {
      title: 'Petition text approved',
      subtitle: 'by the borough of Verdun'
    },
    3: {
      title: 'Signature period',
      subtitle: '90 days ~ 2500 signatures'
    },
    4: {
      title: 'Public consultation',
      subtitle: 'with residents of Verdun'
    }
  },

  petitionTextHeading: 'Petition text',

  signCta: 'Sign the petition',
  signCtaSubtext: 'on montreal.ca',
  signCtaRequirements: 'Must be a resident of Verdun age 15 or older',

  volunteerCta: 'Volunteer',
  volunteerCtaSubtext: 'for signature collection',

  inspirationAndReading: 'Inspiration and reading',
  
  footerNoticeUnaffiliated: 'This public initiative is not affiliated with ',

  petitionUrl: 'https://montreal.ca/en/petitions/details/6428dc4ac490e6ee4229c32a'
}

const fr = {
  siteName: 'La Well piétonne',
  siteDescription: 'Consultation publique et pétition pour la piétonnisation permanente de la rue Wellington',

  otherLangs: {
    en: 'English'
  },

  headerDescription: 'Une consultation publique pour piétonniser la rue Wellington en permanence',

  stepsTitle: 'Progrès de l\'initiative',
  steps: {
    1: {
      title: 'Projet de pétition',
      subtitle: 'Signée par 25 résidents'
    },
    2: {
      title: 'Texte approuvé',
      subtitle: 'par l\'arrondissement de Verdun'
    },
    3: {
      title: 'Période de signatures',
      subtitle: '90 jours ~ 2500 signatures'
    },
    4: {
      title: 'Consultation publique',
      subtitle: 'avec les résidents de Verdun'
    }
  },

  petitionTextHeading: 'La texte du pétition',

  signCta: 'Signer la pétition',
  signCtaSubtext: 'sur montreal.ca',
  signCtaRequirements: 'Résidents de Verdun âgé de 15 ans ou plus',

  volunteerCta: 'Bénévole',
  volunteerCtaSubtext: 'pour la collecte de signatures',

  inspirationAndReading: 'Inspiration et lecture',

  footerNoticeUnaffiliated: 'Cette initiative publique n\'est pas affiliée à ',

  petitionUrl: 'https://montreal.ca/petitions/detail/6428dc4ac490e6ee4229c32a'
}

export const translations = { en, fr }

export default defineAstroI18nConfig({
  defaultLangCode: 'fr',
  supportedLangCodes: ['en'],
  showDefaultLangCode: true,
  translations: { en, fr },
  routeTranslations: {},
})