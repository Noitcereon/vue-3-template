<script setup lang="ts">
import { onMounted } from 'vue';
import ThemeSwitch from '@/components/ThemeSwitch.vue';
import { currentTheme, initTheme, switchTheme } from '../composables/theme';

onMounted(() => {
  initTheme();
});
</script>

<template>
  <header class="absolute inset-x-0 top-0">
    <div class="container flex justify-end p-4 mx-auto">
      <button
        class="overflow-hidden p-2"
        @click="switchTheme()"
      >
        <ThemeSwitch :current-theme="currentTheme" />
      </button>
    </div>
  </header>

  <main class="flex flex-col justify-center items-center py-16 px-4 mx-auto max-w-3xl h-screen">
    <h1 class="pb-20 text-6xl text-center text-gray-700 dark:text-gray-100 transition-colors">
      Vue.js starter template
    </h1>
  </main>
</template>

<style>
body {
  @apply dark:bg-gray-900 dark:text-gray-50;
}
</style>
