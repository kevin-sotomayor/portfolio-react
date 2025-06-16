import type { Route } from "./+types/introduction";
import { languageCookieUtils, } from "../utils/cookies";
import introductionContent from "../data/introduction_content.json"



export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Kevin Sotomayor" },
		{ name: "description", content: "Kevin Sotomayor's portfolio homepage" },
	]
}

// export function headers(_: Route.HeadersArgs) {
//   return {
//     'Cache-Control': 's-maxage=1, stale-while-revalidate=59',
//   };
// }

export async function loader({ request }: Route.ClientLoaderArgs) {
	const cookies = await request.headers.get("Cookie");
	const languageCookie = await languageCookieUtils.parse(cookies) || {};
	let data;
	languageCookie.language === "fr" ? data = introductionContent.fr : data = introductionContent.en;
	return data;
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
	return (
		<main className="app-introduction">
			<div className="app-introduction__text">
				{loaderData && (
					<>
						<h2>{loaderData[0]}</h2>
						<h3>{loaderData[1]}</h3>
					</>
				)}
			</div>
		</main>
	)
}
