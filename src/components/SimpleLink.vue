<template>
  <a :href="`#${target}`" class="simple-link">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'SimpleLink',
  props: {
    target: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.simple-link {
  text-decoration: underline;
  color: rgb(0, 0, 0);
  cursor: pointer;
}

.simple-link:hover {
  color: rgb(rgb(0, 162, 255)); /* Change to your desired hover color */
}
</style>
