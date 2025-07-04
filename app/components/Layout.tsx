import { Outlet, Form, useLocation, useLoaderData, Links, Meta, ScrollRestoration, Scripts, } from "react-router";
import type { Route } from "./+types/Layout";
import { languageCookieUtils, } from "../utils/cookies";
import BackgroundComponent from "./Background";
import HeaderComponent from "./en/Header";
import NavComponent from "./Nav";
import FooterComponent from "./Footer";
import "../styles/globals.css";
import favicon from "../../public/favicon.ico";
// import "../styles/introduction.css";
// import "../styles/about.css";
// import "../styles/projects.css";
// import "../styles/contact.css";



export async function loader({ request }: Route.LoaderArgs) {
	const cookies = request.headers.get("Cookie");
	return "en";
}

export default function LayoutComponent() {
	const language = useLoaderData();
	return (
		<html lang={language}>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="favicon" href={favicon} />
				<Links />
				<Meta />
			</head>
			<body className="app">
				<BackgroundComponent />
				<HeaderComponent />
				<NavComponent />
				<FooterComponent />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}