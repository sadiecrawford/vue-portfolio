<template>
  <div class="vertical-box">
    <slot></slot>
  </div>
</template>

<style scoped>
.vertical-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
</style>
