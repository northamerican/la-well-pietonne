type DefaultLangCode = "fr"
type SupportedLangCode = "en"
type LangCode = DefaultLangCode | SupportedLangCode
type RouteUri = | "/404" | "/a-travers-le-monde" | "/boite-a-idees" | "/consultation" | "/ecrire-une-lettre" | "/petition" | "/questions-reponses" | "/" 
type RouteParams = {"/404": undefined; "/a-travers-le-monde": undefined; "/boite-a-idees": undefined; "/consultation": undefined; "/ecrire-une-lettre": undefined; "/petition": undefined; "/questions-reponses": undefined; "/": undefined; }
type TranslationPath = "siteUrlBase" | "siteUrl" | "siteName" | "siteDescription" | "otherLangs.fr" | "isoLangCode" | "headerDescription" | "howToSignHeading" | "howToSign" | "atASupportingBusiness" | "upcomingEvents" | "step" | "completed" | "in-progress" | "coming" | "stepsHeading" | "petitionTextHeading" | "email" | "optional" | "stayConnected" | "byEmail" | "onSocialMedia" | "getInvolved" | "subscribe" | "subscribeSubtext" | "subscribed" | "subscribeError" | "followUsOn" | "and" | "homeHeading" | "homeBody" | "consultationLinkText" | "pressReleaseLinkText" | "contactUs" | "questionsAndAnswersHeading" | "aroundTheWorldHeading" | "consultationHeading" | "shareAnIdeaHeading" | "shareAnIdeaSubheading" | "shareAnIdeaEnded" | "ideasGallery" | "shareYourIdea" | "ideaName" | "ideaDetails" | "authorName" | "submit" | "stayConnectedByEmail" | "yourIdeaIsBeingSubmitted" | "iLikeThisIdea" | "ideaBy" | "ideaFormSuccess" | "generalError" | "notFound" | "home" | "online" | "petitionLinkText" | "onlinePetitionNotice" | "petitionUrl" | "petitionSignUrl" | "writeALetterHeading" | "writeALetterSubheading" | "myNameIs" | "fullName" | "myAgeIs" | "iLiveInVerdun" | "iveLivedInVerdunLongTime" | "howLong" | "yearsExample" | "iLiveNearPromenadeWellington" | "iLiveOnPromenadeWellington" | "iFrequentPromenadeWellington" | "iHaveVisitedWithMyChildren" | "howOften" | "howOftenExample" | "iWorkNearPromenadeWellington" | "iWorkOnPromenadeWellington" | "nameOfWorkplace" | "roleAtWorkplace" | "workplaceExampleRoles" | "involvedInOrganization" | "involvedInExamples" | "typeOfOrganization" | "nameOfOrganization" | "roleAtOrganization" | "organizationExampleRoles" | "iHaveAccessibilityNeeds" | "describeThem" | "accessibilityNeedsExample" | "supportReason" | "neighbourhoodMorePleasant" | "increaseComfortAndSafety" | "promoteCommercialHub" | "communitySpace" | "ecologicalTransition" | "carFreeStreets" | "ideasSupport" | "ideasSupportLimitNotice" | "info" | "showMore" | "otherComments" | "otherCommentsExample" | "howDoYouFeel" | "howDoYouFeelExample" | "concerns" | "yourLetter" | "generateLetter" | "generatingLetter" | "letterNotice" | "copyLetter" | "downloadLetter" | "howToSubmitYourLetter" | "howToSubmitYourLetterText" | "transmettreUneLettre" | "englishSubmissionsNotice" | "howToSubmitYourLetterInstructions" | "otherLangs.en"
type TranslationOptions = { "siteUrlBase": {} | undefined; "siteUrl": {} | undefined; "siteName": {} | undefined; "siteDescription": {} | undefined; "otherLangs.fr": {} | undefined; "isoLangCode": {} | undefined; "headerDescription": {} | undefined; "howToSignHeading": {} | undefined; "howToSign": {} | undefined; "atASupportingBusiness": {} | undefined; "upcomingEvents": {} | undefined; "step": {} | undefined; "completed": {} | undefined; "in-progress": {} | undefined; "coming": {} | undefined; "stepsHeading": {} | undefined; "petitionTextHeading": {} | undefined; "email": {} | undefined; "optional": {} | undefined; "stayConnected": {} | undefined; "byEmail": {} | undefined; "onSocialMedia": {} | undefined; "getInvolved": {} | undefined; "subscribe": {} | undefined; "subscribeSubtext": {} | undefined; "subscribed": {} | undefined; "subscribeError": {} | undefined; "followUsOn": {} | undefined; "and": {} | undefined; "homeHeading": {} | undefined; "homeBody": {} | undefined; "consultationLinkText": {} | undefined; "pressReleaseLinkText": {} | undefined; "contactUs": {} | undefined; "questionsAndAnswersHeading": {} | undefined; "aroundTheWorldHeading": {} | undefined; "consultationHeading": {} | undefined; "shareAnIdeaHeading": {} | undefined; "shareAnIdeaSubheading": {} | undefined; "shareAnIdeaEnded": {} | undefined; "ideasGallery": {} | undefined; "shareYourIdea": {} | undefined; "ideaName": {} | undefined; "ideaDetails": {} | undefined; "authorName": {} | undefined; "submit": {} | undefined; "stayConnectedByEmail": {} | undefined; "yourIdeaIsBeingSubmitted": {} | undefined; "iLikeThisIdea": {} | undefined; "ideaBy": {} | undefined; "ideaFormSuccess": {} | undefined; "generalError": {} | undefined; "notFound": {} | undefined; "home": {} | undefined; "online": {} | undefined; "petitionLinkText": {} | undefined; "onlinePetitionNotice": {} | undefined; "petitionUrl": {} | undefined; "petitionSignUrl": {} | undefined; "writeALetterHeading": {} | undefined; "writeALetterSubheading": {} | undefined; "myNameIs": {} | undefined; "fullName": {} | undefined; "myAgeIs": {} | undefined; "iLiveInVerdun": {} | undefined; "iveLivedInVerdunLongTime": {} | undefined; "howLong": {} | undefined; "yearsExample": {} | undefined; "iLiveNearPromenadeWellington": {} | undefined; "iLiveOnPromenadeWellington": {} | undefined; "iFrequentPromenadeWellington": {} | undefined; "iHaveVisitedWithMyChildren": {} | undefined; "howOften": {} | undefined; "howOftenExample": {} | undefined; "iWorkNearPromenadeWellington": {} | undefined; "iWorkOnPromenadeWellington": {} | undefined; "nameOfWorkplace": {} | undefined; "roleAtWorkplace": {} | undefined; "workplaceExampleRoles": {} | undefined; "involvedInOrganization": {} | undefined; "involvedInExamples": {} | undefined; "typeOfOrganization": {} | undefined; "nameOfOrganization": {} | undefined; "roleAtOrganization": {} | undefined; "organizationExampleRoles": {} | undefined; "iHaveAccessibilityNeeds": {} | undefined; "describeThem": {} | undefined; "accessibilityNeedsExample": {} | undefined; "supportReason": {} | undefined; "neighbourhoodMorePleasant": {} | undefined; "increaseComfortAndSafety": {} | undefined; "promoteCommercialHub": {} | undefined; "communitySpace": {} | undefined; "ecologicalTransition": {} | undefined; "carFreeStreets": {} | undefined; "ideasSupport": {} | undefined; "ideasSupportLimitNotice": {} | undefined; "info": {} | undefined; "showMore": {} | undefined; "otherComments": {} | undefined; "otherCommentsExample": {} | undefined; "howDoYouFeel": {} | undefined; "howDoYouFeelExample": {} | undefined; "concerns": {} | undefined; "yourLetter": {} | undefined; "generateLetter": {} | undefined; "generatingLetter": {} | undefined; "letterNotice": {} | undefined; "copyLetter": {} | undefined; "downloadLetter": {} | undefined; "howToSubmitYourLetter": {} | undefined; "howToSubmitYourLetterText": {} | undefined; "transmettreUneLettre": {} | undefined; "englishSubmissionsNotice": {} | undefined; "howToSubmitYourLetterInstructions": {} | undefined; "otherLangs.en": {} | undefined; }

