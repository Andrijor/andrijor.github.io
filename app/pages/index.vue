<template>
  <div
    class="bg-gray-200 dark:bg-purple-900 h-screen hidden sm:grid"
    style="grid-template-rows: 1fr"
  >
    <IndexContentsComponent />
  </div>
  <div
    class="bg-gray-200 dark:bg-purple-900 h-screen grid sm:hidden"
    style="grid-template-rows: 1fr auto"
  >
    <IndexContentsComponent />
    <NavbarComponent />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Andrés J. - Home",
});
</script>

<style></style>
