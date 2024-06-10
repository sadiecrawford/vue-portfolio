<template>
  <div class="horizontal-box">
    <slot></slot>
  </div>
</template>

<style scoped>
.horizontal-box {
  flex-direction: row;
  align-items: flex-start;
  display: flex;
  width: 100%;
}
</style>
