import type { Route } from "./+types/contact";

import pp from "../assets/pp.png";



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
				<img src={pp} alt="ASCII ART Kevin Sotomayor" />
			</div>
		</main>
	)
}