import type { Route } from "./+types/introduction";
import { useState, } from "react";

import { languageCookie, } from "../utils/cookies";
import content_fr from "../data/introduction_fr.json";
import content_en from "../data/introduction_en.json";



interface DataInterface {
	introduction: string[],
}


export async function loader({ request }: Route.LoaderArgs) {
	const rawCookie = await request.headers.get("Cookie");
	const cookie = await languageCookie.parse(rawCookie);
	return cookie;
} 

export default function HomePage({ loaderData }: Route.ComponentProps) {
	const cookie = loaderData;
	return (
		<>
			
		</>
	);
}
