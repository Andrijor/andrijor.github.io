<template>
    <NavbarComponent />
    <div v-if="blog">
      <ContentRenderer :value="blog" />
    </div>
    
</template>

<script setup lang="ts">
import NavbarComponent from '@/components/NavbarComponent.vue'
const { data: blog } = await useAsyncData(() =>
  queryCollection("content").path("/blog").first()
  // queryCollection("content").all()
);

useSeoMeta({
  title: blog.value?.title,
  description: blog.value?.description,
});



</script>