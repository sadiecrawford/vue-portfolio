<template>
  <div class="flex-grid center-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FlexGrid'
}
</script>

<style scoped>
.flex-grid {
  flex-wrap: wrap;
  display: flex;
  align-items: flex-start;
  margin-block: 1rem;
}
</style>
