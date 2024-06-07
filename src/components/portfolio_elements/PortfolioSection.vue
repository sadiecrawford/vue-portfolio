<template>
  <div class="grid-panel">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GridPanel'
}
</script>

<style scoped>
.grid-panel {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 equal columns */
  gap: 1rem; /* Adjust the gap between items as needed */
}
</style>
