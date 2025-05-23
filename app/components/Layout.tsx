import { Outlet, } from "react-router";

import CanvasComponent from "./Canvas";
import HeaderComponent from "./Header";
import NavComponent from "./Nav";



export default function LayoutComponent() {
	return (
		<>
			<HeaderComponent />
			<NavComponent />
			<CanvasComponent />
			<main className="app-main">
				<Outlet />
			</main>
		</>
	)
}