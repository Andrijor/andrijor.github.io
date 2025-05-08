<template>
  
    <NavbarComponent />
    <div v-if="others">
      <ContentRenderer :value="others" />
    </div>
    
    <div v-else>others not found</div>
    
    <div></div>
  </template>
  
  <script setup lang="ts">
  import NavbarComponent from '@/components/NavbarComponent.vue'
  
  
  
  const { data: others } = await useAsyncData(() =>
    queryCollection("content").path("/others").first()
    // queryCollection("content").all()
  );
  
  useSeoMeta({
    title: others.value?.title,
    description: others.value?.description,
  });
  
  
  
  </script>
  
  <style scoped></style>
  