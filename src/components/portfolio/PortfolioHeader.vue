<script setup lang="ts">
import '@components/VerticalBox.vue'
</script>

<template>
  <div class="center-wrapper" style="margin-bottom: 1rem">
    <VerticalBox>
      <h1 class="center-wrapper" style="margin-bottom: 1rem">{{ title }}</h1>
      <p style="text-align: center">
        <slot></slot>
      </p>
      <hr />
    </VerticalBox>
  </div>
</template>

<style scoped></style>

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
