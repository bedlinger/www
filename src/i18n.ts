import { getRelativeLocaleUrl } from "astro:i18n";
import type { UI } from "./types";

export const de: UI = {
	lang: "de",
	header: {
		logo: { href: getRelativeLocaleUrl("de") },
		nav: [
			{ name: "Startseite", href: getRelativeLocaleUrl("de") + "#" },
			{ name: "Über mich", href: getRelativeLocaleUrl("de") + "#about" },
		],
	},
	index: {
		hero: {
			title: "Hi, ich bin Benjamin!",
			text: "Ich bin ein 19-jähriger Developer, der innovative Ideen mit Clean Code und einem nutzerzentrierten Ansatz zum Leben erweckt.",
		},
		about: {
			country: "Österreich",
			age: new Date().getFullYear() - 2006,
			skills: {
				heading: "Kernkompetenzen",
				skills: [
					"Agiles Projektmanagement",
					"Full-Stack Entwicklung",
					"UI/UX Design",
				],
			},
			achievements: {
				heading: "Wichtigste Erfolge",
				achievements: [
					{
						title: "Abschluss mit Auszeichnung",
						description:
							"Meinen Abschluss am renommierten TGM Wien habe ich für herausragende Leistungen in der IT-Ausbildung und meinem Diplomprojekt mit Auszeichnung erhalten.",
					},
					{
						title: "3. Platz, Jugend Innovativ",
						description:
							"Nationale Anerkennung für die Leitung und Entwicklung von sustAIanbleEducation, einer KI-Plattform, die für ihre innovative Wirkung den dritten Platz sicherte.",
					},
					{
						title: "Akademischer Autor",
						description:
							"Mitautor eines wissenschaftlichen Artikels über die technischen Ergebnisse und den pädagogischen Nutzen unseres Projekts, angenommen für die ICL 2025 Konferenz.",
					},
				],
			},
			hobbies: {
				heading: "Abseits des Codes",
				text: "Auch abseits der Tastatur verfolge ich meine Ziele mit Fokus und Disziplin, sei es auf dem Golfplatz, beim Laufen oder im Fitnessstudio.",
			},
			connect: {
				heading: "Lass uns etwas Gemeinsames schaffen",
				text: "Hast du ein Projekt im Sinn oder möchtest dich einfach vernetzen? Melde dich gerne bei mir.",
			},
		},
	},
	error404: {
		text: "Seite nicht gefunden",
		button: "Startseite",
	},
	footer: {
		language: {
			text: "English",
			href: getRelativeLocaleUrl("en"),
		},
		backToTop: "Nach oben",
		legal: "Alle Rechte vorbehalten",
	},
};

export const en: UI = {
	lang: "en",
	header: {
		logo: { href: getRelativeLocaleUrl("en") },
		nav: [
			{ name: "Home", href: getRelativeLocaleUrl("en") + "#" },
			{ name: "About", href: getRelativeLocaleUrl("en") + "#about" },
		],
	},
	index: {
		hero: {
			title: "Hi, I am Benjamin!",
			text: "I'm a 19-year-old developer who brings innovative ideas to life with clean code and a user-focused mindset.",
		},
		about: {
			country: "Austria",
			age: new Date().getFullYear() - 2006,
			skills: {
				heading: "Core Skills",
				skills: [
					"Agile Project Management",
					"Full-Stack Development",
					"UI/UX Design",
				],
			},
			achievements: {
				heading: "Key Achievements",
				achievements: [
					{
						title: "Graduated with Distinction",
						description:
							"Achieved the highest honors from the prestigious TGM Vienna, recognizing outstanding performance in my technical IT education and final diploma project.",
					},
					{
						title: "3rd Place, Jugend Innovativ",
						description:
							"Earned national recognition by leading the development of sustAIanbleEducation, an AI-powered platform that secured third place for its innovative impact.",
					},
					{
						title: "Academic Author",
						description:
							"Co-authored a formal research paper on our project's technical findings and educational impact, which was accepted for publication at the ICL 2025 conference.",
					},
				],
			},
			hobbies: {
				heading: "Beyond the Code",
				text: "When I'm away from the keyboard, I apply the same focus and discipline to my hobbies, whether I'm on the golf course, running, or at the gym.",
			},
			connect: {
				heading: "Let's Build Something Together",
				text: "Have a project in mind or just want to connect? Feel free to reach out.",
			},
		},
	},
	footer: {
		language: {
			text: "Deutsch",
			href: getRelativeLocaleUrl("de"),
		},
		backToTop: "Back to top",
		legal: "All rights reserved",
	},
};
