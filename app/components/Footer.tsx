import type { Route, } from "./+types/Layout";
import { Form, } from "react-router";



export default function FooterComponent() {
	return (
		<footer className="app-footer">
			<Form className="app-footer__language" method="post">
				<button type="submit" name="language" value="en">EN</button>
				<button type="submit" name="language" value="fr">FR</button>
			</Form>
		</footer>
	)
}