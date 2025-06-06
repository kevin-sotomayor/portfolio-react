import type { Route } from "./+types/introduction";
import { useOutletContext, } from "react-router";
import { useContext, } from "react";

import "../styles/introduction.css";
import { languageCookieUtils, } from "../utils/cookies";
import content_fr from "../data/introduction_fr.json";
import content_en from "../data/introduction_en.json";



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
						<h2>{content_fr.introduction[0]}</h2>
						<h3>{content_fr.introduction[1]}</h3>
					</>
				) : (
					<>
						<h2>{content_en.introduction[0]}</h2>
						<h3>{content_en.introduction[1]}</h3>
					</>
				)}
			</div>
		</main>
	)
}
