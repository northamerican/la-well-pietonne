import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
  defaultLangCode: "fr",
  supportedLangCodes: ["en"],
  showDefaultLangCode: true,
  translations: {
    en: {
      siteName: "La Well Piétonne",
      siteDescription: "A public consultation and petition to pedestrianize Wellington street permanently",

      headerDescription: "A public consultation to make Wellington a pedestrian street permanently",

      stepsTitle: "Initiative progress",
      steps: {
        1: {
          title: "Petition draft",
          subtitle: "Collection of 25 signatures"
        },
        2: {
          title: "Petition text approved",
          subtitle: "by the borough of Verdun"
        },
        3: {
          title: "Collection of signatures",
          subtitle: "2500 signatures"
        },
        4: {
          title: "Public consultation",
          subtitle: "[..]"
        }
      },

      signCta: "Sign the petition",
      signCtaSubtext: "on montreal.ca",
      signCtaRequirements: "must be a resident of Verdun age 15 or older",
      
      footerNoticeUnaffiliated: "This initiative is not affiliated with ",
    },
    fr: {
      siteName: "La Well piétonne",
      siteDescription: "Consultation publique et pétition pour la piétonnisation permanente de la rue Wellington",

      headerDescription: "Une consultation publique pour piétonniser la rue Wellington en permanence",

      stepsTitle: "Progrès de l'initiative",
      steps: {
        1: {
          title: "Projet de pétition",
          subtitle: "Collecte de 25 signatures"
        },
        2: {
          title: "Texte approuvé",
          subtitle: "par l'arrondissement de Verdun"
        },
        3: {
          title: "Collecte de signatures",
          subtitle: "2500 signatures"
        },
        4: {
          title: "Consultation publique",
          subtitle: "[..]"
        }
      },

      signCta: "Signer la pétition",
      signCtaSubtext: "sur montreal.ca",
      signCtaRequirements: "résident de Verdun âgé de 15 ans ou plus",

      footerNoticeUnaffiliated: "Cette initiative n'est pas affiliée à ",
    }
  },
  routeTranslations: {},
})