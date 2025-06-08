import type { Route } from "./+types/introduction";
import { languageCookieUtils, } from "../utils/cookies";
import introductionContent from "../data/introduction_content.json"



interface DataInterface {
	introduction: string[],
}

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Kevin Sotomayor" },
		{ name: "description", content: "Kevin Sotomayor's portfolio homepage" },
	]
}

export async function loader({ request }: Route.ClientLoaderArgs) {
	const cookies = await request.headers.get("Cookie");
	const languageCookie = await languageCookieUtils.parse(cookies);
	return languageCookie;
} 

export default function HomePage({ loaderData }: Route.ComponentProps) {
	return (
		<main className="app-introduction">
			<div className="app-introduction__text">
				{loaderData && loaderData.language === "fr" ? (
					<>
						<h2>{introductionContent.fr[0]}</h2>
						<h3>{introductionContent.fr[1]}</h3>
					</>
				) : (
					<>
						<h2>{introductionContent.en[0]}</h2>
						<h3>{introductionContent.en[1]}</h3>
					</>
				)}
			</div>
		</main>
	)
}
