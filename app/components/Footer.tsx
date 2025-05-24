import type { Route, } from "./+types/Layout";
import { Form, redirect, createCookie, } from "react-router";

import { userPrefs } from "../utils/cookies";


export async function loader({ request, }: Route.LoaderArgs) {
	const cookieHeader = request.headers.get("Cookie");
	const cookie = await userPrefs.parse(cookieHeader) || {};
	return cookie;
}

export async function action({ request,}: Route.ActionArgs) {
	const bodyParams = await request.formData();
	if (bodyParams.get("lang") === "fr") {

	}
}

export default function FooterComponent({ loaderData }: ) {
	const data = loaderData
	return (
		<footer className="app-footer">
			<form className="app-footer__language">
				<button type="submit" name="lang" value="en">EN</button>
				<button type="submit" name="lang" value="fr">FR</button>
			</form>
		</footer>
	)
}