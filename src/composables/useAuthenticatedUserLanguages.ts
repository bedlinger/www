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
    for (const repo of repos) {
      try {
        const response = await octokit.request('GET /repos/{owner}/{repo}/languages', {
          owner: repo.owner.login,
          repo: repo.name,
        })
        languages.value = { ...languages.value, ...response.data }
      } catch {
        continue
        // throw new Error(`Error fetching languages for repo ${repo.name}`)
      } finally {
        isLoadingLanguages.value = false
      }
    }
    if (languages.value && Object.keys(languages.value).length === 0) {
      errorLanguages.value = new Error('No languages found for the authenticated user')
    }
  }

  return {
    languages,
    isLoadingLanguages,
    errorLanguages,
    fetchLanguages,
  }
}
