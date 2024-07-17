<template>
  <div ref="comparisonContainer" class="container">
    <img class="left-image" :src="firstImgUrl" />
    <img :src="secondImgUrl" />

    <input ref="sliderInput" class="slider" type="range" min="0" max="100" value="0" />
    <div class="slider-line animate-before" aria-hidden="true"></div>
    <div class="slider-button" aria-hidden="true">
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.3361 14.817L18.7411 12.598C18.906 12.442 18.9994 12.225 18.9994 11.998C18.9994 11.771 18.906 11.554 18.7411 11.398L16.3361 9.179C16.1195 8.98794 15.8077 8.94955 15.5512 9.08234C15.2947 9.21513 15.1461 9.49183 15.1771 9.779V14.221C15.148 14.5074 15.2973 14.7825 15.5534 14.9141C15.8094 15.0458 16.12 15.0073 16.3361 14.817V14.817Z"
          stroke="var(--global-color-neutral-100)"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.81312 9.77503L8.06744 9.69465C8.06457 9.72135 8.06312 9.74818 8.06312 9.77503H8.81312ZM8.43897 9.07837L8.78377 8.41233L8.43897 9.07837ZM7.65412 9.17503L7.15802 8.61256C7.15345 8.61658 7.14894 8.62066 7.14447 8.6248L7.65412 9.17503ZM5.25412 11.398L4.74439 10.8477L4.73485 10.8569L5.25412 11.398ZM5.25412 12.59L4.73477 13.1313L4.74447 13.1403L5.25412 12.59ZM7.65412 14.813L7.14447 15.3633C7.14894 15.3674 7.15345 15.3715 7.15802 15.3755L7.65412 14.813ZM8.43897 14.9097L8.09417 14.2437L8.09417 14.2437L8.43897 14.9097ZM8.81312 14.213H8.06312C8.06312 14.2399 8.06457 14.2667 8.06744 14.2934L8.81312 14.213ZM8.81312 11.248C8.39891 11.248 8.06312 11.5838 8.06312 11.998C8.06312 12.4122 8.39891 12.748 8.81312 12.748V11.248ZM15.1771 12.748C15.5913 12.748 15.9271 12.4122 15.9271 11.998C15.9271 11.5838 15.5913 11.248 15.1771 11.248V12.748ZM9.56312 11.998V9.77503H8.06312V11.998H9.56312ZM9.5588 9.85541C9.62293 9.26056 9.3151 8.68739 8.78377 8.41233L8.09417 9.74441C8.07585 9.73493 8.06523 9.71516 8.06744 9.69465L9.5588 9.85541ZM8.78377 8.41233C8.25244 8.13727 7.60673 8.21679 7.15802 8.61256L8.15023 9.73751C8.13476 9.75116 8.11249 9.7539 8.09417 9.74441L8.78377 8.41233ZM7.14447 8.6248L4.74447 10.8478L5.76378 11.9483L8.16378 9.72526L7.14447 8.6248ZM4.73485 10.8569C4.42512 11.1541 4.25002 11.5648 4.25002 11.994H5.75002C5.75002 11.9733 5.75846 11.9535 5.7734 11.9392L4.73485 10.8569ZM4.25002 11.994C4.25002 12.4233 4.42512 12.834 4.73485 13.1312L5.7734 12.0489C5.75846 12.0345 5.75002 12.0147 5.75002 11.994H4.25002ZM4.74447 13.1403L7.14447 15.3633L8.16378 14.2628L5.76378 12.0398L4.74447 13.1403ZM7.15802 15.3755C7.60673 15.7713 8.25244 15.8508 8.78377 15.5757L8.09417 14.2437C8.11249 14.2342 8.13476 14.2369 8.15023 14.2506L7.15802 15.3755ZM8.78377 15.5757C9.3151 15.3007 9.62293 14.7275 9.5588 14.1327L8.06744 14.2934C8.06523 14.2729 8.07585 14.2531 8.09417 14.2437L8.78377 15.5757ZM9.56312 14.213V11.998H8.06312V14.213H9.56312ZM8.81312 12.748H15.1771V11.248H8.81312V12.748Z"
          fill="var(--global-color-neutral-100)"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps({
  firstImgUrl: {
    type: String,
    required: true
  },
  secondImgUrl: {
    type: String,
    required: true
  },
  startPercentage: {
    type: Number,
    default: 3
  }
})

const comparisonContainer = ref<HTMLElement | null>(null)
const sliderInput = ref<HTMLInputElement | null>(null)

onMounted(() => {
  if (sliderInput.value !== null && comparisonContainer.value !== null) {
    comparisonContainer.value!.style.setProperty('--position', `${props.startPercentage}%`)
    sliderInput.value.addEventListener('input', (e: Event) => {
      const target = e.target as HTMLInputElement
      comparisonContainer.value!.style.setProperty('--position', `${target.value}%`)
    })
  } else {
    console.warn('Something went wrong in ComparisonImage! Null ref received!')
  }
})
</script>

<style scoped>
.container {
  --position: 50%;
  position: relative;
  display: grid;
  overflow: hidden;
  border-radius: 1rem;
}

img {
  object-fit: cover;
  object-position: left;
  width: 100%;
  height: 100%;
}

.left-image {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  position: absolute;
  width: var(--position);
  filter: grayscale(50%);
}

.slider {
  inset: 0;
  position: absolute;
  opacity: 0;
  cursor: ew-resize;
}

.slider-line {
  inset: 0;
  transform: translateX(-50%);
  box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: var(--position);
  border-radius: 0;
  width: 0.2rem;
  height: 100%;
  background-color: white;
  pointer-events: none;
}

.slider-button {
  place-items: center;
  transform: translate(-50%, -50%);
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 50%;
  left: var(--position);
  display: grid;
  border-radius: 50%;
  background-color: white;
  pointer-events: none;
}
</style>
