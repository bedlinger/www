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
			{ name: "Projects", href: getRelativeLocaleUrl("en") + "#projects" },
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
							"I graduated with distinction from the renowned TGM in Vienna. This top-tier result is a reflection of both my consistent academic performance and the successful development and defense of my comprehensive diploma thesis.",
					},
					{
						title: "3rd Place, Jugend Innovativ",
						description:
							"My leadership in the development of sustAIanbleEducation, an innovative AI-powered learning platform, earned national recognition. Our project was awarded third place, a testament to its significant impact and successful implementation.",
					},
					{
						title: "Academic Author",
						description:
							"I co-authored a scientific paper that was accepted at the ICL 2025 conference. The article details the technical findings and educational benefits of my diploma project, contributing our research to the academic community.",
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
					description:
						"An AI-powered persona generator designed to streamline the user research phase for developers and designers. By inputting key project criteria, users can generate detailed, realistic user profiles in seconds, complete with demographics, motivations, and pain points, ready to be exported as a PNG.",
					technologies: [
						{ name: "Nuxt", icon: "dev/nuxt" },
						{ name: "TypeScript", icon: "dev/typescript" },
						{ name: "Tailwind", icon: "dev/tailwind" },
						{ name: "Qwen 2.5", icon: "dev/qwen" },
					],
					github: {
						buttonText: "View on GitHub",
						href: "https://github.com/bedlinger/characreate",
					},
					images: [
						{
							src: "/src/assets/characreate/01_characreate.png",
							alt: "Screenshot of Characreate webpage featuring a form for creating a persona. Input fields include project idea, target group, age, gender, and goals.",
						},
						{
							src: "/src/assets/characreate/02_characreate.png",
							alt: "A user persona card for Ethan Green, a 25-year-old environmental science graduate student. It includes his goals, motivations, hobbies, experience, and challenges.",
						},
					],
					role: "Sole Developer & Designer",
					challenge:
						"The primary challenge was securely integrating the AI API on the server-side to protect credentials and manage rate-limiting. Ensuring a smooth, non-blocking user experience while waiting for the AI to generate detailed personas and images required careful state management on the frontend.",
					process:
						"The project began with designing a clean, intuitive UI focused on a simple user flow for defining persona criteria. I developed the frontend using Nuxt, with PrimeVue for components and Tailwind CSS for styling. A dedicated server route was built to handle secure communication with the AI API, and the html-to-image library was implemented to allow users to export the generated personas.",
					result:
						"The final application is a fast, intuitive tool that significantly cuts down the time required for initial user research. It successfully demonstrates the power of integrating large language models into developer workflows to automate creative and analytical tasks. The ability to export personas as images makes sharing and collaboration within a team seamless.",
				},
				{
					title: "sustAInableEducation",
					description:
						"My educational platform developed as a diploma project to tackle the challenge of teaching sustainability. It uses AI-driven interactive storytelling and quizzes to create personalized, gamified learning experiences for students, making complex topics like the SDGs engaging and accessible.",
					technologies: [
						{ name: "Nuxt", icon: "dev/nuxt" },
						{ name: "TypeScript", icon: "dev/typescript" },
						{ name: "Tailwind", icon: "dev/tailwind" },
						{ name: ".NET Core", icon: "dev/dotnet" },
						{ name: "Llama 4", icon: "dev/llama" },
					],
					contributors: [
						{
							name: "Kacper Bohaczyk",
							href: "https://www.linkedin.com/in/kacper-bohaczyk-68127a258/",
						},
						{
							name: "Leander List",
							href: "https://www.linkedin.com/in/leander-list-424110333/",
						},
						{
							name: "Leo Mühlböck",
							href: "https://www.linkedin.com/in/leo-m%C3%BChlb%C3%B6ck-1bb5b3229/",
						},
					],
					github: {
						buttonText: "View on GitHub",
						href: "https://github.com/sustAInableEducation/sustAInableEducation",
					},
					images: [
						{
							src: "/src/assets/sustainableeducation/01_sustAInableEducation.png",
							alt: "The landing page of the sustAInableEducation app, showing a dialog box to join an 'EcoSpace' by entering a 6-digit code.",
						},
						{
							src: "/src/assets/sustainableeducation/02_sustAInableEducation.png",
							alt: "The detailed overview of a EcoSpace titled 'Nachhaltige Städte und Gemeinden', showing story parts, options, and participants.",
						},
						{
							src: "/src/assets/sustainableeducation/03_sustAInableEducation.png",
							alt: "The EcoSpace creation screen where a user can select a theme based on the Sustainable Development Goals (SDGs).",
						},
						{
							src: "/src/assets/sustainableeducation/04_sustAInableEducation.png",
							alt: "The configuration settings for creating a new EcoSpace, including fields for decision points, target group, and voting time.",
						},
						{
							src: "/src/assets/sustainableeducation/05_sustAInableEducation.png",
							alt: "An interactive story part within an EcoSpace, showing the beginning of a narrative and four decision options for the user.",
						},
						{
							src: "/src/assets/sustainableeducation/06_sustAInableEducation.png",
							alt: "An AI-generated image within a story, depicting a diverse group of students standing together in a classroom setting.",
						},
						{
							src: "/src/assets/sustainableeducation/07_sustAInableEducation.png",
							alt: "The results screen of an EcoSpace, summarizing the story's outcome and listing the positive and negative choices made.",
						},
						{
							src: "/src/assets/sustainableeducation/08_sustAInableEducation.png",
							alt: "The 'Learnings' and 'Discussion Questions' section of the EcoSpace results, designed to encourage reflection.",
						},
						{
							src: "/src/assets/sustainableeducation/09_sustAInableEducation.png",
							alt: "The first step of the quiz creation process, where the user selects a completed EcoSpace to base the quiz on.",
						},
						{
							src: "/src/assets/sustainableeducation/10_sustAInableEducation.png",
							alt: "The second step of quiz creation, showing settings for question types and the total number of questions.",
						},
						{
							src: "/src/assets/sustainableeducation/11_sustAInableEducation.png",
							alt: "A quiz question screen from the sustAInableEducation app, asking how students implemented a sustainability project, with four multiple-choice options.",
						},
						{
							src: "/src/assets/sustainableeducation/12_sustAInableEducation.png",
							alt: "The user account page in the sustAInableEducation app, displaying the profile picture, username, email, and options to change password or generate a new profile picture.",
						},
					],
					role: "Project Lead & AI Story Developer",
					challenge:
						"The main challenge was creating an innovative learning platform to make the complex topic of sustainability engaging for students. The goal was to develop a system that could generate personalized, gamified, and collaborative educational content using AI, while ensuring the technical foundation was robust and scalable for a school environment.",
					process:
						"As Project Lead, I managed the team using an agile Kanban methodology to ensure an iterative and efficient workflow. My technical focus was on the AI Story module, where I designed and implemented the system for generating interactive narratives using the Llama 4 language model. The overall architecture involved a Nuxt.js frontend and an ASP.NET backend with an SQL database, refined through regular usability tests with students.",
					result:
						"The project was a resounding success, earning 3rd place at the 'Jugend Innovativ' competition and forming the basis for a published academic paper. The platform proved to be an effective educational tool in usability tests with students, demonstrating high engagement and confirming the pedagogical value of combining AI with gamified learning to foster sustainability awareness.",
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
							"Ich habe meine Matura am renommierten TGM in Wien mit ausgezeichnetem Erfolg abgeschlossen. Dieses Ergebnis spiegelt sowohl meine schulischen Leistungen als auch die erfolgreiche Entwicklung und Verteidigung meiner gesamten Diplomarbeit wider.",
					},
					{
						title: "3. Platz, Jugend Innovativ",
						description:
							"Meine Führungsrolle bei der Entwicklung von sustAIanbleEducation, einer innovativen KI-gestützten Lernplattform, wurde national anerkannt. Unser Projekt wurde mit dem dritten Platz ausgezeichnet, was seine bedeutende Wirkung und erfolgreiche Umsetzung belegt.",
					},
					{
						title: "Akademischer Autor",
						description:
							"Ich war Mitautor einer wissenschaftlichen Arbeit, die auf der ICL 2025-Konferenz angenommen wurde. Der Artikel beschreibt die technischen Erkenntnisse und pädagogischen Vorteile unseres Diplomprojekts und leistet damit einen Beitrag zur akademischen Gemeinschaft.",
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
		projects: {
			heading: "Meine Projekte",
			projects: [
				{
					title: "Characreate",
					description:
						"Ein KI-gestützter Persona-Generator, der die User-Research-Phase für Entwickler und Designer optimiert. Durch die Eingabe wichtiger Projektkriterien können Benutzer in Sekundenschnelle detaillierte, realistische Nutzerprofile erstellen, komplett mit Demografie, Motivationen und Problemen, die als PNG exportiert werden können.",
					technologies: [
						{ name: "Nuxt", icon: "dev/nuxt" },
						{ name: "TypeScript", icon: "dev/typescript" },
						{ name: "Tailwind", icon: "dev/tailwind" },
						{ name: "Qwen 2.5", icon: "dev/qwen" },
					],
					github: {
						buttonText: "Auf GitHub ansehen",
						href: "https://github.com/bedlinger/characreate",
					},
					images: [
						{
							src: "/src/assets/characreate/01_characreate.png",
							alt: "Screenshot der Characreate-Webseite mit einem Formular zur Erstellung einer Persona. Die Eingabefelder umfassen Projektidee, Zielgruppe, Alter, Geschlecht und Ziele.",
						},
						{
							src: "/src/assets/characreate/02_characreate.png",
							alt: "Eine Nutzerpersona-Karte für Ethan Green, einen 25-jährigen Masterstudenten der Umweltwissenschaften. Sie enthält seine Ziele, Motivationen, Hobbys, Erfahrungen und Herausforderungen.",
						},
					],
					role: "Alleinentwickler & Designer",
					challenge:
						"Die größte Herausforderung war die sichere serverseitige Integration der KI-API, um Zugangsdaten zu schützen und Rate-Limiting zu verwalten. Eine reibungslose, nicht-blockierende Benutzererfahrung während des Wartens auf die KI-generierten Personas und Bilder erforderte ein sorgfältiges State-Management im Frontend.",
					process:
						"Das Projekt begann mit dem Entwurf einer klaren, intuitiven Benutzeroberfläche, die auf einen einfachen User-Flow zur Definition von Persona-Kriterien ausgerichtet war. Ich entwickelte das Frontend mit Nuxt, nutzte PrimeVue für Komponenten und Tailwind CSS für das Styling. Eine dedizierte Server-Route wurde für die sichere Kommunikation mit der KI-API erstellt und die 'html-to-image'-Bibliothek implementiert, um den Export der generierten Personas zu ermöglichen.",
					result:
						"Die fertige Anwendung ist ein schnelles, intuitives Werkzeug, das den Zeitaufwand für die anfängliche User Research erheblich reduziert. Sie demonstriert erfolgreich die Leistungsfähigkeit der Integration von großen Sprachmodellen in Entwickler-Workflows zur Automatisierung kreativer und analytischer Aufgaben. Die Möglichkeit, Personas als Bilder zu exportieren, ermöglicht ein nahtloses Teilen und Zusammenarbeiten im Team.",
				},
				{
					title: "sustAInableEducation",
					description:
						"Meine Lernplattform, die als Diplomarbeit entwickelt wurde, um die Herausforderung der Nachhaltigkeitsvermittlung zu meistern. Sie nutzt KI-gestütztes interaktives Storytelling und Quizze, um personalisierte, spielerische Lernerfahrungen für Schüler zu schaffen und komplexe Themen wie die SDGs spannend und zugänglich zu machen.",
					technologies: [
						{ name: "Nuxt", icon: "dev/nuxt" },
						{ name: "TypeScript", icon: "dev/typescript" },
						{ name: "Tailwind", icon: "dev/tailwind" },
						{ name: ".NET Core", icon: "dev/dotnet" },
						{ name: "Llama 4", icon: "dev/llama" },
					],
					contributors: [
						{
							name: "Kacper Bohaczyk",
							href: "https://www.linkedin.com/in/kacper-bohaczyk-68127a258/",
						},
						{
							name: "Leander List",
							href: "https://www.linkedin.com/in/leander-list-424110333/",
						},
						{
							name: "Leo Mühlböck",
							href: "https://www.linkedin.com/in/leo-m%C3%BChlb%C3%B6ck-1bb5b3229/",
						},
					],
					github: {
						buttonText: "Auf GitHub ansehen",
						href: "https://github.com/sustAInableEducation/sustAInableEducation",
					},
					images: [
						{
							src: "/src/assets/sustainableeducation/01_sustAInableEducation.png",
							alt: "Die Startseite der sustAInableEducation-App, die ein Dialogfeld zur Teilnahme an einem 'EcoSpace' durch Eingabe eines 6-stelligen Codes anzeigt.",
						},
						{
							src: "/src/assets/sustainableeducation/02_sustAInableEducation.png",
							alt: "Die Detailansicht eines EcoSpace mit dem Titel 'Nachhaltige Städte und Gemeinden', die Story-Abschnitte, Optionen und Teilnehmer anzeigt.",
						},
						{
							src: "/src/assets/sustainableeducation/03_sustAInableEducation.png",
							alt: "Der Erstellungsbildschirm für einen EcoSpace, auf dem ein Benutzer ein Thema basierend auf den Zielen für nachhaltige Entwicklung (SDGs) auswählen kann.",
						},
						{
							src: "/src/assets/sustainableeducation/04_sustAInableEducation.png",
							alt: "Die Konfigurationseinstellungen zum Erstellen eines neuen EcoSpace, einschließlich Feldern für Entscheidungspunkte, Zielgruppe und Abstimmungszeit.",
						},
						{
							src: "/src/assets/sustainableeducation/05_sustAInableEducation.png",
							alt: "Ein interaktiver Story-Teil innerhalb eines EcoSpace, der den Anfang einer Erzählung und vier Entscheidungsoptionen für den Benutzer zeigt.",
						},
						{
							src: "/src/assets/sustainableeducation/06_sustAInableEducation.png",
							alt: "Ein KI-generiertes Bild innerhalb einer Geschichte, das eine vielfältige Gruppe von Schülern in einem Klassenzimmer darstellt.",
						},
						{
							src: "/src/assets/sustainableeducation/07_sustAInableEducation.png",
							alt: "Der Ergebnisbildschirm eines EcoSpace, der das Ergebnis der Geschichte zusammenfasst und die getroffenen positiven und negativen Entscheidungen auflistet.",
						},
						{
							src: "/src/assets/sustainableeducation/08_sustAInableEducation.png",
							alt: "Der Abschnitt 'Erkenntnisse' und 'Diskussionsfragen' der EcoSpace-Ergebnisse, der zur Reflexion anregen soll.",
						},
						{
							src: "/src/assets/sustainableeducation/09_sustAInableEducation.png",
							alt: "Der erste Schritt der Quiz-Erstellung, bei dem der Benutzer einen abgeschlossenen EcoSpace als Grundlage für das Quiz auswählt.",
						},
						{
							src: "/src/assets/sustainableeducation/10_sustAInableEducation.png",
							alt: "Der zweite Schritt der Quiz-Erstellung, der Einstellungen für Fragetypen und die Gesamtzahl der Fragen anzeigt.",
						},
						{
							src: "/src/assets/sustainableeducation/11_sustAInableEducation.png",
							alt: "Ein Quiz-Fragebildschirm aus der sustainableeducation-App, der fragt, wie Schüler ein Nachhaltigkeitsprojekt umgesetzt haben, mit vier Multiple-Choice-Optionen.",
						},
						{
							src: "/src/assets/sustainableeducation/12_sustAInableEducation.png",
							alt: "Die Benutzerkontoseite in der sustAInableEducation-App, die Profilbild, Benutzername, E-Mail und Optionen zum Ändern des Passworts oder zum Generieren eines neuen Profilbilds anzeigt.",
						},
					],
					role: "Projektleitung & KI-Story-Entwickler",
					challenge:
						"Die zentrale Herausforderung bestand darin, eine innovative Lernplattform zu schaffen, um das komplexe Thema Nachhaltigkeit für Schüler spannend aufzubereiten. Ziel war es, ein System zu entwickeln, das personalisierte, spielerische und kollaborative Lerninhalte mittels KI generiert und gleichzeitig auf einem robusten und skalierbaren technischen Fundament für den Schuleinsatz steht.",
					process:
						"Als Projektleiter steuerte ich das Team mithilfe der agilen Kanban-Methode, um einen iterativen und effizienten Arbeitsablauf zu gewährleisten. Mein technischer Fokus lag auf dem KI-Story-Modul, für das ich das System zur Generierung interaktiver Erzählungen mit dem Llama 4 Sprachmodell konzipierte und implementierte. Die Gesamtarchitektur umfasste ein Nuxt.js-Frontend und ein ASP.NET-Backend mit SQL-Datenbank, das durch regelmäßige Usability-Tests mit Schülern verfeinert wurde.",
					result:
						"Das Projekt war ein voller Erfolg, erreichte den 3. Platz beim Wettbewerb 'Jugend Innovativ' und bildete die Grundlage für eine veröffentlichte wissenschaftliche Arbeit. Die Plattform erwies sich in Usability-Tests mit Schülern als effektives Lehrmittel, zeigte hohes Engagement und bestätigte den pädagogischen Wert der Kombination von KI und spielerischem Lernen zur Förderung des Nachhaltigkeitsbewusstseins.",
				},
			],
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
