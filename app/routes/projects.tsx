import type { Route, } from "./+types/projects";



export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Kevin Sotomayor - Projects" },
		{ name: "description", content: "Kevin Sotomayor's portfolio projects page" },
	]
}

export default function ProjectsPage() {
	return (
		<p>projects</p>
	)
}