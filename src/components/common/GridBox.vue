<template>
  <ul class="grid-panel">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'GridPanel'
}
</script>

<style scoped>
.grid-panel {
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem; /* Adjust the gap between items as needed */
  list-style: none; /* Removes the default list styling */
  display: grid;
  overflow: hidden;
  padding: 0; /* Removes the default padding */
}

/* Adjust to 1 column for small screens */
@media (max-width: 720px) {
  .grid-panel {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
