<script setup lang="ts">
import NavbarComponent from '@/components/NavbarComponent.vue'
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})

const allPosts = await queryCollection('blog').all()
</script>

<template>
    <NavbarComponent />

    <!-- {{ allPosts }} -->
    <!-- <br/> -->
    <!-- Noooooo la polizziiiiiaaa -->
    <!-- Render the blog post as Prose & Vue components -->
    <ContentRenderer v-if="post" :value="post" />
    <!-- <div class="text-xl" v-for="post in allPosts">
      <nuxt-link class="btn btn-warning" :to="`${post.path}`">
        Go to {{ post.title }}
      </nuxt-link>
    </div> -->
</template>