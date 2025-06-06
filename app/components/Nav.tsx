import { Link, useOutletContext, } from "react-router";
import type { LanguageInterface } from "../utils/types";



export default function NavComponent({ languageProp }: LanguageInterface) {
	return (
		<nav className="app-nav">
			{languageProp === "fr" ? (
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
			)}
		</nav>
	)
}