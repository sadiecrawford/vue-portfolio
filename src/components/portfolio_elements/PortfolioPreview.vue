<script setup lang="ts"></script>

<template>
  <li>
    <img :src="getPreviewImageUrl(imageSrc)" alt="Description of the image" class="static-image" />
  </li>
</template>

<script lang="ts">
export default {
  name: 'PortfolioPreview',
  props: {
    imageSrc: {
      type: String,
      required: true
    }
  },
  methods: {
    getPreviewImageUrl(imagePath: string): string {
      return new URL('/src/assets/portfolio/' + imagePath, import.meta.url).href
    }
  }
}
</script>

<style scoped>
.static-image {
  max-width: 100%;
  height: auto; /* Ensures the image scales while maintaining its aspect ratio */
  border-radius: 12px;
}
</style>
