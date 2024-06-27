<template>
  <a :href :target class="simple-link">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'SimpleLink',
  props: {
    href: {
      type: String,
      required: true
    },
    target: {
      type: String,
      default: '_self'
    }
  }
}
</script>

<style scoped>
/* Scoped styles have keys added to the class names and component to prevent them from leaking into other components */
/* This also helps with codesplitting to reduce document size if component isn't called on a given page */
/* You don't have to inline them, though, you can import them from a stylesheet here and have the same effect as long
/* as you use the scoped attribute */
/* https://vuejs.org/api/sfc-css-features */

.simple-link {
  text-decoration: underline;
  line-height: 1.8rem;
  text-align: center;
}
</style>
