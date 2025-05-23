import { Outlet, } from "react-router";

import CanvasComponent from "./Canvas";
import HeaderComponent from "./Header";
import NavComponent from "./Nav";



export default function LayoutComponent() {
	return (
		<>
			<CanvasComponent />
			<HeaderComponent />
			<NavComponent />
			<Outlet />
		</>
	)
}