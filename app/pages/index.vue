<template>
  <div
    class="sm:grid sm:grid-cols-2 sm:grid-rows-1 grid-rows-[2fr_3fr] pb-4 gap-y-1 items-center h-full"
  >
    <div
      class="sm:pr-12 p-4 flex flex-col justify-center sm:text-right sm:self-center text-left self-end"
    >
      <h1 class="text-4xl mb-2 sm:text-7xl sm:mb-8">Andrés J.</h1>
      <h2 class="text-2xl sm:text-3xl">Studying Computer Science (MSc.)</h2>
      <h3 class="text-lg sm:text-2xl">TU Berlin, Germany</h3>
      <p class="text-lg mt-6 sm:text-xl sm:mt-8">
        Currently looking for a subject for my thesis!
      </p>
      <p class="text-lg sm:text-xl">
        Please check out the interests section for potential thesis topics.
      </p>
    </div>
    <div class="grid grid-rows-3 gap-y-4 py-4 h-full">
      <LinkCardComponent category="interests" />
      <LinkCardComponent category="skills" />
      <LinkCardComponent category="cv" />
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Andrés J. - Home",
});

definePageMeta({
  layout: "home-page",
});
</script>

<style></style>
