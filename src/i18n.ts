import { getRelativeLocaleUrl } from "astro:i18n";
import type { UI } from "./types";

const age = new Date().getFullYear() - 2006;

export const en: UI = {
	lang: "en",
	title: "Benjamin Edlinger",
	description:
		"Benjamin Edlinger, a 19-year-old full-stack developer and project manager from Austria, specializes in the development of innovative web applications.",
	header: {
		logo: {
			href: getRelativeLocaleUrl("en"),
			image: {
				src: "/src/assets/logo.png",
				alt: "Logo Benjamin Edlinger",
			},
		},
		nav: [
			{ name: "Home", href: getRelativeLocaleUrl("en") + "#" },
			{ name: "About", href: getRelativeLocaleUrl("en") + "#about" },
			{ name: "Projekte", href: getRelativeLocaleUrl("en") + "#projects" },
		],
	},
	index: {
		hero: {
			title: "Hi, I am Benjamin!",
			text: "I'm a 19-year-old developer who brings innovative ideas to life with clean code and a user-focused mindset.",
		},
		about: {
			headshot: {
				src: "/src/assets/profile.jpeg",
				alt: "Headshot Benjamin Edlinger",
			},
			country: "Austria",
			age: age,
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
		projects: {
			heading: "Featured Projects",
			projects: [
				{
					title: "Characreate",
					tagline:
						"An AI-powered persona generator to create realistic user profiles for any project.",
					technologies: [
						{ name: "Nuxt", icon: "dev/nuxt" },
						{ name: "TypeScript", icon: "dev/typescript" },
						{ name: "Tailwind", icon: "dev/tailwind" },
						{ name: "PrimeVue", icon: "dev/primevue" },
						{ name: "Qwen 2.5", icon: "dev/qwen" },
					],
					github: "https://github.com/bedlinger/characreate",
					detail: {
						images: [
							{
								src: "/src/assets/characreate/01_characreate.png",
								alt: "Screenshot of Characreate webpage featuring a form for creating a persona. Input fields include project idea, target group, age, gender, and goals.",
							},
							{
								src: "/src/assets/characreate/02_characreate.png",
								alt: "A user persona card for Ethan Green, a 25-year-old environmental science graduate student. It includes his goals, motivations, hobbies, experience, and challenges.",
							},
							{
								src: "/src/assets/characreate/03_characreate.png",
								alt: "The exported user persona card for Ethan Green.",
							},
						],
						role: "Sole Developer & Designer",
						challenge:
							"The primary challenge was securely integrating the DeepInfra API on the server-side to protect credentials and manage rate-limiting. Ensuring a smooth, non-blocking user experience while waiting for the AI to generate detailed personas and images required careful state management on the frontend.",
						process:
							"The project began with designing a clean, intuitive UI focused on a simple user flow for defining persona criteria. I developed the frontend using Nuxt and Vue, with PrimeVue for the component library and Tailwind CSS for styling. A dedicated server route was built to handle secure communication with the DeepInfra AI API. Finally, I implemented the html-to-image library to allow users to export the generated personas as PNG files, providing a tangible output.",
					},
				},
				{
					title: "sustAInableEducation",
					tagline:
						"An award-winning diploma project that uses AI to teach sustainability through interactive storytelling.",
					technologies: [
						{ name: "Nuxt", icon: "dev/nuxt" },
						{ name: "TypeScript", icon: "dev/typescript" },
						{ name: "Tailwind", icon: "dev/tailwind" },
						{ name: "PrimeVue", icon: "dev/primevue" },
						{ name: "C#", icon: "dev/csharp" },
						{ name: ".NET Core", icon: "dev/dotnet" },
						{ name: "SQL Server", icon: "dev/sqlserver" },
						{ name: "Llama 4", icon: "dev/llama" },
					],
					github:
						"https://github.com/sustAInableEducation/sustAInableEducation",
					detail: {
						images: [
							{
								src: "/src/assets/sustAInableEducation/01_sustAInableEducation.png",
								alt: "The landing page of the sustAInableEducation app, showing a dialog box to join an 'EcoSpace' by entering a 6-digit code.",
							},
							{
								src: "/src/assets/sustAInableEducation/02_sustAInableEducation.png",
								alt: "The detailed overview of a EcoSpace titled 'Nachhaltige Städte und Gemeinden', showing story parts, options, and participants.",
							},
							{
								src: "/src/assets/sustAInableEducation/03_sustAInableEducation.jpg",
								alt: "The EcoSpace creation screen where a user can select a theme based on the Sustainable Development Goals (SDGs).",
							},
							{
								src: "/src/assets/sustAInableEducation/04_sustAInableEducation.jpg",
								alt: "The configuration settings for creating a new EcoSpace, including fields for decision points, target group, and voting time.",
							},
							{
								src: "/src/assets/sustAInableEducation/05_sustAInableEducation.jpg",
								alt: "An interactive story part within an EcoSpace, showing the beginning of a narrative and four decision options for the user.",
							},
							{
								src: "/src/assets/sustAInableEducation/06_sustAInableEducation.jpg",
								alt: "An AI-generated image within a story, depicting a diverse group of students standing together in a classroom setting.",
							},
							{
								src: "/src/assets/sustAInableEducation/07_sustAInableEducation.png",
								alt: "The results screen of an EcoSpace, summarizing the story's outcome and listing the positive and negative choices made.",
							},
							{
								src: "/src/assets/sustAInableEducation/08_sustAInableEducation.png",
								alt: "The 'Learnings' and 'Discussion Questions' section of the EcoSpace results, designed to encourage reflection.",
							},
							{
								src: "/src/assets/sustAInableEducation/09_sustAInableEducation.png",
								alt: "The first step of the quiz creation process, where the user selects a completed EcoSpace to base the quiz on.",
							},
							{
								src: "/src/assets/sustAInableEducation/10_sustAInableEducation.png",
								alt: "The second step of quiz creation, showing settings for question types and the total number of questions.",
							},
							{
								src: "/src/assets/sustAInableEducation/11_sustAInableEducation.png",
								alt: "A quiz question screen from the sustAInableEducation app, asking how students implemented a sustainability project, with four multiple-choice options.",
							},
							{
								src: "/src/assets/sustAInableEducation/12_sustAInableEducation.png",
								alt: "The user account page in the sustAInableEducation app, displaying the profile picture, username, email, and options to change password or generate a new profile picture.",
							},
						],
						role: "Project Lead & AI Story Developer",
						challenge:
							"The main challenge was to create an innovative learning platform that could make the complex topic of sustainability engaging for students. The goal was to develop a system that could generate personalized, gamified, and collaborative educational content using AI, while ensuring the technical foundation was robust and scalable.",
						process:
							"As Project Lead, I managed the team using an agile Kanban methodology to ensure an iterative and efficient workflow. My technical focus was on the AI Story module, where I designed and implemented the system for generating interactive narratives using the Llama 3.3 language model. The overall architecture involved a Nuxt.js frontend and an ASP.NET backend with an SQL database. We conducted regular usability tests and feedback sessions with students to continually refine the platform.",
					},
				},
			],
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

export const de: UI = {
	lang: "de",
	title: "Benjamin Edlinger",
	description:
		"Benjamin Edlinger, ein 19-jähriger Full-Stack-Entwickler und Projektmanager aus Österreich, ist auf die Entwicklung innovativer Webanwendungen spezialisiert.",
	header: {
		logo: {
			href: getRelativeLocaleUrl("de"),
			image: {
				src: "/src/assets/logo.png",
				alt: "Logo Benjamin Edlinger",
			},
		},
		nav: [
			{ name: "Startseite", href: getRelativeLocaleUrl("de") + "#" },
			{ name: "Über mich", href: getRelativeLocaleUrl("de") + "#about" },
			{ name: "Projekte", href: getRelativeLocaleUrl("de") + "#projects" },
		],
	},
	index: {
		hero: {
			title: "Hi, ich bin Benjamin!",
			text: "Ich bin ein 19-jähriger Developer, der innovative Ideen mit Clean Code und einem nutzerzentrierten Ansatz zum Leben erweckt.",
		},
		about: {
			headshot: {
				src: "/src/assets/profile.jpeg",
				alt: "Profilbild Benjamin Edlinger",
			},
			country: "Österreich",
			age: age,
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
		projects: {},
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
