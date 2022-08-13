<script setup lang="ts">
import { onMounted, ref } from "vue";
import { initTheme } from "../composables/theme";
import PageHeader from "../components/PageHeader.vue";

onMounted(() => {
  initTheme();
});
</script>

<template>
  <PageHeader />

  <main
    class="flex flex-col justify-center items-center py-16 px-4 mx-auto max-w-3xl h-screen"
  >
    <h1
      class="pb-20 text-6xl text-center text-gray-700 dark:text-gray-100 transition-colors"
    >
      Vue.js starter template
    </h1>
    <p class="text-gray-600 dark:text-pink-900">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde enim ipsum
      quo voluptates eos id ex saepe exercitationem necessitatibus? Dolore fuga
      quasi vel corporis illum, velit aspernatur est ex explicabo?
    </p>
  </main>
</template>

<style>
body {
  @apply dark:bg-gray-900 dark:text-gray-50;
}
</style>
