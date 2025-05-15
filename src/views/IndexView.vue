<template>
  <section id="begin">
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
            <Button onclick="location.reload()">
              Neu laden
              <Icon icon="mdi:reload" class="w-5 h-5"></Icon>
            </Button>
          </template>
        </Carousel>
      </div>
    </div>
  </section>
  <section id="github">
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

onMounted(async () => {
  images.value = await loadImages()
  await fetchUser()
  await fetchRepos()
  await fetchStarred()
})
</script>
