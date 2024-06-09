<script setup lang="ts">
import { Category } from '@enums/category.enum'
</script>

<template>
  <li>
    <img :src="getPreviewImageUrl(category, imageSrc)" :alt="imageDesc" class="static-image" />
  </li>
</template>

<script lang="ts">
export default {
  name: 'PortfolioPreview',
  props: {
    category: {
      type: String,
      required: true,
      default: Category.Games,
      validator: (value: string) => {
        return Object.values(Category).includes(value as Category)
      }
    },
    imageSrc: {
      type: String,
      required: true
    },
    imageDesc: {
      type: String,
      required: false
    }
  },
  methods: {
    getPreviewImageUrl(categoryStr: String, imagePath: string): string {
      const category = categoryStr as Category
      let root = import.meta.env.VITE_PORTFOLIO_URL
      switch (category) {
        case Category.Games:
          root = import.meta.env.VITE_GAMES_URL
          break
        case Category.Research:
          root = import.meta.env.VITE_RESEARCH_URL
          break
        case Category.Software:
          root = import.meta.env.VITE_SOFTWARE_URL
          break
        default:
          // default is already set above
          break
      }

      return `${root}${imagePath}`
    }
  }
}
</script>

<style scoped>
li {
  animation: var(--global-animation-fade-up);
}

.static-image {
  max-width: 100%;
  height: auto; /* Ensures the image scales while maintaining its aspect ratio */
  border-radius: 12px;
}
</style>
