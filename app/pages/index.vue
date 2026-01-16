<template>
  <div
    class="min-h-screen h-full hidden sm:grid"
    style="grid-template-rows: 1fr"
  >
    <IndexContentsComponent />
  </div>
  <div class="min-h-screen h-full grid sm:hidden grid-rows-[1fr_auto]">
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

definePageMeta({
  layout: "default",
});
</script>

<style></style>
