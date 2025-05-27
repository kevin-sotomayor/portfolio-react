import { createCookie, } from "react-router";



export const languageCookie = createCookie("language", {
	path: "/",
	sameSite: "strict",
	httpOnly: true,
	maxAge: 60,
});
