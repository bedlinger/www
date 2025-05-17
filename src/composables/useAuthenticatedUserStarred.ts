import octokit from '@/services/octokitService'
import type { Starred } from '@/types/github'
import { ref } from 'vue'

export function useAuthenticatedUserStarred() {
  const starred = ref<Starred | null>(null)
  const isLoadingStarred = ref(false)
  const errorStarred = ref<Error | null>(null)

  const fetchStarred = async () => {
    isLoadingStarred.value = true
    errorStarred.value = null
    try {
      const response = await octokit.request('GET /user/starred')
      starred.value = response.data
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      errorStarred.value = err
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
