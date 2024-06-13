<template>
  <div class="vertical-box">
    <slot></slot>
  </div>
</template>

<style scoped>
.vertical-box {
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 100%;
}
</style>
