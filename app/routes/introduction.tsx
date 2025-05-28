import type { Route } from "./+types/introduction";
import { useState, } from "react";

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
		<>
			{cookie && cookie.language === "fr" ? (
				content_fr.introduction.map((paragraph, index) => (
					<p key={index}>{paragraph}</p>
				))
			) : (
				content_en.introduction.map((paragraph, index) => (
					<p key={index}>{paragraph}</p>
				))
			)}
		</>
	);
}
