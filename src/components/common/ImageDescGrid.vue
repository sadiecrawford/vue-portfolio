<template>
  <GridBox>
    <VerticalFlexBox class="gap">
      <div v-for="(data, index) in firstImages" :key="index">
        <VerticalFlexBox>
          <img :src="getMediaUrl(`/portfolio/art/${data[0]}`)" :alt="data[1]" />
          <p>{{ data[2] }}</p>
        </VerticalFlexBox>
      </div>
    </VerticalFlexBox>

    <VerticalFlexBox class="gap">
      <div v-for="(data, index) in secondImages" :key="index + secondImages.length">
        <VerticalFlexBox>
          <img :src="getMediaUrl(`/portfolio/art/${data[0]}`)" :alt="data[1]" />
          <p>{{ data[2] }}</p>
        </VerticalFlexBox>
      </div>
    </VerticalFlexBox>
  </GridBox>
</template>

<script setup lang="ts">
import GridBox from '@common/GridBox.vue'
import VerticalFlexBox from '@common/VerticalFlexBox.vue'
import { computed } from 'vue'
import { getMediaUrl } from '@utils/mediaUtils'

const props = defineProps<{
  // src url, alt, description
  imageData: [string, string, string][]
  splitIndex: -1 | number
}>()

const calcSplitIndex =
  props.splitIndex === -1 ? Math.ceil(props.imageData.length / 2) + 1 : props.splitIndex

const firstImages = computed<[string, string, string][]>(() =>
  props.imageData.slice(0, calcSplitIndex)
)
const secondImages = computed<[string, string, string][]>(() =>
  props.imageData.slice(calcSplitIndex + 1)
)
</script>

<style scoped>
.gap {
  padding: 0.6rem;
}
p {
  margin-block: 0.8rem 2.8rem;
  font-size: 14px;
}
</style>
