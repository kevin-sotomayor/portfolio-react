import type { Route } from "./+types/test";
import { redirectDocument, } from "react-router";
import { languageCookieUtils } from "../utils/cookies";



export async function action({ request }: Route.ActionArgs) {
	try {
		const rawFormData = await request.formData();
		const formData = Object.fromEntries(rawFormData);
		console.log(formData);
		if (formData.language) {
			const rawCookie = await request.headers.get("Cookie");
			const currentLocation = formData.submittedFrom.toString();
			const cookie = await languageCookieUtils.parse(rawCookie) || {};
			cookie.language = formData.language;
			return redirectDocument(currentLocation, {
				headers: {
					"Set-Cookie": await languageCookieUtils.serialize(cookie),
				}
			})
		}
	} catch(error) {
		console.error(error);
		return error;
	}
}

export default function TestPage() {
	return redirectDocument("/");
}