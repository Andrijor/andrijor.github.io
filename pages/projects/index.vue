<template>
    <NavbarComponent />
    <div v-if="projects">
        <ContentRenderer :value="projects" />
    </div>
</template>
<script setup lang="ts">
import NavbarComponent from '@/components/NavbarComponent.vue'
const { data: projects } = await useAsyncData(() =>
  queryCollection("content").path("/projects").first()
  // queryCollection("content").all()
);

useSeoMeta({
  title: projects.value?.title,
  description: projects.value?.description,
});



</script>