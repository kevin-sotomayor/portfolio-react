import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, redirect, useLoaderData, } from "react-router";
import { useState, } from "react";
import type { Route } from "./+types/root";

import "./styles/globals.css";
import { languageCookieUtils, } from "./utils/cookies";
import { parseAcceptLanguage } from "./utils/acceptLanguageUtils";


interface PreferedLanguageInterface {
	language: string,
	quality: number,
}

export async function loader({ request }: Route.LoaderArgs) {
	// Was initially setting up the language based on Web Browser prefs automatically
	const cookieHeader = await request.headers.get("Cookie");
	const cookie = cookieHeader ? await languageCookieUtils.parse(cookieHeader) : {};

	if (cookie.language) {
		return cookie.language;
	}

	let language = "en";
	const acceptLanguageHeader = request.headers.get("Accept-Language");
	
	if (acceptLanguageHeader) {
		const res = parseAcceptLanguage(acceptLanguageHeader);
		if (res.length > 0 && res[0].language.startsWith("fr")) {
			language = "fr";
		}
	}
	return language;
}

export async function action({ request }: Route.ActionArgs) {
	const rawFormData = await request.formData();
	const formData = Object.fromEntries(rawFormData);
	const rawCookie = await request.headers.get("Cookie");
	const currentLocation = formData.submittedFrom.toString();

	switch (Object.keys(formData)[0]) {
		case "language":
			const cookie = await languageCookieUtils.parse(rawCookie) || {};
			cookie.language = formData.language;
			return redirect(currentLocation, {
				headers: {
					"Set-Cookie": await languageCookieUtils.serialize(cookie),
				}
			})
	}
	return;
}

export function Layout({ children }: { children: React.ReactNode }) {
	const data = useLoaderData();
	return (
		<html lang={data}>
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
