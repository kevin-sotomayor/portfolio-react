import { Link, useLocation, } from "react-router";
import type { LanguageInterface } from "../utils/types";


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

export default function NavComponent({ languageProp }: LanguageInterface) {	
	const currentLocation = useLocation();
	return (
		<nav className="app-nav">
			{/* {languageProp === "fr" ? (
				<ul className="app-nav__list">
					<li>
						<Link to={{pathname: "/"}}>Introduction</Link>
					</li>
					<li>
						<Link to={{pathname: "/about"}}>À propos</Link>
					</li>
					<li>
						<Link to={{pathname: "/projects"}}>Projets</Link>
					</li>
					<li>
						<Link to={{pathname: "/contact"}}>Contact</Link>
					</li>
				</ul>
			) : (
				<ul className="app-nav__list">
					<li>
						<Link to={{pathname: "/"}}>Introduction</Link>
					</li>
					<li>
						<Link to={{pathname: "/about"}}>About</Link>
					</li>
					<li>
						<Link to={{pathname: "/projects"}}>Projects</Link>
					</li>
					<li>
						<Link to={{pathname: "/contact"}}>Contact</Link>
					</li>
				</ul>
			)} */}
			<ul className="app-nav__list">
				{languageProp === "fr" ? (
					routes.fr.map((route, index) => (
						currentLocation.pathname === route.path ? (
							<li key={index}><Link to={route.path} className="active-route">{route.label}</Link></li>
						) : (
							<li key={index}><Link to={route.path}>{route.label}</Link></li>
						)
					))
				) : (
					routes.en.map((route, index) => (
						currentLocation.pathname === route.path ? (
							<li key={index}><Link to={route.path} className="active-route">{route.label}</Link></li>
						) : (
							<li key={index}><Link to={route.path}>{route.label}</Link></li>
						)
					))
				)}
			</ul>
		</nav>
	)
}