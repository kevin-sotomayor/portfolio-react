import type { Route } from "./+types/Layout";
import type { LanguagePropInterface } from "../utils/types";


export default function HeaderComponent({ languageProp }: LanguagePropInterface) {
	return (
		<header className="app-header">
			<span className="app-header__title">Kevin Sotomayor</span>
			{languageProp === "fr" ? (
				<h1 className="app-header__subtitle">Développeur Web</h1>
			) : (
				<h1 className="app-header__subtitle">Web Developer</h1>
			)}
		</header>
	)
}