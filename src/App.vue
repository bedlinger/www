<template>
    <div class="min-h-screen flex flex-col">
        <main class="flex-1">
            <RouterView />
        </main>
        <footer class="bg-primary-900 text-white p-6">
            <div class="max-w-7xl mx-auto">
                <div class="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div class="flex flex-col items-center md:items-start">
                        <h3 class="text-2xl font-bold">Benjamin Edlinger</h3>
                    </div>
                    <button
                        class="flex items-center gap-2 text-primary-300 hover:text-white transition-colors duration-300 lg:hover:cursor-pointer"
                        @click="scrollToTop"
                    >
                        <span>Back to top</span>
                        <Icon icon="mdi:arrow-up" class="w-5 h-5" />
                    </button>
                    <div class="flex flex-col items-center md:items-end gap-4">
                        <SocialLinks :socials="SOCIAL_LINKS" :is-horizontal="true" />
                    </div>
                </div>

                <div
                    class="mt-8 pt-4 border-t border-primary-700 text-center text-primary-300 text-sm"
                >
                    <p>© {{ currentYear }} Benjamin Edlinger. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { SOCIAL_LINKS } from '@/types/social'

const currentYear = new Date().getFullYear()

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}
</script>
