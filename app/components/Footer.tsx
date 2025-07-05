import { Form, useLocation, } from "react-router";
import type { LanguagePropInterface } from "../root";



export default function FooterComponent(language: LanguagePropInterface) {
	const lang = language.language;
	const currentLocation = useLocation();
	return (
		<footer className="app-footer">
			{lang === "fr" ? (
				<Form className="app-footer__language" method="post">
					<button type="submit" name="language" value="en" >EN</button>
					<button type="submit" name="language" className="active" value="fr" >FR</button>
					<input type="hidden" name="submittedFrom" value={currentLocation.pathname} />
				</Form>
			) : (
				<Form className="app-footer__language" method="post" reloadDocument>
					<button type="submit" name="language" className="active" value="en" >EN</button>
					<button type="submit" name="language" value="fr" >FR</button>
					<input type="hidden" name="submittedFrom" value={currentLocation.pathname} />
				</Form>
			)}
		</footer>
	)
}