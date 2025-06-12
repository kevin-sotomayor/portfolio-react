import type { Route } from "./+types/introduction";
import { languageCookieUtils, } from "../utils/cookies";
import aboutContent from "../data/about_content.json";


export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Kevin Sotomayor - About" },
		{ name: "description", content: "Kevin Sotomayor's portfolio about page" },
	]
}

export async function loader({ request }: Route.ClientLoaderArgs) {
	const cookies = await request.headers.get("Cookie");
	const languageCookie = await languageCookieUtils.parse(cookies);
	return languageCookie;
} 

export default function AboutPage({ loaderData } : Route.ComponentProps ) {
	return (
		<main className="app-about">
			<div className="app-about__text">
				{loaderData && loaderData.language === "fr" ? (
					<>
						<h2>{aboutContent.fr[0]}</h2>
						<h3>{aboutContent.fr[1]}</h3>
						<p>Vous pouvez trouver mon CV <a target="_blank" href="/public/cv_kevin_sotomayor.pdf">ici</a> si vous êtes curieux de connaître mon parcours professionnel.</p>
					</>
				) : (
					<>
						<h2>{aboutContent.en[0]}</h2>
						<h3>{aboutContent.en[1]}</h3>
						<p>You can find my resume <a target="_blank" href="/public/cv_kevin_sotomayor.pdf">here</a> if you are curious about my profesionnal background.</p>
					</>
				)}
			</div>
		</main>
	)
}