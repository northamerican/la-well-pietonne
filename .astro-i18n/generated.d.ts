type DefaultLangCode = "fr"
type SupportedLangCode = "en"
type LangCode = DefaultLangCode | SupportedLangCode
type RouteUri = | "/404" | "/petition" | "/questions-reponses" | "/signer" 
type RouteParams = {"/404": undefined; "/petition": undefined; "/questions-reponses": undefined; "/signer": undefined; }
type TranslationPath = "siteUrlBase" | "siteUrl" | "siteName" | "siteDescription" | "otherLangs.fr" | "isoLangCode" | "headerDescription" | "howToSignHeading" | "howToSign" | "atASupportingBusiness" | "onTheStreet" | "step" | "completed" | "stepsTitle" | "steps.1.date" | "steps.1.title" | "steps.1.subtitle" | "steps.2.date" | "steps.2.title" | "steps.2.subtitle" | "steps.3.date" | "steps.3.title" | "steps.3.subtitle" | "steps.4.date" | "steps.4.title" | "steps.4.subtitle" | "petitionTextHeading" | "petitionTextCta" | "email" | "optional" | "stayConnected" | "byEmail" | "onSocialMedia" | "getInvolved" | "subscribe" | "subscribeSubtext" | "subscribed" | "formError" | "followUsOn" | "and" | "inspirationAndReading" | "footerNoticeUnaffiliated" | "contactUs" | "questionsAndAnswersHeading" | "questionsAndAnswersBody" | "questionsAndAnswersCta" | "aroundTheWorldHeading" | "aroundTheWorldBody" | "aroundTheWorldCta" | "notFound" | "goHome" | "online" | "petitionLinkText" | "onlinePetitionNotice" | "petitionUrl" | "petitionSignUrl" | "otherLangs.en"
type TranslationOptions = { "siteUrlBase": {} | undefined; "siteUrl": {} | undefined; "siteName": {} | undefined; "siteDescription": {} | undefined; "otherLangs.fr": {} | undefined; "isoLangCode": {} | undefined; "headerDescription": {} | undefined; "howToSignHeading": {} | undefined; "howToSign": {} | undefined; "atASupportingBusiness": {} | undefined; "onTheStreet": {} | undefined; "step": {} | undefined; "completed": {} | undefined; "stepsTitle": {} | undefined; "steps.1.date": {} | undefined; "steps.1.title": {} | undefined; "steps.1.subtitle": {} | undefined; "steps.2.date": {} | undefined; "steps.2.title": {} | undefined; "steps.2.subtitle": {} | undefined; "steps.3.date": {} | undefined; "steps.3.title": {} | undefined; "steps.3.subtitle": {} | undefined; "steps.4.date": {} | undefined; "steps.4.title": {} | undefined; "steps.4.subtitle": {} | undefined; "petitionTextHeading": {} | undefined; "petitionTextCta": {} | undefined; "email": {} | undefined; "optional": {} | undefined; "stayConnected": {} | undefined; "byEmail": {} | undefined; "onSocialMedia": {} | undefined; "getInvolved": {} | undefined; "subscribe": {} | undefined; "subscribeSubtext": {} | undefined; "subscribed": {} | undefined; "formError": {} | undefined; "followUsOn": {} | undefined; "and": {} | undefined; "inspirationAndReading": {} | undefined; "footerNoticeUnaffiliated": {} | undefined; "contactUs": {} | undefined; "questionsAndAnswersHeading": {} | undefined; "questionsAndAnswersBody": {} | undefined; "questionsAndAnswersCta": {} | undefined; "aroundTheWorldHeading": {} | undefined; "aroundTheWorldBody": {} | undefined; "aroundTheWorldCta": {} | undefined; "notFound": {} | undefined; "goHome": {} | undefined; "online": {} | undefined; "petitionLinkText": {} | undefined; "onlinePetitionNotice": {} | undefined; "petitionUrl": {} | undefined; "petitionSignUrl": {} | undefined; "otherLangs.en": {} | undefined; }

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
