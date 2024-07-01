<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from '@components/NavigationBar.vue'
</script>

<template>
  <header style="z-index: 1">
    <NavigationBar />
  </header>
  <RouterView />
</template>
