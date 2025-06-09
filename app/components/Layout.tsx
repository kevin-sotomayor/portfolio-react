import { Outlet, } from "react-router";
import type { Route } from "./+types/Layout";
import { languageCookieUtils } from "../utils/cookies";
import CanvasComponent from "./Canvas";
import HeaderComponent from "./Header";
import NavComponent from "./Nav";
import FooterComponent from "./Footer";

import "../styles/introduction.css";
import "../styles/about.css";
import "../styles/projects.css";
import "../styles/contact.css";



export async function loader({ request }: Route.LoaderArgs) {
	const cookies = request.headers.get("Cookie");
	const languageCookie = await languageCookieUtils.parse(cookies) || {};
	return languageCookie;
}


export default function LayoutComponent({ loaderData }: Route.ComponentProps) {
	let language;
	if (!loaderData) {
		language = "en"
	}
	language = loaderData.language;
	return (
		<>
			<HeaderComponent languageProp={language}/>
			<NavComponent languageProp={language}/>
			<CanvasComponent />
				<Outlet />
			<FooterComponent languageProp={language}/>
		</>
	)
}