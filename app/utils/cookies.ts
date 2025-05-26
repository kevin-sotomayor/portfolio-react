import { createCookie, } from "react-router";



export const sessionCookie = createCookie("session", {
	path: "/",
	sameSite: "lax",
	httpOnly: false,
	maxAge: 60 * 60 * 24,
});

export const languageCookie = createCookie("language", {
	path: "/",
	sameSite: "strict",
	httpOnly: true,
	maxAge: 60,
});