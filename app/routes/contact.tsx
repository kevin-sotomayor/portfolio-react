import type { Route } from "./+types/contact";

import pp from "../assets/pp.png";
import "../styles/contact.css";



export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Kevin Sotomayor - Contact" },
		{ name: "description", content: "Kevin Sotomayor's portfolio contact page" },
	]
}


export default function ContactPage() {
	return (
		<main className="app-contact">
			<div className="app-contact__content">
				<div className="app-contact__content__chat">
					<p>Let's get in touch !</p>
					<img src={pp} alt="ASCII ART Kevin Sotomayor" />
				</div>
				<ul className="app-contact__content__socials">
					<li><a href="https://www.linkedin.com/in/kevin-sotomayor-316b7a271/">Linkedin</a></li>
					<li><a href="mailto:kevin.sotomayor@outlook.fr">Mail</a></li>
					<li><a href="https://www.malt.fr/profile/kevinsotomayor1">Malt</a></li>
					<li><a href="https://www.discord.com/users/255352308777353226">Discord</a></li>
				</ul>
			</div>
		</main>
	)
}