import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  // Define all collections based on file structure
  collections: {

    // Generic collection for all markdown files
    content: defineCollection({
      type: "page",
      source: "**/*.md",
    }),

    // Define blog collection for blog folder
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        date: z.string()
      })
    }),

    // Define projects collection for projects folder
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: z.object({
        date: z.string()
      })
    }),

    
  },
});
