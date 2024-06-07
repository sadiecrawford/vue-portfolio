<template>
  <div class="horizontal-box">
    <slot></slot>
  </div>
</template>

<style scoped>
.horizontal-box {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  background-color: #efefef;
}
</style>
