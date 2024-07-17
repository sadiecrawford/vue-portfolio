<template>
  <GridBox>
    <div class="child" v-for="(data, index) in imageData" :key="index">
      <img :src="data[0]" :alt="data[1]" />
    </div>
  </GridBox>
</template>

<script setup lang="ts">
import GridBox from '@common/GridBox.vue'

defineProps<{
  imageData: [string, string][]
}>()
</script>