declare module "astro-i18n" {
	export * from "astro-i18n/"
	
	export function l<Uri extends RouteUri>(
		route: Uri | string & {},
		...args: keyof RouteParams extends Uri
			? [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
			: [params: RouteParams[Uri], targetLangCode?: LangCode, routeLangCode?: LangCode]
	): string
	
	export function t<Path extends TranslationPath>(
		path: Path | string & {},
		...args: undefined extends TranslationOptions[Path]
			? [options?: keyof TranslationOptions extends Path ? Record<string, unknown> : TranslationOptions[Path], langCode?: LangCode]
			: [options: TranslationOptions[Path], langCode?: LangCode]
	): string
	
	export function extractRouteLangCode(route: string): LangCode | undefined
	
	type Translation = string | { [translationKey: string]: string | Translation }
	type Translations = { [langCode: string]: Record<string, Translation> }
	type RouteTranslations = { [langCode: string]: Record<string, string> }
	type InterpolationFormatter = (value: unknown, ...args: unknown[]) => string
	class AstroI18n {
		defaultLangCode: DefaultLangCode
		supportedLangCodes: SupportedLangCode[]
		showDefaultLangCode: boolean
		translations: Translations
		routeTranslations: RouteTranslations
		get langCodes(): LangCode[]
		get langCode(): LangCode
		set langCode(langCode: LangCode)
		get formatters(): Record<string, InterpolationFormatter>
		init(Astro: { url: URL }, formatters?: Record<string, InterpolationFormatter>): void
		addTranslations(translations: Translations): void
		addRouteTranslations(routeTranslations: RouteTranslations): void
		getFormatter(name: string): InterpolationFormatter | undefined
		setFormatter(name: string, formatter: InterpolationFormatter): void
		deleteFormatter(name: string): void
	}
	export const astroI18n: AstroI18n
}
