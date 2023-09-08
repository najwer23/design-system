import { useTranslationContext } from "./useTranslationContext";

const t: any = {
	pl: {
		PDF: "PDF",
		EDUCATION: "EDUKACJA",
		"WROCŁAW UNIVERSITY OF SCIENCE AND TECHNOLOGY": "POLITECHNIKA WROCŁAWSKA",
		"Master Of Science, COMPUTER SCIENCE, 4.5": "Studia magisterskie, INFORMATYKA, 4.5",
		"Bachelor of Science, CONTROL ENGINEERING AND ROBOTICS, 4.5": "Studia Inżynierskie, AUTOMATYKA I ROBOTYKA, 4.5",
		"2017.07; 1 month": "2017.07; 1 miesiąc",
		"2019.09.01 – 2021.10.31; 2 years, 2 months": "2019.09.01 – 2021.10.31; 2 lata, 2 miesiące",
		EXPERIENCE: "DOŚWIADCZENIE",
		"Client from the insurance industry (Income: ~5 000 000 PLN)": "Klient z branży ubezpieczeniowej (Przychód: ~5 000 000 PLN)",
		"Expert systems. Working with databases": "Systemy eksperckie. Praca z bazami danych",
		"2021.11.01 – 2023.04.30; 1 year, 6 months": "2021.11.01 – 2023.04.30; 1 rok, 6 miesięcy",
		"Client from the ecommerce industry (Income: ~4 000 000 PLN)": "Klienta z branży ecommerce (Przychód: ~4 000 000 PLN)",
		"Store search engine, Blog website, Shopping cart etc.": "Wyszukiwarka w sklepie, strona bloga, koszyk zakupowy itd.",
		"2023.08.07 – current": "2023.08.07 – obecnie",
		"Client from the entertainment industry (~100 000 000 users)": "Klient z branży rozrywkowej (~100 000 000 użytkowników)"
	},
};

export const T = (key:string) => {
	const {lang} = useTranslationContext();
	return t[lang] ? (t[lang][key] ?? key) : key;
}