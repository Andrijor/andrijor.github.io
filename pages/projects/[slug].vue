<script setup lang="ts">
import NavbarComponent from '@/components/NavbarComponent.vue'
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`projects-${slug}`, () => {
  return queryCollection('projects').path(`/projects/${slug}`).first()
})

// const allPosts = await queryCollection('projects').order('date', 'DESC').all()
</script>

<template>
    <NavbarComponent />
  <!-- Render the projects post as Prose & Vue components -->
  <ContentRenderer v-if="post" :value="post" />
  <!-- <div class="text-xl" v-for="post in allPosts"> -->
    <!-- {{ post.title }}, {{ post.date }} -->
    <!-- <nuxt-link class="btn btn-warning" :to="`${post.path}`">
       Go to {{ post.title }}
    </nuxt-link> -->
  <!-- </div> -->
</template>