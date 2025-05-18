<template>
  <div>
    <span class="-mb-1 text-primary-100/50 flex flex-row items-center gap-1 text-sm">
      <Icon :icon="icon" />
      {{ label }}
    </span>
    <p class="ml-1 text-base">{{ value ?? 'N/A' }}</p>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  icon: string
  label: string
  value?: string | number | null
}>()
</script>
