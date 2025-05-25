import { ref } from 'vue'
import octokit from '@/services/octokitService'
import type { PinnedItemsGraphQLResponse, PinnedRepo, PinnedRepositoryNode } from '@/types/github'

export function useUserPinned() {
  const pinned = ref<PinnedRepo[]>([])
  const isLoadingPinned = ref(false)
  const errorPinned = ref<Error | null>(null)

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
    `

  const fetchPinned = async () => {
    isLoadingPinned.value = true
    errorPinned.value = null
    pinned.value = []

    try {
      const response = await octokit.graphql<PinnedItemsGraphQLResponse>(GQL_QUERY)

      const processedRepos: PinnedRepo[] = response.viewer.pinnedItems.nodes
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
        }))

      pinned.value = processedRepos
    } catch {
      errorPinned.value = new Error('Error fetching user pinned Repos')
    } finally {
      isLoadingPinned.value = false
    }
  }

  return {
    pinned,
    isLoadingPinned,
    errorPinned,
    fetchPinned,
  }
}
