import octokit from '@/services/octokitService'
import type { Language, Repos } from '@/types/github'
import { ref, computed } from 'vue'

export function useAuthenticatedUserLanguages() {
  const languages = ref<Language[] | null>(null)
  const languageIcons = [
    { name: 'Vue', icon: 'devicon-plain:vuejs' },
    { name: 'C#', icon: 'devicon-plain:csharp' },
    { name: 'Java', icon: 'devicon-plain:java' },
    { name: 'JavaScript', icon: 'devicon-plain:javascript' },
    { name: 'Kotlin', icon: 'devicon-plain:kotlin' },
    { name: 'Python', icon: 'devicon-plain:python' },
    { name: 'CSS', icon: 'devicon-plain:css3' },
    { name: 'Typescript', icon: 'devicon-plain:typescript' },
    { name: 'Go', icon: 'devicon-plain:go' },
    { name: 'Rust', icon: 'devicon-plain:rust' },
    { name: 'Dockerfile', icon: 'devicon-plain:docker' },
    { name: 'HTML', icon: 'devicon-plain:html5' },
  ]
  const sortedLanguages = computed(() => {
    if (!languages.value) {
      return null
    }
    return languages.value.sort((a, b) => b.value - a.value)
  })
  const isLoadingLanguages = ref(false)
  const errorLanguages = ref<Error | null>(null)

  const fetchLanguages = async (repos: Repos) => {
    if (!repos || repos.length === 0) {
      return
    }
    languages.value = []
    isLoadingLanguages.value = true
    errorLanguages.value = null

    const repoLanguages: Record<string, number>[] = []
    for (const repo of repos) {
      try {
        const response = await octokit.request('GET /repos/{owner}/{repo}/languages', {
          owner: repo.owner.login,
          repo: repo.name,
        })
        repoLanguages.push(response.data as Record<string, number>)
      } catch {
        continue
      }
    }

    for (const repoLanguage of repoLanguages) {
      for (const [language, value] of Object.entries(repoLanguage)) {
        const existingLanguage = languages.value?.find((lang) => lang.name === language)
        if (existingLanguage) {
          existingLanguage.value += value
        } else {
          const icon = languageIcons.find((lang) => lang.name === language)?.icon
          languages.value?.push({ name: language, value, icon })
        }
      }
    }

    if (languages.value.length === 0) {
      errorLanguages.value = new Error('No languages found for the authenticated user')
    }

    isLoadingLanguages.value = false
  }

  return {
    languages,
    sortedLanguages,
    isLoadingLanguages,
    errorLanguages,
    fetchLanguages,
  }
}
