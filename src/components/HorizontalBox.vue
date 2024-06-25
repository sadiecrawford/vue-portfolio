<template>
  <div class="horizontal-box">
    <slot></slot>
  </div>
</template>

<style scoped>
.horizontal-box {
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  align-items: flex-start;
  width: 100%;
}
</style>
