import type { Route } from "./+types/introduction";
import "./../styles/introduction.css";



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
					Né en 1994 et basé à Lyon, France, je suis un programmeur curieux, constamment à la recherche de nouvelles idées pour créer des expériences Web esthétiques, agréables et performantes.
				</h1>
				<h2>
					Je suis spécialisé en développement Front-End avec JavaScript, TypeScript, React et son framework React Router v7.
				</h2>
			</div>
		</main>
	)
}
