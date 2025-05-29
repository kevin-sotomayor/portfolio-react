import { createCookie, } from "react-router";


export const languageCookieUtils = createCookie("language", {
	path: "/",
	sameSite: "lax",
	httpOnly: false, // Should be accessible to JS for client-side language switching
	maxAge: 60 * 60 * 24 * 365, // 1 year
	secure: true,
});
