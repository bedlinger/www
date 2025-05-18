<template>
  <section ref="topSection" class="relative">
    <div class="flex justify-center items-center lg:grid lg:grid-cols-2 lg:gap-4">
      <div class="flex flex-col justify-center mx-12">
        <h1 class="flex items-center text-left">
          Hi, I am Benjamin
          <Icon icon="fluent-emoji-flat:waving-hand-medium-light" class="w-15 h-15 ml-3 mb-3" />
        </h1>
        <p class="text-left text-wrap mb-3">
          I'm an aspiring Information Technology professional from Austria, currently in my final
          year at TGM Vienna with a specialization in Media Technology. My passion lies in the
          entire development lifecycle, from conceptualizing and designing user-friendly interfaces
          to building robust software solutions. I'm particularly enthusiastic about web development
          and thrive on bringing innovative digital projects to life.
        </p>
        <SocialLinks :socials="socialLinks" :is-horizontal="true" />
      </div>
      <div class="hidden lg:flex lg:items-center lg:justify-center lg:mx-12">
        <Carousel :value="images" :numVisible="1" :numScroll="1" :autoplayInterval="2000" circular>
          <template #item="slotProps">
            <img
              :src="slotProps.data.src"
              :alt="slotProps.data.fileName"
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </template>
          <template #empty>
            <p>Bilder konnte nicht geladen werden!</p>
          </template>
        </Carousel>
      </div>
    </div>
    <div
      class="hidden lg:absolute lg:bottom-2 lg:left-1/2 lg:flex lg:items-center lg:justify-center lg:w-12 lg:h-12 lg:animate-bounce lg:bg-primary-50 lg:bg-contain lg:rounded-full lg:hover:cursor-pointer"
      @click="goToSection('github')"
    >
      <Icon icon="mdi:chevron-triple-down" class="icon" style="color: var(--color-primary-600)" />
    </div>
  </section>
  <section ref="githubSection">
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
import { ref, onMounted, computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { Image } from '@/types/image'
import { useAuthenticatedUserProfile } from '@/composables/useAuthenticatedUserProfile'
import { useAuthenticatedUserRepos } from '@/composables/useAuthenticatedUserRepos'
import { useSocialLinks } from '@/composables/useSocialLinks'
import { useAuthenticatedUserLanguages } from '@/composables/useAuthenticatedUserLanguages'

const topSection = ref<HTMLElement | null>(null)
const githubSection = ref<HTMLElement | null>(null)
const { socialLinks } = useSocialLinks()
const images = ref<Image[]>([])
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
const loadImages = async () => {
  const imageModules = import.meta.glob('@/assets/index/*.(png|jpg|jpeg|gif|svg)')
  const loadedImages: Image[] = []
  for (const path in imageModules) {
    const module = await imageModules[path]()
    loadedImages.push({
      src: (module as { default: string }).default,
      fileName: path.split('/').pop() || 'unknown',
    })
  }
  return loadedImages.sort(() => Math.random() - 0.5)
}
const goToSection = (sectionRefName: string) => {
  let sectionElement: HTMLElement | null = null

  switch (sectionRefName) {
    case 'top':
      sectionElement = topSection.value
      break
    case 'github':
      sectionElement = githubSection.value
      break
    default:
      return
  }

  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(async () => {
  images.value = await loadImages()
  await fetchUser()
  await fetchRepos()
  if (repos.value && repos.value.length > 0) {
    await fetchLanguages(repos.value)
  }
})
</script>
