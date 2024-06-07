<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Quicksand:wght@300..700&display=swap"
      rel="stylesheet"
    />
  </head>
  <header>
    <NavigationBar />
  </header>
  <RouterView />
</template>

<style>
header {
  display: flex;
  width: 100%;
  max-width: 1200px;
  z-index: 1000;
  padding: 1rem 0;
  padding-bottom: 64px;
}
</style>
