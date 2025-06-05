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
					Definitely reconverted in 2022, I have always been a great computer enthusiast. When I was younger, this interest was expressed through small projects in Python, but it soon became an addiction to learning new skills, be they related to the Web, operating systems, or in related fields such as 3D graphics and network architectures.
				</h2>
				<h3>
					I specialize in building static websites using the fundamental technologies, but also in designing more complex web applications, which require skills in more modern or advanced technologies. I am pragmatic when it comes to choosing the tools I use as I am also well aware that the most popular technologies are overused and don't always meet needs.
				</h3>
			</div>
		</main>
	)
}