<template>
  <div
    class="flex flex-col items-center justify-center bg-primary-400 rounded-xl p-4 shadow-sm shadow-primary-900"
  >
    <Icon :icon="language.icon || 'devicon-plain:devicon'" class="icon w-8 h-8 mb-1" />
    <p class="text-lg font-bold">{{ language.name }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Language } from '@/types/github'
import { Icon } from '@iconify/vue'

defineProps<{
  language: Language
}>()
</script>
