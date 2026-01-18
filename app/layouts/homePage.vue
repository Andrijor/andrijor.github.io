<template>
  <div
    class="min-h-screen bg-gray-100 dark:bg-purple-950 text-teal-700 dark:text-white"
  >
    <div class="min-h-screen h-full grid grid-rows-[1fr_auto] sm:grid-rows-1">
      <div class="max-h-[calc(100vh-3em)] overflow-y-auto sm:max-h-screen">
        <slot />
      </div>
      <NavbarComponent v-if="screenIsSmall" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const screenIsSmall = useMediaQuery("(max-width: 640px)");
</script>
