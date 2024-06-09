<script setup lang="ts">
import { Category } from '@enums/category.enum'
import { getPreviewImageUrl } from '@utils/imageUtils'
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
  methods: {}
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
