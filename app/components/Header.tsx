import { useLoaderData, } from "react-router";



export default function HeaderComponent() {
	const test = useLoaderData();
	console.log(test);
	return (
		<header className="app-header">
			<span className="app-header__title">Kevin Sotomayor</span>
			<h1 className="app-header__subtitle">Web Developer</h1>
		</header>
	)
}