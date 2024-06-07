<template>
  <div>
    <img :src="imageSrc" alt="Description of the image" class="static-image" />
  </div>
</template>

<script>
export default {
  name: 'PortfolioPreview',
  props: {
    imageSrc: {
      type: String,
      required: true
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
