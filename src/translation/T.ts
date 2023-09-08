import { useTranslationContext } from "./useTranslationContext";

const t: any = {
	pl: {
		PDF: "PDF",
		EDUCATION: "EDUKACJA",
		"WROCŁAW UNIVERSITY OF SCIENCE AND TECHNOLOGY": "POLITECHNIKA WROCŁAWSKA",
		"Master Of Science, COMPUTER SCIENCE, 4.5": "Studia magisterskie, INFORMATYKA, 4.5",
		"Bachelor of Science, CONTROL ENGINEERING AND ROBOTICS, 4.5": "Studia Inżynierskie, AUTOMATYKA I ROBOTYKA, 4.5"
	},
};

export const T = (key:string) => {
	const {lang} = useTranslationContext();
	return t[lang] ? (t[lang][key] ?? key) : key;
}