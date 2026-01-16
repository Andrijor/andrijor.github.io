<template>
  <div
    class="min-h-screen h-full hidden sm:grid"
    style="grid-template-rows: auto 1fr auto"
  >
    <NavbarComponent />
    <main class=""></main>
  </div>
  <div class="min-h-screen h-full grid sm:hidden grid-rows-[1fr_auto]">
    <main class=""></main>
    <NavbarComponent />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Andrés J. - Skills",
});

definePageMeta({
  layout: "default",
});
</script>

<style></style>
