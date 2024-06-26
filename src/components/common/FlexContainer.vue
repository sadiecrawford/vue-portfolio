<template>
  <div class="flex-container center-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FlexContainer'
}
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-block: 1rem;
}
</style>
