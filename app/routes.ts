import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";


export default [
	layout("./components/Layout.tsx", [
		route("/", "./routes/introduction.tsx"),
		route("/about", "./routes/about.tsx"),
	])
] satisfies RouteConfig;
