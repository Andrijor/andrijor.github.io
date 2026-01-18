<template>
  <main class="">
    <div
      class="mockup-code max-w-screen overflow-x-scroll bg-gray-200 dark:bg-purple-900 w-full text-xl text-teal-500 caret-teal-500 dark:caret-purple-100 dark:text-purple-100"
    >
      <pre
        v-if="terminalPage == 1"
        v-for="(value, key) in inputData1"
        :key="key"
        :data-prefix="`${showValue == key ? '>' : key}`"
        @click="showValue = key"
      ><code>{{ value }}</code></pre>
      <pre v-if="terminalPage == 1" data-prefix="p"><code>Next Page</code></pre>

      <br v-if="terminalPage == 2" />
      <pre
        v-if="terminalPage == 2"
        v-for="(value, key) in inputData2"
        :key="key"
        :data-prefix="`${showValue == key ? '>' : key}`"
        @click="showValue = key"
      ><code>{{ value }}</code></pre>
      <pre
        v-if="terminalPage == 2"
        data-prefix="p"
      ><code>Previous Page</code></pre>

      <pre data-prefix="!"><input 
          ref="inputField"
          type="text" 
          @keydown.enter="handleEnter"
          placeholder="Type Index Here"
          class="focus:outline-none focus:bg-transparent"
        ></pre>
    </div>

    <div
      v-if="showValue"
      class="text-2xl p-4 w-full mt-4 text-teal-500 dark:text-white"
    >
      {{ inputData[showValue] }}
    </div>
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: "Andrés J. - Skills",
});

definePageMeta({
  layout: "main-page",
});

const inputField = ref<HTMLInputElement | null>(null);

onMounted(() => {
  inputField.value?.focus();
});

const inputData1: Record<string, string> = {
  "1": "(2025) Crew Grid",
  "2": "(2024) Smart Security Lab",
  "3": "(2024) Intelligence Research Seminar Project",
  "4": "(2023) Bachelor's Thesis",
};

const inputData2: Record<string, string> = {
  "5": "(2022) Multimodal Unity Engine Game",
  "6": "(2025) Multiple Arduino Projects",
  "7": "(2019) Programming Project - Cyber Physical Systems",
};

const inputData: Record<string, string> = {
  ...inputData1,
  ...inputData2,
  p: "Other Page",
};

const acceptedInputs = Object.keys(inputData);
const showValue = ref<string>("");
const terminalPage = ref<1 | 2>(1);

const handleEnter = () => {
  if (
    inputField.value?.value &&
    acceptedInputs.includes(inputField.value?.value.toLowerCase())
  ) {
    if (inputField.value.value.toLowerCase() === "p") {
      if (terminalPage.value == 1) {
        terminalPage.value = 2;
      } else {
        terminalPage.value = 1;
      }
    } else {
      showValue.value = inputField.value.value;
    }

    inputField.value.value = "";
    inputField.value.focus();
  } else {
    if (inputField.value) {
      inputField.value.value = "";
      showValue.value = "";
      inputField.value.focus();
    }
  }
};
</script>

<style></style>
