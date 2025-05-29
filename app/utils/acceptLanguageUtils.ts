export function parseAcceptLanguage(header: string) {
	const splittedHeader = header.split(",");
	const result = splittedHeader.map((lang) => {
		const [language, qValue] = lang.split(";q=");
		const obj = {
			language: language.trim(),
			quality: qValue ? parseFloat(qValue) : 1,
		}
		return obj;
	});
	const sorted = result.sort((a, b) => b.quality - a.quality);
	return sorted;
}