import type { Route } from "./+types/introduction";


export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Portfolio de Kevin Sotomayor" },
		{ name: "description", content: "Portfolio de Kevin Sotomayor" },
	];
}

export default function Home() {
	return <p>hi</p>;
}
