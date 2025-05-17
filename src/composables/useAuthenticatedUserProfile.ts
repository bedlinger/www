import octokit from '@/services/octokitService'
import type { User } from '@/types/github'
import { ref } from 'vue'

export function useAuthenticatedUserProfile() {
  const user = ref<User | null>(null)
  const isLoadingUser = ref(false)
  const errorUser = ref<Error | null>(null)

  const fetchUser = async () => {
    isLoadingUser.value = true
    errorUser.value = null
    try {
      const response = await octokit.request('GET /user')
      user.value = response.data
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      errorUser.value = err
    } finally {
      isLoadingUser.value = false
    }
  }

  return {
    user,
    isLoadingUser,
    errorUser,
    fetchUser,
  }
}
