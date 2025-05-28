import type { Route } from "./+types/introduction";
import { useState, } from "react";

import "../styles/introduction.css";
import { languageCookieUtils, } from "../utils/cookies";
import content_fr from "../data/introduction_fr.json";
import content_en from "../data/introduction_en.json";



interface DataInterface {
	introduction: string[],
}


export async function loader({ request }: Route.LoaderArgs) {
	const rawCookie = await request.headers.get("Cookie");
	const cookie = await languageCookieUtils.parse(rawCookie);
	return cookie;
} 

export default function HomePage({ loaderData }: Route.ComponentProps) {
	const cookie = loaderData;
	return (
		<main className="app-introduction">
			<div className="app-introduction__text">
				{cookie && cookie.language === "fr" ? (
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
