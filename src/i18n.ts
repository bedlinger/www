import type { UI } from "./types";

export const en: UI = {
	lang: "en",
	header: {
		nav: [
			{ name: "Home", href: "/#" },
			{ name: "About", href: "/#about" },
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
	error404: {
		text: "Page not found",
	},
	footer: {
		backToTop: "Back to top",
		legal: "All rights reserved",
	},
};
