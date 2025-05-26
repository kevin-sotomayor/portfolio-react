import { Form, redirect, } from "react-router";

import type { Route } from "./+types/contact";

import { sessionCookie, languageCookie } from "../utils/cookies";



export async function clientLoader({ request }: Route.LoaderArgs) {
	const rawCookie = await request.headers.get("Cookie");
	const parsedCookie = await languageCookie.parse(rawCookie) || {};
	return parsedCookie.fav;
}


export async function clientAction({ request, }:Route.LoaderArgs ) {
	const formData = await request.formData();
	const formattedData = Object.fromEntries(formData);
	const rawCookie = await request.headers.get("Cookie");
	const parsedCookie = await languageCookie.parse(rawCookie) || {};

	parsedCookie.fav = formattedData.stuff;
	const cookie = await languageCookie.serialize(parsedCookie);
	return redirect("/", {
		headers: {
			"Set-Cookie": cookie,
		},
	})
}

export default function ContactPage({ loaderData }: Route.ComponentProps) {
	const data = loaderData;
	console.log(data);
	return (
		<Form method="post">
			<input type="text" name="stuff" placeholder="fav word"/>
			<button type="submit">Submit</button>
		</Form>
	)
}