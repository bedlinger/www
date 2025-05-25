<template>
    <div :class="['flex', isHorizontal ? 'flex-row' : 'flex-col', 'gap-6']">
        <a
            v-for="socialItem in socials"
            :key="socialItem.link"
            :href="socialItem.link"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Icon
                :icon="socialItem.icon"
                class="icon"
                style="color: var(--color-primary-600)"
                :aria-label="socialItem.name || socialItem.icon"
            />
        </a>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { Social } from '@/types/social'

withDefaults(
    defineProps<{
        isHorizontal?: boolean
        socials: Social[]
    }>(),
    {
        isHorizontal: true,
    },
)
</script>
