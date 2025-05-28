export function parseAcceptLanguage(header: string) {
	const splittedHeader = header.split(",");
	console.log(splittedHeader);
	splittedHeader.map((lang) => {
		const [language, qValue] = lang.split(";q=");
		console.log("function says: ", language, qValue);
		// return {
		// 	language: language.trim();
		// 	quality: qValue ? parseFloat(qValue) : 1.0,
		// }
		// splittedHeader.sort((a, b) => b.quality - a.quality);
	})
}