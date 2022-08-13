<script setup lang="ts">
import ThemeSwitch from "./ThemeSwitch.vue";

const props = defineProps(["currentPage"], );
</script>

<template>
  <header class="absolute inset-x-0 top-0 lg:max-w-3xl lg:mx-auto">
    <div class="container flex p-4 mx-auto">
      <div class="container flex justify-start items-center lg:hidden">
        <h1 class="text-2xl">{{ props.currentPage }}</h1>
      </div>
      <nav>
        <ul class="">
          <li class="inline-block px-1"><router-link to="/">Forside</router-link> </li>
          <li class="inline-block px-1"><router-link to="om-mig">Hvem er jeg</router-link></li>
        </ul>
      </nav>
      <div class="container flex justify-end flex-1">
        <ThemeSwitch />
      </div>
    </div>
  </header>
</template>
