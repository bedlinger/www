import octokit from '@/services/octokitService'
import { LANGUAGE_ICONS, type CachedLanguages, type Language, type Repos } from '@/types/github'
import axios from 'axios'
import { ref, computed } from 'vue'

export function useUserLanguages() {
    const languages = ref<Language[] | null>(null)
    const sortedLanguages = computed(() => {
        if (!languages.value) {
            return null
        }
        return languages.value.sort((a, b) => b.value - a.value)
    })
    const isLoadingLanguages = ref(false)
    const errorLanguages = ref<Error | null>(null)

    const fetchLanguagesCache = async () => {
        isLoadingLanguages.value = true
        try {
            const response = await axios.get('/top-languages.json')
            const cachedLanguages = response.data as CachedLanguages
            if (
                !cachedLanguages ||
                !cachedLanguages.lastUpdated ||
                !cachedLanguages.languages ||
                !Array.isArray(cachedLanguages.languages) ||
                cachedLanguages.languages.length === 0
            ) {
                throw new Error('Invalid cached languages data')
            }

            const lastUpdated = new Date(cachedLanguages.lastUpdated)
            const now = new Date()
            const diffInDays = Math.floor(
                (now.getTime() - lastUpdated.getTime()) / (1000 * 60 * 60 * 24),
            )
            if (diffInDays > 7) {
                throw new Error('Cache is older than 7 days')
            }

            languages.value = cachedLanguages.languages
        } catch (error) {
            throw new Error('Failed to fetch languages cache: ' + (error as Error).message)
        } finally {
            isLoadingLanguages.value = false
        }
    }

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
                    const icon = LANGUAGE_ICONS.find((lang) => lang.name === language)?.icon
                    languages.value?.push({ name: language, value, icon })
                }
            }
        }

        if (languages.value.length === 0) {
            errorLanguages.value = new Error('No languages found for the user')
        }

        isLoadingLanguages.value = false
    }

    return {
        languages,
        sortedLanguages,
        isLoadingLanguages,
        errorLanguages,
        fetchLanguagesCache,
        fetchLanguages,
    }
}
