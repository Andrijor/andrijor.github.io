<template>
  <div
    class="min-h-screen bg-gray-100 dark:bg-purple-950 text-teal-700 dark:text-white"
  >
    <div
      class="min-h-screen h-full grid grid-rows-[1fr_auto] sm:grid-rows-[auto_1fr]"
    >
      <NavbarComponent v-if="!screenIsSmall" />
      <slot />
      <NavbarComponent v-if="screenIsSmall" />
    </div>
  </div>
</template>

<script setup lang="ts">
const screenIsSmall = useMediaQuery("(max-width: 640px)");
</script>
