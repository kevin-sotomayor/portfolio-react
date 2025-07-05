import type { Route } from "../+types/introduction";
import "../../styles/introduction.css";



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

export default function HomePage({ loaderData }: Route.ComponentProps) {
	return (
		<main className="app-introduction">
			<div className="app-introduction__text">
				<h1>
					Born in 1994 and based in Lyon, France, I am a curious programmer, constantly on the lookout for new ideas to create a more aesthetic, enjoyable and high-performance Web experience.
				</h1>
				<h2>
					I specialize in Front-End development with JavaScript, TypeScript, React and its framework React Router v7.
				</h2>
			</div>
		</main>
	)
}
