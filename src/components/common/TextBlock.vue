<script setup lang="ts">
import '@components/VerticalBox.vue'
</script>

<template>
  <div class="center-wrapper">
    <VerticalBox>
      <h3 class="left-wrapper" style="padding-top: 1rem; padding-inline: 1rem; text-align: left">
        {{ title }}
      </h3>
      <p>
        <slot></slot>
      </p>
    </VerticalBox>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TextBlock',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {}
}
</script>

<style scoped>
p {
  padding-inline: 0rem;
  padding-block: 1rem;
  min-width: 320px;
  max-width: 540px;
  text-align: left;
}
</style>
