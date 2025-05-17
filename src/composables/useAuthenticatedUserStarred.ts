import octokit from '@/services/octokitService'
import type { Starred } from '@/types/github'
import { ref } from 'vue'

export function useAuthenticatedUserStarred() {
  const starred = ref<Starred | null>(null)
  const isLoadingStarred = ref(false)
  const errorStarred = ref<Error | null>(null)

  const fetchStarred = async () => {
    isLoadingStarred.value = true
    try {
      const response = await octokit.request('GET /user/starred')
      starred.value = response.data
    } catch {
      errorStarred.value = new Error(`Error fetching starred repos`)
    } finally {
      isLoadingStarred.value = false
    }
  }

  return {
    starred,
    isLoadingStarred,
    errorStarred,
    fetchStarred,
  }
}
