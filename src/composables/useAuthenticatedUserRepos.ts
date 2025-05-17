import octokit from '@/services/octokitService'
import type { Repos } from '@/types/github'
import { ref } from 'vue'

export function useAuthenticatedUserRepos() {
  const repos = ref<Repos | null>(null)
  const isLoadingRepos = ref(false)
  const errorRepos = ref<Error | null>(null)

  const fetchRepos = async () => {
    isLoadingRepos.value = true
    try {
      const response = await octokit.request('GET /user/repos', {
        visibility: 'all',
        sort: 'updated',
      })
      repos.value = response.data
    } catch {
      errorRepos.value = new Error(`Error fetching user repos`)
    } finally {
      isLoadingRepos.value = false
    }
  }

  return {
    repos,
    isLoadingRepos,
    errorRepos,
    fetchRepos,
  }
}
