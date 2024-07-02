<template>
  <main>
    <VerticalFlexBox class="center-wrapper">
      <div class="header-container">
        <h1>Resume.</h1>
        <a class="right-wrapper" :href="getMediaUrl('/Sadie Crawford Resume.pdf')" download
          >Download</a
        >
      </div>

      <embed
        :src="getMediaUrl('/Sadie Crawford Resume.pdf')"
        type="application/pdf"
        width="100%"
        alt="The resume for Sadie Crawford"
      />
    </VerticalFlexBox>
  </main>
</template>

<script setup lang="ts">
import { getMediaUrl } from '@utils/mediaUtils'
import VerticalFlexBox from '@common/VerticalFlexBox.vue'
</script>

<style scoped>
.header-container {
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding-inline: 0.5rem;
  width: 100%;
}

h1 {
  margin: 0rem;
}

a {
  align-content: center;
  text-decoration: none;
  margin-bottom: 0.5rem;
  justify-content: center;
  border-radius: var(--global-border-radius);
  padding: 12px;
  width: fit-content;
  background-color: var(--global-text-color-hover);
  cursor: pointer;
}

a:hover {
  background-color: var(--global-text-color);
}

embed {
  border-radius: var(--global-border-radius);
  height: 70vh;
}
</style>
