<template>
  <!-- class="btn btn-square btn-outline hover:bg-[#4b007d] hover:border-none hover:shadow-none sm:hidden" -->
  <!-- dark:bg-[#37005a] bg-gray-300 -->
  <!-- sm:px-2 px-8 py-2 -->
  <div
    class="grid bg-teal-100/30 dark:bg-black/10"
    style="grid-template-columns: 1fr 3fr; align-items: center; height: 100%"
  >
    <div class="">
      <NavbarButtonComponent category="" class="w-fit" />
    </div>
    <div class="">
      <ul
        class="grid mx-12"
        style="
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          align-items: center;
        "
      >
        <li>
          <NavbarButtonComponent category="interests" class="gap-2" />
        </li>
        <li>
          <NavbarButtonComponent category="skills" class="gap-2" />
        </li>
        <li>
          <NavbarButtonComponent category="cv" class="gap-2" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
