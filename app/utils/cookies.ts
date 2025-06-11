import { createCookie, } from "react-router";


export const languageCookieUtils = createCookie("lang", {
	path: "/",
	sameSite: "lax",
	httpOnly: true,
	maxAge: 60 * 60 * 24 * 365, // 1 year
	secure: true,
});

export const policyCookiesUtils = createCookie("cookie_policy", {
	path: "/",
	sameSite: "lax",
	httpOnly: true,
	maxAge: 60 * 60 * 24 * 365,
	secure: true,
});
