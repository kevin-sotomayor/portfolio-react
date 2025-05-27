import { createCookie, } from "react-router";



export const languageCookieUtils = createCookie("language", {
	path: "/",
	sameSite: "strict",
	httpOnly: true,
	maxAge: 60,
});
