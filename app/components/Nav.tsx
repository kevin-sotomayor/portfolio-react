import { Link, useLocation, } from "react-router";
import type { LanguagePropInterface } from "../root";



const routes = {
	fr: [
		{ path: "/", label: "Introduction" },
		{ path: "/about", label: "À propos" },
		{ path: "/projects", label: "Projets" },
		{ path: "/contact", label: "Contact" },
	],
	en: [
		{ path: "/", label: "Introduction" },
		{ path: "/about", label: "About" },
		{ path: "/projects", label: "Projects" },
		{ path: "/contact", label: "Contact" },
	]
}

export default function NavComponent(language: LanguagePropInterface) {
	const lang = language.language;
	const currentLocation = useLocation();
	return (
		<nav className="app-nav">
			<ul className="app-nav__list">
				{lang === "fr" ? (
					routes.fr.map((route, index) => (
						currentLocation.pathname === route.path ? (
							<li key={index}><Link to={route.path} className="active-route" viewTransition>{route.label}</Link></li>
						) : (
							<li key={index}><Link to={route.path}>{route.label}</Link></li>
						)
					))
				) : (
					routes.en.map((route, index) => (
						currentLocation.pathname === route.path ? (
							<li key={index}><Link to={route.path} className="active-route" viewTransition>{route.label}</Link></li>
						) : (
							<li key={index}><Link to={route.path}>{route.label}</Link></li>
						)
					))
				)}
			</ul>
		</nav>
	)
}
