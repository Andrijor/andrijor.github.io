<template>
  
  <NavbarComponent />
  <div v-if="blog">
    <ContentRenderer :value="blog" />
  </div>
  
  <div v-else>blog not found</div>
  
  <div></div>
</template>

<script setup lang="ts">
import NavbarComponent from '@/components/NavbarComponent.vue'



const { data: blog } = await useAsyncData(() =>
  queryCollection("content").path("/").first()
  // queryCollection("content").all()
);

useSeoMeta({
  title: blog.value?.title,
  description: blog.value?.description,
});



</script>

<style scoped></style>
