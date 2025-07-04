import { Links, Meta, Outlet, Scripts, ScrollRestoration, redirectDocument, useLoaderData, isRouteErrorResponse, } from "react-router";
import React, { useEffect, } from "react";
import type { Route } from "./+types/root";
import { languageCookieUtils, } from "./utils/cookies";




// export async function action({ request }: Route.ActionArgs) {
// 	try {
// 		const rawFormData = await request.formData();
// 		const formData = await Object.fromEntries(rawFormData);
// 		const headersCookie = await request.headers.get("Cookie");
// 		const cookie = await languageCookieUtils.parse(headersCookie) || {};
// 		cookie.language = formData.language;
// 		return redirectDocument(formData.submittedFrom, {
// 			headers: {
// 				"Set-Cookie": await languageCookieUtils.serialize(cookie),
// 			},
// 		});
// 	} catch (error) {
// 		console.error(error);
// 		return redirectDocument("/");
// 	}
// }

export function Layout({ children }: { children: React.ReactNode }) {
	return children;
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
