import type { Route } from "./+types/introduction";
import { languageCookieUtils, } from "../utils/cookies";
import aboutContent from "../data/about_content.json";
import "../styles/about.css";



export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Kevin Sotomayor - About" },
		{ name: "description", content: "Kevin Sotomayor's portfolio about page" },
	]
}

// export function headers(_: Route.HeadersArgs) {
//   return {
//     'Cache-Control': 's-maxage=1, stale-while-revalidate=59',
//   };
// }

// Not the default type because it was buggy for some reason Dentge
export default function AboutPage() {
	return (
		<main className="app-about">
			<div className="app-about__text">
				<p>
					Définitivement reconverti professionnellement en 2022, j'ai toujours un été un grand passionné d'informatique. Plus jeune, cet intérêt s'exprimait à travers la création de sites Web statiques personnels et de projets divers en Python, mais il s'est rapidement transformé en une addiction à l'apprentissage de nouvelles compétences, qu'elles soient liées au Web, aux systèmes d'exploitation, ou à des domaines connexes tel que le graphisme 3D ou encore les architectures de réseaux.
				</p>
				<p>
					Je suis spécialisé en développement Front-End mais je suis également capable de réaliser des projets complets avec Node et son framework Express pour le Back-End, ainsi que PostgreSQL pour le traitement de données.
				</p>
				<p>
					Je suis ouvert à toute opportunité professionnelle, alors n'hésitez pas à me contacter si une collaboration vous intéresse.
				</p>
				<p>
					Vous pouvez trouver mon CV <a target="_blank" href="/cv_kevin_sotomayor.pdf">ici</a> si vous êtes curieux de connaître mon parcours professionnel.
				</p>
			</div>
		</main>
	)
}
