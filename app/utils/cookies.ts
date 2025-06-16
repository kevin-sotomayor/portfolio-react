import { createCookie, } from "react-router";


export const languageCookieUtils = createCookie("language", {
	httpOnly: true,
	secure: true,
	sameSite: "strict",
	path: "/",
	maxAge: 60 * 60 * 24 * 365, // 1 year
});
