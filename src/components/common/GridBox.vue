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
  gap: 1rem;
  list-style: none;
  display: grid;
  overflow: hidden;
  margin-inline: 1.8rem;
  padding: 0;
}

@media (max-width: 720px) {
  .grid-panel {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
