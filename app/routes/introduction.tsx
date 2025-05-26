import type { Route } from "./+types/introduction";
import data from "../data/content_en.json";



export function clientLoader({ request, }: Route.LoaderArgs) {
	const res = request.headers.get("Coookie");
	return res;
}

export default function HomePage({ loaderData, }: Route.ComponentProps) {
	const data = loaderData;
	// console.log(data);
	return (
		// check language
		// (data && (
		// 	data.introduction.map((paragraph: string, index: number) => {
		// 		return (
		// 			<p key={index}>{paragraph}</p>
		// 		)
		// 	})
		// ))
		<p>hello world</p>
	)
}
