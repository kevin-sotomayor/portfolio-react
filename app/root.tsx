import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, redirect, } from "react-router";
import type { Route } from "./+types/root";

import "./styles/globals.css";

import { sessionCookie, } from "./utils/cookies";



export function HydrateFallback() {
	return <p>loading stuff...</p>
}

export async function clientLoader({ request, }: Route.LoaderArgs) {
	const headers = await request.headers.get("Cookie");
	// console.log(headers);
	return headers;
}

// TODO: choose default language and handle the case here
export async function clientAction({ request, }: Route.ClientActionArgs) {
	const formData = await request.formData();
	const formattedFormData = Object.fromEntries(formData);
	if (!formattedFormData.language) {
		throw new Error("An error happened while changing language");
	}
	const rawCookie = await request.headers.get("Cookie");
	const parsedCookie = await sessionCookie.parse(rawCookie) || {};

	switch (formattedFormData.language) {
		case "fr":
			parsedCookie.language = "fr"
			break;
		case "en":
			parsedCookie.language = "en"
			break;
		default:
			console.log("ARE YOU TESTING ME SIR ?")
			break;
	}
	const cookie = await sessionCookie.serialize(parsedCookie);
	return redirect("/", {
		headers: {
			"Set-Cookie": cookie,
		},
	});
}


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
