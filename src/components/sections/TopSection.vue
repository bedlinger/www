<template>
  <section class="relative lg:grid lg:grid-cols-2 lg:gap-4">
    <div class="flex flex-col justify-center mx-12">
      <h1 class="flex items-center text-left">
        Hi, I am Benjamin
        <Icon icon="fluent-emoji-flat:waving-hand-medium-light" class="w-15 h-15 ml-3 mb-3" />
      </h1>
      <p class="text-left text-wrap mb-3">
        I'm an aspiring Information Technology professional from Austria, currently in my final year
        at TGM Vienna with a specialization in Media Technology. My passion lies in the entire
        development lifecycle, from conceptualizing and designing user-friendly interfaces to
        building robust software solutions. I'm particularly enthusiastic about web development and
        thrive on bringing innovative digital projects to life.
      </p>
      <SocialLinks :socials="socialLinks" :is-horizontal="true" />
    </div>
    <div class="hidden lg:flex lg:items-center lg:justify-center lg:mx-12">
      <Carousel :value="images" :numVisible="1" :numScroll="1" :autoplayInterval="2500" circular>
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
    <div
      class="hidden lg:absolute lg:bottom-2 lg:left-1/2 lg:flex lg:items-center lg:justify-center lg:w-12 lg:h-12 lg:animate-bounce lg:bg-primary-50 lg:bg-contain lg:rounded-full lg:hover:cursor-pointer"
      @click="$emit('goToSection', SectionType.GITHUB)"
    >
      <Icon icon="mdi:chevron-triple-down" class="icon" style="color: var(--color-primary-600)" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import type { Image } from '@/types/image'
import { useSocialLinks } from '@/composables/useSocialLinks'
import { SectionType } from '@/types/sections'

const { socialLinks } = useSocialLinks()
const images = ref<Image[]>([])

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
})
</script>
