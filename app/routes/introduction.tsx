import type { Route } from "./+types/introduction";
import styles from "../styles/introduction.css?url";
import { languageCookieUtils, } from "../utils/cookies";
import introduction_content from "../data/introduction_content.json"



interface DataInterface {
	introduction: string[],
}

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Kevin Sotomayor" },
		{ name: "description", content: "Kevin Sotomayor's portfolio homepage" },
	]
}

export function links() {
	return [
		{ rel: "stylesheet", href: "styles" },
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
						<h2 className="app-introduction__text__first">{introduction_content.fr[0]}</h2>
						<h3 className="app-introduction__text__second">{introduction_content.fr[1]}</h3>
					</>
				) : (
					<>
						<h2 className="app-introduction__text__first">{introduction_content.en[0]}</h2>
						<h3 className="app-introduction__text__second">{introduction_content.en[1]}</h3>
					</>
				)}
			</div>
		</main>
	)
}
