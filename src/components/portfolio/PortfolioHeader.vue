<script setup lang="ts">
import '@common/VerticalFlexBox.vue'
</script>

<template>
  <div class="center-wrapper">
    <div style="width: fit-content">
      <h1 style="margin-bottom: 0">{{ title }}</h1>
      <p>
        <slot></slot>
      </p>
      <hr />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PortfolioHeader',
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
p,
h1 {
  text-align: center;
}
</style>
