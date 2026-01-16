<template>
  <div
    id="computer-contents"
    class="hidden sm:grid sm:grid-cols-2 xl:grid-cols-[1fr_1fr]"
  >
    <div class="pr-12 flex flex-col justify-center text-right">
      <h1 class="text-7xl mb-8">Andrés J.</h1>
      <h2 class="text-3xl">Studying Computer Science (MSc.)</h2>
      <h3 class="text-2xl">TU Berlin, Germany</h3>
      <p class="text-xl mt-8">Currently looking for a subject for my thesis!</p>
    </div>
    <div class="grid py-4 gap-y-4 grid-template-rows-[repeat(3, 1fr)]">
      <div>
        <LinkCardComponent category="interests" />
      </div>
      <div>
        <LinkCardComponent category="skills" />
      </div>
      <div>
        <LinkCardComponent category="cv" />
      </div>
    </div>
  </div>
  <div id="mobile-contents" class="grid grid-rows-4 sm:hidden pb-4 gap-y-2">
    <div class="p-4 flex flex-col justify-center text-left">
      <h1 class="text-4xl mb-2">Andrés J.</h1>
      <h2 class="text-2xl">Studying Computer Science (MSc.)</h2>
      <h3 class="text-lg">TU Berlin, Germany</h3>
      <p class="text-lg mt-2">Currently looking for a subject for my thesis!</p>
    </div>
    <div>
      <LinkCardComponent category="interests" />
    </div>
    <div>
      <LinkCardComponent category="skills" />
    </div>
    <div>
      <LinkCardComponent category="cv" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import LinkCardComponent from "./LinkCardComponent.vue";
</script>

<style></style>
