<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from '@components/NavigationBar.vue'
import FooterBar from '@components/FooterBar.vue'
</script>

<template>
  <header style="z-index: 1">
    <NavigationBar />
  </header>
  <body>
    <RouterView />
    <footer>
      <FooterBar />
    </footer>
  </body>
</template>
