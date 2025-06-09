import type { Route, } from "./+types/projects";
import { languageCookieUtils } from "../utils/cookies";
import projectsContent from "../data/projects_content.json";
import img8beats from "../assets/8beats.png";



export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Kevin Sotomayor - Projects" },
		{ name: "description", content: "Kevin Sotomayor's portfolio projects page" },
	]
}

export async function loader({ request }: Route.LoaderArgs) {
	const cookies = await request.headers.get("Cookie");
	const languageCookie = await languageCookieUtils.parse(cookies);
	return languageCookie;
} 

export default function ProjectsPage({ loaderData }: Route.ComponentProps) {
	return (
		<main className="app-projects">
			<ul>
				{loaderData && loaderData.language === "fr" ? (
					projectsContent.fr.map((project, index) => (
						<li key={index}>
							<a href={project.url}>
								<article>
									<p>{project.company}</p>
									<p>{project.mission}</p>
									<img src={img8beats} alt={project.img_alt} />
								</article>
							</a>
						</li>
					))
				) : (
					projectsContent.fr.map((project, index) => (
						<li key={index}>
							<a href={project.url}>
								<article>
									<p>{project.company}</p>
									<p>{project.mission}</p>
									<img src={img8beats} alt={project.img_alt} />
								</article>
							</a>
						</li>
					))
				)}
			</ul>
		</main>
	)
}