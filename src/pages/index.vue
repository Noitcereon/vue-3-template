<script setup lang="ts">
import { onMounted, ref } from "vue";
import { initTheme } from "../composables/theme";
import PageHeader from "../components/PageHeader.vue";
import PageFooter from "../components/PageFooter.vue";

onMounted(() => {
  initTheme();
});
</script>

<template>
  <PageHeader currentPage="Forside" />

  <main
    class="flex flex-col items-center py-20 px-4 mx-auto max-w-3xl h-screen"
  >
    <h1
      class="pb-4 text-6xl text-center text-gray-700 dark:text-gray-100 transition-colors"
    >
      Velkommen
    </h1>
    <p class="text-gray-600 dark:text-pink-900">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde enim ipsum
      quo voluptates eos id ex saepe exercitationem necessitatibus? Dolore fuga
      quasi vel corporis illum, velit aspernatur est ex explicabo?
    </p>
    <img 
      src="https://secure.kcm.org.au/wp-content/uploads/2021/04/the-healing-miracles-jesus-a-study.jpg"
      class="max-w-full rounded-lg"
    />
  </main>

  <PageFooter />
</template>

<style>
body {
  @apply dark:bg-gray-900 dark:text-gray-50;
  @apply bg-pink-100;
}
</style>
