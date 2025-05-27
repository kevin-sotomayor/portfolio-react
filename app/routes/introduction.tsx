import type { Route } from "./+types/introduction";
import { useState, } from "react";

// import data from "../data/content_en.json";
import { languageCookie, } from "../utils/cookies";



export async function loader({ request }: Route.LoaderArgs) {
	const rawCookie = await request.headers.get("Cookie");
	const cookie = await languageCookie.parse(rawCookie);
	return cookie;
} 

export default function HomePage({ loaderData }: Route.ComponentProps) {
	// TODO: this
	// const [language, setLanguage] = useState("");
	// if (loaderData) {
	// 	setLanguage(loaderData);
	// }
	return (
		<p>introduction</p>
	)
}
