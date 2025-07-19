import { Octokit } from "octokit";
import {
	type Language,
	type PinnedItemsGraphQLResponse,
	type PinnedRepo,
	type PinnedRepositoryNode,
	type Repos,
	type Starred,
	type User,
	LANGUAGE_ICONS,
	RequestError,
} from "../types";

const octokit = new Octokit({
	auth: import.meta.env.GITHUB_PAT,
});

export async function getUserProfile() {
	try {
		const response = await octokit.request("GET /user");
		const user: User = response.data;

		return { data: user, status: 200, error: null };
	} catch (error) {
		if (error instanceof RequestError) {
			return { data: null, status: error.status, error: error.message };
		}

		return { data: null, status: 500, error: "Internal Server Error" };
	}
}

export async function getUserRepos() {
	try {
		const response = await octokit.request("GET /user/repos");
		const repos: Repos = response.data;

		return { data: repos, status: 200, error: null };
	} catch (error) {
		if (error instanceof RequestError) {
			return { data: null, status: error.status, error: error.message };
		}

		return { data: null, status: 500, error: "Internal Server Error" };
	}
}

export async function getUserLanguages() {
	const { data, status, error } = await getUserRepos();
	if (error || data == null) {
		return { data, status, error };
	}

	const repoLanguages: Record<string, number>[] = [];
	for (const repo of data) {
		try {
			const response = await octokit.request(
				"GET /repos/{owner}/{repo}/languages",
				{
					owner: repo.owner.login,
					repo: repo.name,
				},
			);
			repoLanguages.push(response.data as Record<string, number>);
		} catch {
			continue;
		}
	}

	const languages: Language[] = [];
	for (const repoLanguage of repoLanguages) {
		for (const [language, value] of Object.entries(repoLanguage)) {
			const existingLanguage = languages.find((lang) => lang.name === language);
			if (existingLanguage) {
				existingLanguage.value += value;
			} else {
				const icon = LANGUAGE_ICONS.find(
					(lang) => lang.name === language,
				)?.icon;
				languages.push({ name: language, value, icon });
			}
		}
	}

	if (languages.length === 0) {
		return { data: null, status: 404, error: "No languages found" };
	}

	return { data: languages, status: 200, error: null };
}

export async function getUserStarred() {
	try {
		const response = await octokit.request("GET /user/starred");
		const starred: Starred = response.data;

		return { data: starred, status: 200, error: null };
	} catch (error) {
		if (error instanceof RequestError) {
			return { data: null, status: error.status, error: error.message };
		}

		return { data: null, status: 500, error: "Internal Server Error" };
	}
}

export async function getUserPinned() {
	try {
		const GQL_QUERY = `
      query GetPinnedRepositories {
        viewer {
          login
          pinnedItems(first: 6, types: [REPOSITORY]) {
            nodes {
              ... on Repository {
                id
                name
                description
                url
                stargazerCount
                forkCount
                owner {
                  login
                }
                primaryLanguage {
                  name
                  color
                }
                openGraphImageUrl
              }
            }
          }
        }
      }
    `;
		const response =
			await octokit.graphql<PinnedItemsGraphQLResponse>(GQL_QUERY);
		const pinned: PinnedRepo[] = response.viewer.pinnedItems.nodes
			.filter((node): node is PinnedRepositoryNode => node !== null)
			.map((repoNode) => ({
				id: repoNode.id,
				name: repoNode.name,
				description: repoNode.description,
				url: repoNode.url,
				stars: repoNode.stargazerCount,
				forks: repoNode.forkCount,
				owner: repoNode.owner.login,
				languageName: repoNode.primaryLanguage?.name || null,
				languageColor: repoNode.primaryLanguage?.color || null,
				imageUrl:
					repoNode.openGraphImageUrl ||
					`https://placehold.co/600x300/21292b/f4f7f7?text=${repoNode.name}`,
			}));

		return { data: pinned, status: 200, error: null };
	} catch (error) {
		if (error instanceof RequestError) {
			return { data: null, status: error.status, error: error.message };
		}

		return { data: null, status: 500, error: "Internal Server Error" };
	}
}
