export interface Icon {
	icon: string;
	name: string;
}

export interface Social extends Icon {
	link: string;
}

export { RequestError } from "octokit";
import type { Endpoints } from "@octokit/types";
export type Repos = Endpoints["GET /user/repos"]["response"]["data"];
export type Repo = Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];
export type User = Endpoints["GET /user"]["response"]["data"];
export type Starred = Endpoints["GET /user/starred"]["response"]["data"];

export interface Language {
	name: string;
	value: number;
	icon?: string;
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
