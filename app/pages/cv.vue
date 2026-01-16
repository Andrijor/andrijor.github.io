<template>
  <div
    class="bg-gray-200 dark:bg-purple-900 h-screen hidden sm:grid"
    style="grid-template-rows: auto 1fr auto"
  >
    <NavbarComponent />
    <main class=""></main>
  </div>
  <div
    class="bg-gray-200 dark:bg-purple-900 h-screen grid sm:hidden"
    style="grid-template-rows: 1fr auto"
  >
    <main class=""></main>
    <NavbarComponent />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Andrés J. - CV",
});
</script>

<style></style>
