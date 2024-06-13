<template>
  <div class="container">
    <div class="scaling-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scale: 1
    }
  },
  computed: {
    containerStyle() {
      return {
        transform: `scale(${this.scale})`,
        transition: 'transform 0.2s ease-in-out'
      }
    }
  },
  methods: {
    scaleItems() {
      const baseScale = 1280.0
      if (window.innerWidth <= baseScale) {
        // Window is smaller than our base scale, so we're going to scale down contents
        this.scale = window.innerWidth / baseScale
      } else {
        this.scale = 1.0
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.scaleItems)
    this.scaleItems() // Initial call to scale items based on current window size
  },
  unmounted() {
    window.removeEventListener('resize', this.scaleItems)
  }
}
</script>

<style scoped>
.scale-box {
  display: flex;
  justify-content: center;
  width: 100%;
}

.scaling-wrapper {
  flex: 1;
}
</style>
