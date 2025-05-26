import { createCookie, } from "react-router";



export const sessionCookie = createCookie("user-prefs", {
	path: "/",
	sameSite: "strict",
	httpOnly: true,
	maxAge: 60,
});