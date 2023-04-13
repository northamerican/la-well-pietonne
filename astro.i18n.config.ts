import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
	defaultLangCode: "fr",
	supportedLangCodes: ["fr", "en"],
	showDefaultLangCode: true,
	translations: {
		en: {
			"siteName": "La Well Piétonne",
			"siteDescription": "A public consultation and petition to pedestrianize Wellington street permanently",

			"headerDescription": "A public consultation to make Wellington a pedestrian street permanently"
		},
		fr: {
			"siteName": "La Well piétonne",
			"siteDescription": "Consultation publique et pétition pour la piétonnisation permanente de la rue Wellington",

			"headerDescription": "Une consultation publique pour piétonniser la rue Wellington en permanence"
		}
	},
	routeTranslations: {},
})