import { Outlet, useNavigation, } from "react-router";
import type { Route } from "./+types/Layout";
import { Suspense, } from "react";
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
	console.log("exit");
}

function ModalComponent() {
	return (
		<div className="app-modal">
			<div className="app-modal__text">
				<p>Your experience on this site is important. To ensure that it functions properly, it only uses functional cookies.</p>
				<p>They do not collect any personal information and are not used for marketing purposes or to track your online activity. By continuing to browse this site, you consent to the use of these necessary cookies.</p>

				<button onClick={handleModal}>I understand</button>
			</div>
		</div>
	)
}

export default function LayoutComponent({ loaderData }: Route.ComponentProps) {
	console.log(loaderData);
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
					<CanvasComponent/>
					<Outlet isBlurred={true}/>
					<FooterComponent languageProp={language}/>
				</>
			)}
		</>
	)
}