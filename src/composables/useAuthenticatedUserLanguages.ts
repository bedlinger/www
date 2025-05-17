import octokit from '@/services/octokitService'
import type { Languages, Repos } from '@/types/github'
import { ref } from 'vue'

export function useAuthenticatedUserLanguages() {
  const languages = ref<Languages | null>(null)
  const isLoadingLanguages = ref(false)
  const errorLanguages = ref<Error | null>(null)

  const fetchLanguages = async (repos: Repos) => {
    if (!repos || repos.length === 0) {
      return
    }
    isLoadingLanguages.value = true
    errorLanguages.value = null
    for (const repo of repos) {
      try {
        const response = await octokit.request('GET /repos/{owner}/{repo}/languages', {
          owner: repo.owner.login,
          repo: repo.name,
        })
        languages.value = { ...languages.value, ...response.data }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        errorLanguages.value = err
      } finally {
        isLoadingLanguages.value = false
      }
    }
  }

  return {
    languages,
    isLoadingLanguages,
    errorLanguages,
    fetchLanguages,
  }
}
