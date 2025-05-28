import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, redirect, data, } from "react-router";
import type { Route } from "./+types/root";

import "./styles/globals.css";
import { languageCookieUtils, } from "./utils/cookies";
import { parseAcceptLanguage } from "./utils/acceptLanguageUtils";


interface PreferedLanguageInterface {
	language: string,
	quality: number,
}


export async function loader({ request }: Route.LoaderArgs) {
	const headersLanguage = await request.headers.get("Accept-Language");
	const headersCookie = await request.headers.get("Cookie");
	const languageCookie = await languageCookieUtils.parse(headersCookie);
	
	let preferredLanguage: string | PreferedLanguageInterface[] = "en";

	if (headersLanguage) {
		// const parsedLanguages = parseAcceptLanguage(headersLanguage);
		// if (parsedLanguages.length > 0) {
		// 	preferredLanguage = parsedLanguages[0].language;
		// 	console.log(preferredLanguage);
		// }
		const parsedLanguages = parseAcceptLanguage(headersLanguage);
		return;
	}
}


export async function action({ request }: Route.ActionArgs) {
	const rawFormData = await request.formData();
	const formData = Object.fromEntries(rawFormData);
	const rawCookie = await request.headers.get("Cookie");

	switch (Object.keys(formData)[0]) {
		case "language":
			const cookie = await languageCookieUtils.parse(rawCookie) || {};
			cookie.language = formData.language;
			return redirect("", {
				headers: {
					"Set-Cookie": await languageCookieUtils.serialize(cookie),
				}
			})
			break;
		case "theme": 
			console.log("On gère le thème ici");
			break;
		default:
			console.log("Qu'essaies-tu de faire ?")
			break;
	}
	return;
}

// TODO: handle the lang dynamically with the value of the cookie in a loader
export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="app">
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function App() {
	return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main>
			<p>{message}</p>
		</main>
	)
}
