import type { Route, } from "./+types/Layout";
import { Form, useLocation, } from "react-router";
import type { LanguageInterface } from "../utils/types";



export default function FooterComponent({ languageProp }: LanguageInterface) {
	const currentLocation = useLocation();
	return (
		<footer className="app-footer">
			{languageProp === "fr" ? (
				<Form className="app-footer__language" method="post">
					<button type="submit" name="language" value="en" >EN</button>
					<button type="submit" name="language" className="active" value="fr" >FR</button>
					<input type="hidden" name="submittedFrom" value={currentLocation.pathname} />
				</Form>
			) : (
				<Form className="app-footer__language" method="post">
					<button type="submit" name="language" className="active" value="en" >EN</button>
					<button type="submit" name="language" value="fr" >FR</button>
					<input type="hidden" name="submittedFrom" value={currentLocation.pathname} />
				</Form>
			)}
		</footer>
	)
}