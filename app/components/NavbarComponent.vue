<template>
  <!-- class="btn btn-square btn-outline hover:bg-[#4b007d] hover:border-none hover:shadow-none sm:hidden" -->
  <div
    class="grid dark:bg-[#37005a] bg-gray-300 shadow-sm sm:px-2 px-8 py-2"
    style="grid-template-columns: 1fr 3fr; align-items: center; height: 100%"
  >
    <div class="">
      <NuxtLink to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
          class="mx-2"
        >
          >
          <path
            fill="currentColor"
            d="M7 20q-.825 0-1.412-.587T5 18v-7.15l-2 1.525q-.35.25-.75.213T1.6 12.2t-.2-.75t.4-.65l8.975-6.875q.275-.2.588-.3t.637-.1t.638.1t.587.3L16 6.05V5.5q0-.625.438-1.062T17.5 4t1.063.438T19 5.5v2.85l3.2 2.45q.325.25.388.65t-.188.75t-.65.388t-.75-.213l-2-1.525V18q0 .825-.587 1.413T17 20h-1q-.825 0-1.412-.587T14 18v-2q0-.825-.587-1.412T12 14t-1.412.588T10 16v2q0 .825-.587 1.413T8 20zm3-9.975h4q0-.8-.6-1.313T12 8.2t-1.4.513t-.6 1.312"
          />
        </svg>
      </NuxtLink>
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
          <NuxtLink to="/interests" class="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              class=""
            >
              <path
                fill="currentColor"
                d="M12 22q-.65 0-1.175-.312T10 20.85q-.825 0-1.412-.587T8 18.85V15.3q-1.475-.975-2.363-2.575T4.75 9.25q0-3.025 2.113-5.137T12 2t5.138 2.113T19.25 9.25q0 1.925-.888 3.5T16 15.3v3.55q0 .825-.587 1.413T14 20.85q-.3.525-.825.838T12 22m-2-3.15h4v-.9h-4zm0-1.9h4V16h-4zM12.75 14v-2.7l1.675-1.675q.225-.225.225-.525t-.225-.525t-.525-.225t-.525.225L12 9.95l-1.375-1.375Q10.4 8.35 10.1 8.35t-.525.225t-.225.525t.225.525L11.25 11.3V14z"
              />
            </svg>
            <span class="hidden sm:inline">Interests</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/skills" class="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              class=""
            >
              <path
                fill="currentColor"
                d="M12.275 15.525q1.75 0 2.975-1.125t1.225-2.725q0-1.425-.913-2.412t-2.212-.988q-1.175 0-1.987.75t-.813 1.85q0 .475.163.938t.562.812t.8.288t.65-.338t.288-.663t-.313-.712q-.05-.05-.1-.125t-.05-.175q0-.275.225-.437t.575-.163q.5 0 .825.413t.325.987q0 .775-.638 1.313t-1.562.537q-1.175 0-1.987-.95T9.5 10.275q0-.475.113-.925t.337-.85q.2-.375.2-.788T9.85 7t-.725-.288t-.65.363q-.5.7-.75 1.5t-.25 1.675q0 2.2 1.4 3.738t3.4 1.537M7 22q-.425 0-.712-.288T6 21v-3.3q-1.425-1.3-2.212-3.037T3 11q0-3.75 2.625-6.375T12 2q3.125 0 5.538 1.838t3.137 4.787l1.3 5.125q.125.475-.175.863T21 15h-2v3q0 .825-.587 1.413T17 20h-2v1q0 .425-.288.713T14 22z"
              />
            </svg>
            <span class="hidden sm:inline">Skills</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/cv" class="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              class=""
            >
              <path
                fill="currentColor"
                d="M12 12q-1.275 0-2.137-.862T9 9q0-1.25.863-2.125T12 6q1.25 0 2.125.875T15 9q0 1.275-.875 2.138T12 12m-6 5v-.9q0-.525.263-.987t.712-.738q1.15-.675 2.413-1.025T12 13t2.613.35t2.412 1.025q.45.275.713.738T18 16.1v.9q0 .425-.288.713T17 18H7q-.425 0-.712-.288T6 17m-2 5q-.825 0-1.412-.587T2 20v-3q0-.425.288-.712T3 16t.713.288T4 17v3h3q.425 0 .713.288T8 21t-.288.713T7 22zM2 7V4q0-.825.588-1.412T4 2h3q.425 0 .713.288T8 3t-.288.713T7 4H4v3q0 .425-.288.713T3 8t-.712-.288T2 7m18 15h-3q-.425 0-.712-.288T16 21t.288-.712T17 20h3v-3q0-.425.288-.712T21 16t.713.288T22 17v3q0 .825-.587 1.413T20 22m0-15V4h-3q-.425 0-.712-.288T16 3t.288-.712T17 2h3q.825 0 1.413.588T22 4v3q0 .425-.288.713T21 8t-.712-.288T20 7"
              />
            </svg>
            <span class="hidden sm:inline">CV</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
