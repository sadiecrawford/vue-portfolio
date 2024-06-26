<template>
  <div class="vertical-box">
    <slot></slot>
  </div>
</template>

<style scoped>
.vertical-box {
  flex-direction: column;
  flex-wrap: wrap;
  display: flex;
  align-items: flex-start;
  width: 100%;
}
</style>
