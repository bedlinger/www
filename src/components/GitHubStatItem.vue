<template>
    <div class="w-full flex flex-col justify-between rounded-lg p-3">
        <span class="text-primary-100/50 flex flex-row items-center gap-1 text-sm">
            <Icon :icon="icon" />
            {{ label }}
        </span>
        <p class="text-base ml-0.5">{{ value ?? 'N/A' }}</p>
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
