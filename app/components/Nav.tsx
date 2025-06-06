import { Link, useOutletContext, } from "react-router";




function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
	const listElement: [] = document.querySelector(".app-nav__list");
}


export default function NavComponent() {
	return (
		<nav className="app-nav">
			<ul className="app-nav__list">
				<li>
					<Link to={{pathname: "/"}} onClick={handleClick}>Introduction</Link>
				</li>
				<li>
					<Link to={{pathname: "/about"}} onClick={handleClick}>About</Link>
				</li>
				<li>
					<Link to={{pathname: "/projects"}} onClick={handleClick}>Projects</Link>
				</li>
				<li>
					<Link to={{pathname: "/contact"}} onClick={handleClick}>Contact</Link>
				</li>
			</ul>
		</nav>
	)
}