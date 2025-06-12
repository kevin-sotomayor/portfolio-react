import { Outlet, Form, useLocation, } from "react-router";
import type { Route } from "./+types/Layout";
import { languageCookieUtils, policyCookiesUtils } from "../utils/cookies";
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
	const policyCookie = await policyCookiesUtils.parse(cookies);
	return { languageCookie, policyCookie };
}

function handleModal() {
	const mainElement = document.querySelector("main");
	const navElement = document.querySelector(".app-nav");
	const backgroundElement = document.querySelector(".app-background");
}

function ModalComponent() {
	const currentLocation = useLocation();
	return (
		<div className="app-modal">
			<div className="app-modal__text">
				<p>Your experience on this site is important. To ensure that it functions properly, it only uses functional cookies.</p>
				<p>They do not collect any personal information and are not used for marketing purposes or to track your online activity. By continuing to browse this site, you consent to the use of these necessary cookies.</p>

				<Form method="post">
					<button name="hasAcceptedPolicy" value="true">I Understand</button>
					<input type="hidden" name="submittedFrom" value={currentLocation.pathname} />
				</Form>
			</div>
		</div>
	)
}

export default function LayoutComponent({ loaderData }: Route.ComponentProps) {
	let language;
	if (!loaderData) {
		language = "en"
	}
	language = loaderData.languageCookie.language;
	return (
		<>
			{loaderData.policyCookie ? (
				<>
					<HeaderComponent languageProp={language}/>
					<NavComponent languageProp={language}/>
					<CanvasComponent />
					<Outlet />
					<FooterComponent languageProp={language}/>
				</>
			) : (
				<>
					<HeaderComponent languageProp={language}/>
					<NavComponent languageProp={language}/>
					<ModalComponent />
					<CanvasComponent />
					<Outlet />
					<FooterComponent languageProp={language}/>
				</>
			)}
		</>
	)
}