import octokit from '@/services/octokitService'
import type { Endpoints } from '@octokit/types'
import { ref } from 'vue'

type Starred = Endpoints['GET /user/starred']['response']['data']

export function useAuthenticatedUserStarred() {
  const starred = ref<Starred | null>(null)
  const isLoadingStarred = ref(false)
  const errorStarreds = ref<Error | null>(null)

  const fetchStarred = async () => {
    isLoadingStarred.value = true
    errorStarreds.value = null
    try {
      const response = await octokit.request('GET /user/starred')
      starred.value = response.data
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      errorStarreds.value = err
    } finally {
      isLoadingStarred.value = false
    }
  }

  return {
    starred,
    isLoadingStarred,
    errorStarreds,
    fetchStarred,
  }
}
