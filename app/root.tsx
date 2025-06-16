import { Links, Meta, Outlet, Scripts, ScrollRestoration, redirectDocument, useLoaderData, isRouteErrorResponse, } from "react-router";
import React, { useEffect, } from "react";
import type { Route } from "./+types/root";
import favicon from "../public/favicon.ico";
import { languageCookieUtils, } from "./utils/cookies";
import "./styles/globals.css";



export async function loader({ request }: Route.LoaderArgs) {
	const cookies = request.headers.get("Cookie");
	if (!cookies) {
		return null;
	}
	const languageCookie = await languageCookieUtils.parse(cookies);
	return languageCookie;
}

export async function action({ request }: Route.ActionArgs) {
	try {
		const rawFormData = await request.formData();
		const formData = await Object.fromEntries(rawFormData);
		const headersCookie = await request.headers.get("Cookie");
		const cookie = await languageCookieUtils.parse(headersCookie) || {};
		cookie.language = formData.language;
		return redirectDocument(formData.submittedFrom, {
			headers: {
				"Set-Cookie": await languageCookieUtils.serialize(cookie),
			},
		});
	} catch (error) {
		console.error(error);
		return redirectDocument("/");
	}
}

export function Layout({ children }: { children: React.ReactNode }) {
	const loaderData = useLoaderData();
	if (loaderData && loaderData.language === "fr") {
		return (
			<html lang="fr">
				<head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="favicon" href={favicon} />
					<Meta />
					<Links />
				</head>
				<body className="app">
					{children}
					<ScrollRestoration />
					<Scripts />
				</body>
			</html>
		); 
	}
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="favicon" href={favicon} />
				<Meta />
				<Links />
			</head>
			<body className="app">
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	useEffect(() => {
		const backgroundElement: HTMLDivElement | null = document.querySelector(".app-background");
		if (backgroundElement) {
			backgroundElement.classList.add("loaded");
		}
	}, []);
	return <Outlet />;
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
		<main className="app-error">
			<div className="app-error__content">
				<h1>{message}</h1>
				<h2>{details}</h2>
				<a href="/">Go back home</a>
			</div>
		</main>
	)
}
