<template>
    <section>
        <ProgressSpinner v-if="isLoadingPinned" />
        <Message v-else-if="errorPinned" severity="error">
            <p>{{ errorPinned.message }}</p>
        </Message>
        <div v-else class="flex flex-col justify-center items-center my-12">
            <h2>Pinned Repositories</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-4 gap-y-8 gap-x-8">
                <ProjectCard v-for="(p, index) in pinned" :key="index" :pinned="p" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserPinned } from '@/composables/useUserPinned'

const { pinned, isLoadingPinned, errorPinned, fetchPinned } = useUserPinned()

onMounted(async () => {
    await fetchPinned()
})
</script>
