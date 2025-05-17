import octokit from '@/services/octokitService'
import type { Repos } from '@/types/github'
import { ref } from 'vue'

export function useAuthenticatedUserRepos() {
  const repos = ref<Repos | null>(null)
  const isLoadingRepos = ref(false)
  const errorRepos = ref<Error | null>(null)

  const fetchRepos = async () => {
    isLoadingRepos.value = true
    errorRepos.value = null
    try {
      const response = await octokit.request('GET /user/repos', {
        visibility: 'all',
        sort: 'updated',
      })
      repos.value = response.data
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      errorRepos.value = err
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
