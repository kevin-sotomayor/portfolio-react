import { Link, } from "react-router";


export default function NavComponent() {
	return (
		<nav>
			<ul>
				<li>
					<Link to={{pathname: "/"}}>Introduction</Link>
					<Link to={{pathname: "/about"}}>About</Link>
					<Link to={{pathname: "/projects"}}>Projects</Link>
					<Link to={{pathname: "/contact"}}>Contact</Link>
				</li>
			</ul>
		</nav>
	)
}