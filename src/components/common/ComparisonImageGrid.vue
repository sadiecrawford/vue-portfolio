<template>
  <GridBox>
    <div class="child" v-for="(data, index) in imageData" :key="index">
      <ComparisonImage :id="index" :firstImgUrl="data[0]" :secondImgUrl="data[1]" :alt="data[2]" />
    </div>
  </GridBox>
</template>

<script setup lang="ts">
import GridBox from '@common/GridBox.vue'
import ComparisonImage from './ComparisonImage.vue'

defineProps<{
  // Before Image URL, After Image URL, alt text
  imageData: [string, string, string][]
}>()
</script>
