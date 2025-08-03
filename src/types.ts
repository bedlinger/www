export interface UI {
	lang: string;
	header: { logo: { href: string }; nav: { name: string; href: string }[] };
	index: {
		hero: { title: string; text: string };
		about: {
			country: string;
			age: number;
			skills: {
				heading: string;
				skills: string[];
			};
			achievements: {
				heading: string;
				achievements: { title: string; description: string }[];
			};
			hobbies: {
				heading: string;
				text: string;
			};
			connect: {
				heading: string;
				text: string;
			};
		};
	};
	error404: {
		text: string;
		button: string;
	};
	footer: {
		backToTop: string;
		legal: string;
	};
}

export interface Icon {
	icon: string;
	name: string;
}

export interface Social extends Icon {
	link: string;
	label: string;
}

export const LANGUAGE_ICONS: Icon[] = [
	{ name: "Vue", icon: "vuejs" },
	{ name: "C#", icon: "csharp" },
	{ name: "Java", icon: "java" },
	{ name: "JavaScript", icon: "javascript" },
	{ name: "Kotlin", icon: "kotlin" },
	{ name: "Python", icon: "python" },
	{ name: "CSS", icon: "css" },
	{ name: "Typescript", icon: "typescript" },
	{ name: "Go", icon: "go" },
	{ name: "Rust", icon: "rust" },
	{ name: "Dockerfile", icon: "docker" },
	{ name: "HTML", icon: "html5" },
];

export { RequestError } from "octokit";
import type { Endpoints } from "@octokit/types";
export type Repos = Endpoints["GET /user/repos"]["response"]["data"];
export type Repo = Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];
export type User = Endpoints["GET /user"]["response"]["data"];
export type Starred = Endpoints["GET /user/starred"]["response"]["data"];

export interface Language {
	name: string;
	value: number;
}

export interface PrimaryLanguage {
	name: string;
	color: string | null;
}

export interface RepositoryOwner {
	login: string;
}

export interface PinnedRepositoryNode {
	id: string;
	name: string;
	description: string | null;
	url: string;
	stargazerCount: number;
	forkCount: number;
	owner: RepositoryOwner;
	primaryLanguage: PrimaryLanguage | null;
	openGraphImageUrl: string;
}

export interface PinnedItemsGraphQLResponse {
	viewer: {
		login: string;
		pinnedItems: {
			nodes: (PinnedRepositoryNode | null)[];
		};
	};
}

export interface PinnedRepo {
	id: string;
	name: string;
	description: string | null;
	url: string;
	stars: number;
	forks: number;
	owner: string;
	languageName: string | null;
	languageColor: string | null;
	imageUrl: string;
}
