import octokit from "../../../services/octokitService";
import {
	RequestError,
	type PinnedItemsGraphQLResponse,
	type PinnedRepo,
	type PinnedRepositoryNode,
} from "../../../types";

export async function GET() {
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

	try {
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

		return new Response(JSON.stringify(pinned), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		if (error instanceof RequestError) {
			return new Response(JSON.stringify({ message: error.message }), {
				status: error.status,
				headers: {
					"Content-Type": "application/json",
				},
			});
		}

		return new Response(JSON.stringify({ message: "Internal Server Error" }), {
			status: 500,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
}
