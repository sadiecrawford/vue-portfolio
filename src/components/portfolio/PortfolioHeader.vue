<script setup lang="ts">
import '@common/VerticalFlexBox.vue'
</script>

<template>
  <div class="center-wrapper">
    <VerticalFlexBox>
      <h1 class="center-wrapper">{{ title }}</h1>
      <p style="text-align: center">
        <slot></slot>
      </p>
      <hr />
    </VerticalFlexBox>
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
.center-wrapper {
  margin-bottom: 1rem;
}
</style>
