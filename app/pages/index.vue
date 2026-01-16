<template>
  <div
    class="bg-gray-200 dark:bg-purple-900 min-h-screen h-full hidden sm:grid"
    style="grid-template-rows: 1fr"
  >
    <IndexContentsComponent />
  </div>
  <div
    class="bg-gray-200 dark:bg-purple-900 min-h-screen h-full grid sm:hidden grid-rows-[1fr_auto]"
  >
    <div class="max-h-[calc(100vh-3em)] overflow-y-auto">
      <IndexContentsComponent />
    </div>
    <NavbarComponent />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Andrés J. - Home",
});
</script>

<style></style>
