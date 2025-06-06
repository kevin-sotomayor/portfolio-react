import { Outlet, } from "react-router";

import CanvasComponent from "./Canvas";
import HeaderComponent from "./Header";
import NavComponent from "./Nav";
import FooterComponent from "./Footer";



export default function LayoutComponent() {
	
	return (
		<>
			<HeaderComponent />
			<NavComponent />
			<CanvasComponent />
				<Outlet />
			<FooterComponent />
		</>
	)
}