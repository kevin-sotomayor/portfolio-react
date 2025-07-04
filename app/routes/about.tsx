import type { Route } from "./+types/introduction";
import { languageCookieUtils, } from "../utils/cookies";
import aboutContent from "../data/about_content.json";



interface DataInterface {
	loaderData : {
		data: string[],
		languageCookie: {
			language: string
		}
	}
}

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Kevin Sotomayor - About" },
		{ name: "description", content: "Kevin Sotomayor's portfolio about page" },
	]
}

// export function headers(_: Route.HeadersArgs) {
//   return {
//     'Cache-Control': 's-maxage=1, stale-while-revalidate=59',
//   };
// }

export async function loader({ request }: Route.LoaderArgs) {
	const cookies = await request.headers.get("Cookie");
	const languageCookie = await languageCookieUtils.parse(cookies) || {};
	let data;
	languageCookie.language === "fr" ? data = aboutContent.fr : data = aboutContent.en;
	return { data, languageCookie };
}

// Not the default type because it was buggy for some reason Dentge
export default function AboutPage({ loaderData }: DataInterface ) {
	return (
		<main className="app-about">
			<div className="app-about__text">
				{loaderData && (
					<>
						<p>{loaderData.data[0]}</p>
						<p>{loaderData.data[1]}</p>
						<p>{loaderData.data[2]}</p>
						{loaderData.languageCookie.language === "fr" ? (
							<p>Vous pouvez trouver mon CV <a target="_blank" href="/cv_kevin_sotomayor.pdf">ici</a> si vous êtes curieux de connaître mon parcours professionnel.</p>
						) : (
							<p>You can find my resume <a target="_blank" href="/cv_kevin_sotomayor.pdf">here</a> if you are curious about my profesionnal background.</p>
						)}
					</>
				)}
			</div>
		</main>
	)
}