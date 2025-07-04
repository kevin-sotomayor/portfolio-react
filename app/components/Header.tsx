import type { Route } from "../+types/root";



interface LanguagePropInterface {
	language: string,
}

export default function HeaderComponent(language: LanguagePropInterface) {
	const lang = language.language;
	return (
		<header className="app-header">
			<span className="app-header__title">Kevin Sotomayor</span>
			{lang === "fr" ? (
				<h1 className="app-header__subtitle">Développeur Web</h1>
			) : (
				<h1 className="app-header__subtitle">Web Developer</h1>
			)}
		</header>
	)
}