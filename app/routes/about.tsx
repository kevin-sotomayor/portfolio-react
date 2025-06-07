import type { Route } from "./+types/introduction";

import "../styles/about.css";



export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Kevin Sotomayor - About" },
		{ name: "description", content: "Kevin Sotomayor's portfolio about page" },
	]
}

export default function AboutPage() {
	return (
		<main className="app-about">
			<div className="app-about__text">
				<h2>
					Definitely reconverted in 2022, I have always been a great computer enthusiast. When I was younger, this interest was expressed through small projects in Python and also Web 1.0 personal Websites, but it soon became an addiction to learning new skills, be they related to the Web, operating systems, or in related fields such as 3D graphics and network architectures.
				</h2>
				<h3>
					I specialize in building graphical interfaces for static pages and more complex Web applications with HTML, CSS, JavaScript, TypeScript, React and its framework React Router v7.
				</h3>
				<p>You can find my resume <a href="#">here</a> if you are curious about my profesionnal background.</p>
			</div>
		</main>
	)
}