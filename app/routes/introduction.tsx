import type { Route } from "./+types/introduction";

// import data from "../data/content_en.json";
import { languageCookie, } from "../utils/cookies";



export default function HomePage({ loaderData }: Route.ComponentProps) {
	return (
		// check language
		// (data && (
		// 	data.introduction.map((paragraph: string, index: number) => {
		// 		return (
		// 			<p key={index}>{paragraph}</p>
		// 		)
		// 	})
		// ))
		<p>introduction</p>
	)
}
