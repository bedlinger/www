<template>
    <a :href="pinned.url" target="_blank" rel="noopener noreferrer" class="!no-underline">
        <Card
            class="!w-full !h-full !text-primary-50 !bg-primary-500 !rounded-xl !p-3 !shadow-2xl !shadow-primary-900 transition-transform hover:scale-105"
        >
            <template #title>
                <h3 class="!-mb-3">{{ pinned.name }}</h3>
            </template>
            <template #subtitle>
                <p class="!text-primary-50/50 !mb-0 text-lg">
                    {{ pinned.description ?? 'No description provided' }}
                </p>
            </template>
            <template #content>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <GitHubStatItem
                        icon="mdi:account"
                        label="Owner"
                        :value="pinned.owner"
                        class="bg-primary-600"
                    />
                    <GitHubStatItem
                        icon="mdi:code-tags"
                        label="Language"
                        :value="pinned.languageName"
                        class="bg-primary-600"
                    />
                    <GitHubStatItem
                        icon="mdi:star-shooting"
                        label="Stars"
                        :value="pinned.stars"
                        class="bg-primary-600"
                    />
                    <GitHubStatItem
                        icon="mdi:source-branch"
                        label="Forks"
                        :value="pinned.forks"
                        class="bg-primary-600"
                    />
                </div>
            </template>
            <template #footer>
                <div class="flex flex-row justify-end-safe">
                    <p
                        class="!mb-0 text-primary-50/30 hover:text-primary-50/50 focus:text-primary-50/50 active:text-primary-50/50 underline"
                    >
                        View Project on GitHub
                    </p>
                </div>
            </template>
        </Card>
    </a>
</template>

<script setup lang="ts">
import type { PinnedRepo } from '@/types/github'

defineProps<{
    pinned: PinnedRepo
}>()
</script>
