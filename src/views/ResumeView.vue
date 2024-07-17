<template>
  <main>
    <VerticalFlexBox class="center-wrapper">
      <div class="header-container">
        <h1>Resume.</h1>
        <a class="download-position" :href="getMediaUrl('/Sadie Crawford Resume.pdf')" download
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
  align-content: center;
  position: relative;
  display: flex;
  justify-content: center;
  padding-inline: 0.5rem;
  width: 100%;
}

.download-position {
  position: absolute;
  right: 0;
  bottom: 0;
}

a {
  align-content: center;
  text-decoration: none;
  margin-bottom: 0.5rem;
  border-radius: var(--global-border-radius);
  padding: 12px;
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
