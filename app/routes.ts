import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";


export default [
	layout("./components/Layout.tsx", [
		index("./routes/introduction.tsx"),
		route("/about", "./routes/about.tsx"),
		route("/projects", "./routes/projects.tsx"),
		route("/contact", "./routes/contact.tsx"),
	])
] satisfies RouteConfig;
