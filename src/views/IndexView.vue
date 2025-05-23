<template>
  <TopSection ref="topSection" @go-to-section="goToSection" />
  <GitHubSection ref="githubSection" />
</template>

<script setup lang="ts">
import { SectionType } from '@/types/sections'
import { ref } from 'vue'
import TopSection from '@/components/sections/TopSection.vue'
import GitHubSection from '@/components/sections/GitHubSection.vue'

const topSection = ref<InstanceType<typeof TopSection> | null>(null)
const githubSection = ref<InstanceType<typeof GitHubSection> | null>(null)

const goToSection = (section: SectionType) => {
  let sectionElement: HTMLElement | null = null

  switch (section) {
    case SectionType.TOP:
      sectionElement = topSection.value?.$el
      break
    case SectionType.GITHUB:
      sectionElement = githubSection.value?.$el
      break
    default:
      return
  }

  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
