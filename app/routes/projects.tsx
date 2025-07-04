import type { Route, } from "./+types/projects";
import { languageCookieUtils } from "../utils/cookies";
import topshotsImg from "../assets/topshots.png";
import eightbeatsImg from "../assets/8beats.png";
import purplepropositionImg from "../assets/purpleproposition.png";
import "../styles/projects.css";



export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Kevin Sotomayor - Projects" },
		{ name: "description", content: "Kevin Sotomayor's portfolio projects page" },
	]
}

// export function headers(_: Route.HeadersArgs) {
//   return {
// 	'Cache-Control': 's-maxage=1, stale-while-revalidate=59',
//   };
// }

export function link({}: Route.MetaArgs) {
	return [
		{ href: topshotsImg, rel: "preload" },
		{ href: eightbeatsImg, rel: "preload" },
		{ href: purplepropositionImg, rel: "preload" },
	]
}

export async function loader({ request }: Route.LoaderArgs) {
	let data;
	const projects = {
		fr: [
			{
				"company": "Topshots",
				"mission": "Refonte totale du site Web de l'entreprise en cours",
				"url": "https://www.topshots.fr",
				"img_url": topshotsImg,
				"img_alt": "Page d'accueil du site actuel"
			},
			{
				"company": "8Beats",
				"mission": "Création de composants React pour la Web Radio",
				"url": "https://www.8beats.co",
				"img_url": eightbeatsImg,
				"img_alt": "Page d'accueil de l'application Web"
			},
			{
				"company": "purpleproposition",
				"mission": "Création du portfolio de designer graphique",
				"url": "https://www.purpleproposition.fr",
				"img_url": purplepropositionImg,
				"img_alt": "Vue du portfolio"
			}
		],
		en: [
			{
				"company": "Topshots",
				"mission": "Total redesign of the company Website in progress",
				"url": "https://www.topshots.fr",
				"img_url": topshotsImg,
				"img_alt": "Homepage of the current version of the Website"
			},
			{
				"company": "8Beats",
				"mission": "Creation of React components for the Web Radio",
				"url": "https://www.8beats.co",
				"img_url": eightbeatsImg,
				"img_alt": "Homepage of the Web app"
			},
			{
				"company": "purpleproposition",
				"mission": "Development and deploying of a graphic designer's portfolio",
				"url": "https://www.purpleproposition.fr",
				"img_url": purplepropositionImg,
				"img_alt": "Portfolio view"
			}
		]
	}
	const cookies = await request.headers.get("Cookie");
	const languageCookie = await languageCookieUtils.parse(cookies) || {};
	languageCookie.language === "fr" ? data = projects.fr : data = projects.en;
	return data;
}

export default function ProjectsPage({ loaderData }: Route.ComponentProps) {
	return (
		<main className="app-projects">
			<ul>
				{loaderData.map((project, index: number) => (
					<li key={index}>
						<a href={project.url} target="_blank">
							<article>
								<p>{project.company}</p>
								<p>{project.mission}</p>
								<img src={project.img_url} alt={project.img_alt} />
							</article>
						</a>
					</li>
				))}
			</ul>
		</main>
	)
}