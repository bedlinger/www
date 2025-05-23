<template>
  <section>
    <div
      class="flex flex-col items-center justify-evenly flex-wrap w-screen h-screen text-primary-50"
    >
      <div
        class="flex flex-col items-center justify-center bg-primary-500 rounded-xl p-5 shadow-2xl shadow-primary-900"
      >
        <ProgressSpinner v-if="isLoadingUser" />
        <Message v-else-if="errorUser" severity="error">
          <p>{{ errorUser.message }}</p>
        </Message>
        <span v-else>
          <div class="flex flex-col items-center border-b border-primary-700">
            <a :href="user?.html_url" target="_blank" rel="noopener noreferrer">
              <Avatar
                :image="user?.avatar_url"
                shape="circle"
                class="!w-30 !h-30 !border-4 !border-primary-800 !border-solid shadow-2xl"
              />
            </a>
            <p class="font-bold text-xl">{{ user?.login }}</p>
          </div>
          <div class="flex flex-col w-full pt-2 px-4 border-b border-primary-700">
            <p class="font-bold text-xl mb-2 self-start">GitHub Stats:</p>
            <div class="grid grid-cols-2 gap-4 w-full mb-3">
              <GitHubStatItem
                icon="mdi:calendar"
                label="Joined GitHub:"
                :value="
                  user?.created_at
                    ? new Date(user?.created_at).toLocaleDateString('en-EN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })
                    : 'N/A'
                "
                class="bg-primary-600 rounded-lg p-3 transition-transform hover:scale-105"
              />
              <GitHubStatItem
                icon="mdi:source-repository"
                label="Public Repos:"
                :value="user?.public_repos"
                class="bg-primary-600 rounded-lg p-3 transition-transform hover:scale-105"
              />
              <GitHubStatItem
                icon="mdi:account-group"
                label="Followers:"
                :value="user?.followers"
                class="bg-primary-600 rounded-lg p-3 transition-transform hover:scale-105"
              />
              <GitHubStatItem
                icon="mdi:eye"
                label="Following:"
                :value="user?.following"
                class="bg-primary-600 rounded-lg p-3 transition-transform hover:scale-105"
              />
            </div>
          </div>
          <div class="flex flex-col pl-2 pt-2 w-full">
            <p class="font-bold text-xl mb-2">Top Languages:</p>
            <ProgressSpinner v-if="!isLoadingUser && isLoadingLanguages" />
            <Message v-else-if="errorLanguages" severity="error">
              <p>{{ errorLanguages.message }}</p>
            </Message>
            <div v-else class="grid grid-cols-3 gap-y-3 gap-x-8">
              <LanguageStatItem
                v-for="(language, index) in topSixLanguages"
                :key="index"
                :language="language"
                class="transition-transform hover:scale-105"
              />
            </div>
          </div>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAuthenticatedUserLanguages } from '@/composables/useAuthenticatedUserLanguages'
import { useAuthenticatedUserProfile } from '@/composables/useAuthenticatedUserProfile'
import { useAuthenticatedUserRepos } from '@/composables/useAuthenticatedUserRepos'
import { computed, onMounted } from 'vue'

const { user, isLoadingUser, errorUser, fetchUser } = useAuthenticatedUserProfile()
const { repos, fetchRepos } = useAuthenticatedUserRepos()
const { sortedLanguages, isLoadingLanguages, errorLanguages, fetchLanguages } =
  useAuthenticatedUserLanguages()
const topSixLanguages = computed(() => {
  if (sortedLanguages.value && sortedLanguages.value.length > 0) {
    return sortedLanguages.value.slice(0, 6)
  }
  return []
})

onMounted(async () => {
  await fetchUser()
  await fetchRepos()
  if (repos.value && repos.value.length > 0) {
    await fetchLanguages(repos.value)
  }
})
</script>
