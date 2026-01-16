<template>
  <div
    class="bg-gray-200 dark:bg-purple-900 min-h-screen h-full hidden sm:grid"
    style="grid-template-rows: auto 1fr auto"
  >
    <NavbarComponent />
    <main class=""></main>
  </div>
  <div
    class="bg-gray-200 dark:bg-purple-900 min-h-screen h-full grid sm:hidden grid-rows-[1fr_auto]"
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
