type DefaultLangCode = "fr"
type SupportedLangCode = "en"
type LangCode = DefaultLangCode | SupportedLangCode
type RouteUri = | "/petition" | "/signer" 
type RouteParams = {"/petition": undefined; "/signer": undefined; }
type TranslationPath = "siteUrlBase" | "siteUrl" | "siteName" | "siteDescription" | "otherLangs.fr" | "headerDescription" | "stepsTitle" | "steps.1.title" | "steps.1.subtitle" | "steps.2.title" | "steps.2.subtitle" | "steps.3.title" | "steps.3.subtitle" | "steps.4.title" | "steps.4.subtitle" | "petitionTextHeading" | "signCta" | "signCtaSubtext" | "signCtaRequirements" | "email" | "optional" | "volunteerCta" | "volunteerCtaSubtext" | "inspirationAndReading" | "footerNoticeUnaffiliated" | "contactUs" | "petitionUrl" | "petitionSignUrl" | "otherLangs.en"
type TranslationOptions = { "siteUrlBase": {} | undefined; "siteUrl": {} | undefined; "siteName": {} | undefined; "siteDescription": {} | undefined; "otherLangs.fr": {} | undefined; "headerDescription": {} | undefined; "stepsTitle": {} | undefined; "steps.1.title": {} | undefined; "steps.1.subtitle": {} | undefined; "steps.2.title": {} | undefined; "steps.2.subtitle": {} | undefined; "steps.3.title": {} | undefined; "steps.3.subtitle": {} | undefined; "steps.4.title": {} | undefined; "steps.4.subtitle": {} | undefined; "petitionTextHeading": {} | undefined; "signCta": {} | undefined; "signCtaSubtext": {} | undefined; "signCtaRequirements": {} | undefined; "email": {} | undefined; "optional": {} | undefined; "volunteerCta": {} | undefined; "volunteerCtaSubtext": {} | undefined; "inspirationAndReading": {} | undefined; "footerNoticeUnaffiliated": {} | undefined; "contactUs": {} | undefined; "petitionUrl": {} | undefined; "petitionSignUrl": {} | undefined; "otherLangs.en": {} | undefined; }

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