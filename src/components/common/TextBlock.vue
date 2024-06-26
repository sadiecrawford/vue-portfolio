<template>
  <div class="center-wrapper">
    <VerticalFlexBox>
      <h3 class="left-wrapper" style="padding-top: 1rem; padding-inline: 1rem; text-align: left">
        {{ title }}
      </h3>
      <p>
        <slot></slot>
      </p>
    </VerticalFlexBox>
  </div>
</template>

<script setup lang="ts">
import '@common/VerticalFlexBox.vue'

defineProps({
  title: {
    type: String,
    required: true
  }
})
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
