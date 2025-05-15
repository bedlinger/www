<template>
  <section ref="topSection" class="relative">
    <div class="flex justify-center items-center lg:grid lg:grid-cols-2 lg:gap-4">
      <div class="flex flex-col justify-center mx-12">
        <h1 class="flex items-center text-left">
          Hi, I am Benjamin
          <Icon icon="fluent-emoji-flat:waving-hand-medium-light" class="w-15 h-15 ml-3 mb-3" />
        </h1>
        <p class="text-left text-wrap">
          I'm an aspiring Information Technology professional from Austria, currently in my final
          year at TGM Vienna with a specialization in Media Technology. My passion lies in the
          entire development lifecycle, from conceptualizing and designing user-friendly interfaces
          to building robust software solutions. I'm particularly enthusiastic about web development
          and thrive on bringing innovative digital projects to life.
        </p>
        <SocialLinks :socials="mySocialLinks" :is-horizontal="true" />
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
    <p>text</p>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import type { Image } from '@/types/image'
import { useAuthenticatedUserProfile } from '@/composables/useAuthenticatedUserProfile'
import { useAuthenticatedUserRepos } from '@/composables/useAuthenticatedUserRepos'
import { useAuthenticatedUserStarred } from '@/composables/useAuthenticatedUserStarred'
import type { Social } from '@/types/social'

const topSection = ref<HTMLElement | null>(null)
const githubSection = ref<HTMLElement | null>(null)
const mySocialLinks: Social[] = [
  { icon: 'bxl:linkedin-square', link: 'https://www.linkedin.com/in/bedlinger', name: 'LinkedIn' },
  { icon: 'bxl:github', link: 'https://github.com/bedlinger', name: 'GitHub' },
  { icon: 'bxl:gmail', link: 'mailto:beni.edlinger+portfolio@gmail.com', name: 'Email' },
]
const images = ref<Image[]>([])
const { user, isLoadingUser, errorUser, fetchUser } = useAuthenticatedUserProfile()
const { repos, isLoadingRepos, errorRepos, fetchRepos } = useAuthenticatedUserRepos()
const { starred, isLoadingStarred, errorStarred, fetchStarred } = useAuthenticatedUserStarred()

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
  await fetchStarred()
})
</script>
