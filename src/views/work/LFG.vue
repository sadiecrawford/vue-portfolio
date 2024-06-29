<template>
  <main class="portfolio">
    <!-- Header -->
    <PortfolioHeader title="Looking for Guild.">
      <strong>Software Developer</strong> | World of Warcraft Recruitment Tool | Python
      <br />
      1 developer | 4 months | February 2021
    </PortfolioHeader>

    <!-- Description -->
    <FlexContainer>
      <VerticalFlexBox>
        <h3>Description.</h3>
        <p>
          <strong>"Looking for Guild"</strong> is a web scraping tool designed to help World of
          Warcraft recruiters save time. This tool utilizes natural language processing to analyze
          forum post titles and identify posts from players looking to join a guild. Written in
          Python and running on a Raspberry Pi 4, it efficiently gathers relevant information and
          uploads it to Google Sheets.
        </p>
      </VerticalFlexBox>

      <img
        :src="getMediaUrl('Software', `/lfg/LFG1.jpg`)"
        alt="A spreadsheet representation of World of Warcraft forums with the columns 'Character', 'Class', 'ilvl', 'Title', 'Date', and various related World of Warcraft links."
      />
    </FlexContainer>
  </main>
</template>

<script setup lang="ts">
import VerticalFlexBox from '@common/VerticalFlexBox.vue'
import FlexContainer from '@common/FlexContainer.vue'
import { getMediaUrl } from '@utils/mediaUtils'
import PortfolioHeader from '@portfolio/PortfolioHeader.vue'
</script>

<style scoped>
.flex-container > div {
  width: 580px;
}
</style>
