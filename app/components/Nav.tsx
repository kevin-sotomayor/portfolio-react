import { Link, } from "react-router";


export default function NavComponent() {
	return (
		<nav className="app-nav">
			<ul>
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
		</nav>
	)
}