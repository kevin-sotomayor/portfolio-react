import { createCookie, } from "react-router";


export const languageCookieUtils = createCookie("language", {
	sameSite: "lax",
	maxAge: 60 * 60 * 24 * 365, // 1 year
});
