<template>
  <div v-if="category" class="h-full bg-black/5 dark:bg-black/10">
    <NuxtLink
      :to="`/${category}`"
      class="grid grid-cols-[2fr_3fr] grid-rows-1 items-center p-4 gap-4 h-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="4em"
        height="4em"
        viewBox="0 0 24 24"
        v-if="category == 'interests'"
        class="mx-auto"
      >
        <path
          fill="currentColor"
          d="M12 22q-.65 0-1.175-.312T10 20.85q-.825 0-1.412-.587T8 18.85V15.3q-1.475-.975-2.363-2.575T4.75 9.25q0-3.025 2.113-5.137T12 2t5.138 2.113T19.25 9.25q0 1.925-.888 3.5T16 15.3v3.55q0 .825-.587 1.413T14 20.85q-.3.525-.825.838T12 22m-2-3.15h4v-.9h-4zm0-1.9h4V16h-4zM12.75 14v-2.7l1.675-1.675q.225-.225.225-.525t-.225-.525t-.525-.225t-.525.225L12 9.95l-1.375-1.375Q10.4 8.35 10.1 8.35t-.525.225t-.225.525t.225.525L11.25 11.3V14z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="4em"
        height="4em"
        viewBox="0 0 24 24"
        v-else-if="category == 'skills'"
        class="mx-auto"
      >
        <path
          fill="currentColor"
          d="M9 15q-2.5 0-4.25-1.75T3 9q0-.5.075-1t.275-.95q.125-.25.313-.375t.412-.175t.463.013t.437.262L7.6 9.4l1.8-1.8l-2.625-2.625q-.2-.2-.262-.437T6.5 4.075t.175-.413t.375-.312q.45-.2.95-.275T9 3q2.5 0 4.25 1.75T15 9q0 .575-.1 1.088t-.3 1.012l5.05 5q.725.725.725 1.775t-.725 1.775t-1.775.725t-1.775-.75l-5-5.025q-.5.2-1.012.3T9 15"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="4em"
        height="4em"
        viewBox="0 0 24 24"
        v-else-if="category == 'cv'"
        class="mx-auto"
      >
        <path
          fill="currentColor"
          d="M12 12q-1.275 0-2.137-.862T9 9q0-1.25.863-2.125T12 6q1.25 0 2.125.875T15 9q0 1.275-.875 2.138T12 12m-6 5v-.9q0-.525.263-.987t.712-.738q1.15-.675 2.413-1.025T12 13t2.613.35t2.412 1.025q.45.275.713.738T18 16.1v.9q0 .425-.288.713T17 18H7q-.425 0-.712-.288T6 17m-2 5q-.825 0-1.412-.587T2 20v-3q0-.425.288-.712T3 16t.713.288T4 17v3h3q.425 0 .713.288T8 21t-.288.713T7 22zM2 7V4q0-.825.588-1.412T4 2h3q.425 0 .713.288T8 3t-.288.713T7 4H4v3q0 .425-.288.713T3 8t-.712-.288T2 7m18 15h-3q-.425 0-.712-.288T16 21t.288-.712T17 20h3v-3q0-.425.288-.712T21 16t.713.288T22 17v3q0 .825-.587 1.413T20 22m0-15V4h-3q-.425 0-.712-.288T16 3t.288-.712T17 2h3q.825 0 1.413.588T22 4v3q0 .425-.288.713T21 8t-.712-.288T20 7"
        />
      </svg>
      <span class="text-4xl text-left ml-4">{{ category.toUpperCase() }}</span>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  category: string;
}>();
</script>

<style></style>
