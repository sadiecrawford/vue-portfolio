<script setup lang="ts">
import { Category } from '@enums/category.enum'
import { getImageUrl } from '@utils/imageUtils'
</script>

<template>
  <li style="margin: 8px">
    <a class="hidden" :href="target">
      <img
        :src="getImageUrl(category, `/${target}/${imageSrc}`)"
        :alt="imageDesc"
        class="static-image"
      />
    </a>
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
    },
    target: {
      type: String,
      required: true
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
  outline-color: var(--global-outline-color-hover);
  border-radius: 12px;
  padding: 4px;
  height: auto; /* Ensures the image scales while maintaining its aspect ratio */
  max-width: 100%;
  transition: outline 0.1s ease-in-out;
}

.static-image:hover {
  outline-style: solid;
  outline-width: 6px;
  outline-color: var(--global-outline-color-hover);
  transition: outline 0.1s ease-in-out;
  cursor: pointer;
}
</style>
