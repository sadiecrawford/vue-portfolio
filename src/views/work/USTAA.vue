<template>
  <main class="portfolio">
    <!-- Header -->
    <PortfolioHeader title="United States Traffic Accident Analysis.">
      <strong>Database Administrator & Backend Developer</strong> | Web Application | PHP & SQL
      <br />
      3 developers | 5 months | May 2020
    </PortfolioHeader>

    <!-- Description -->
    <FlexContainer>
      <VerticalFlexBox>
        <h3>Description.</h3>
        <p>
          <strong>"USTAA"</strong> is a data analysis website for traffic accidents in the United
          States, utilizing an Oracle Database 12c. The site is written in PHP with embedded SQL,
          enabling fast querying of over 5 million rows of data.
          <br />
          My contributions included developing and managing the accident database, writing SQL
          queries, and integrating those queries into the PHP codebase.
        </p>
      </VerticalFlexBox>

      <img
        :src="getMediaUrl('/ustaa/USTAA1.jpg', 'Software')"
        alt="A landing page for USTAA detailing a number of accident trends numerically and visually"
      />
    </FlexContainer>
    <hr />

    <FlexContainer>
      <h3 class="left-wrapper">More Images.</h3>
      <ImageGrid :imageData="imageData"> </ImageGrid>
    </FlexContainer>
  </main>
</template>

<script setup lang="ts">
import VerticalFlexBox from '@common/VerticalFlexBox.vue'
import PortfolioHeader from '@portfolio/PortfolioHeader.vue'
import FlexContainer from '@common/FlexContainer.vue'
import { getMediaUrl } from '@utils/mediaUtils'
import { computed } from 'vue'
import ImageGrid from '@common/ImageGrid.vue'

// Full URLs are calculated
const partialImageData = [
  [
    'USTAA2.jpg',
    'A landing page for USTAA detailing a number of accident trends numerically and visually'
  ],
  [
    'USTAA3.jpg',
    'A screenshot of the USTAA landing page showing the Top 5 County Accident Rates in the United States'
  ],
  [
    'USTAA4.jpg',
    "A screenshot of the USTAA Custom Report's Trending Traffic Events By Location, specifically showing a graph of traffic events in Miami, Florida, in 2017 and 2018"
  ],
  [
    'USTAA5.jpg',
    "A screenshot of the USTAA Custom Report's Comparisons of Traffic Events between Cities, comparing traffic events in Los Angeles and Atlanta by Accidents per Land Area in 2019"
  ],
  [
    'USTAA6.jpg',
    "A screenshot of the USTAA's FAQ page showing the number of tuples in each database table, totaling to 5,481,902 records"
  ],
  [
    'USTAA7.jpg',
    'A screenshot of the USTAA landing page as a logged in user, showing the Top 5 County Accident Rates in Georgia'
  ],
  [
    'USTAA8.jpg',
    "A screenshot of USTAA's Accident Analysis page for the user's home state of Georgia, including showing the comparison of accidents in the daytime versus the nighttime, where the nighttime accidents are consistently much higher"
  ],
  [
    'USTAA9.jpg',
    "A screenshot of USTAA's Accident Analysis page showing the number of accidents in Georgia that have occurred on Interstates versus other roads, where other roads has a much higher percentage"
  ],
  [
    'USTAA10.jpg',
    "A screenshot of USTAA's Custom Reports page showing the comparison of Traffic Events in Los Angeles versus Atlanta by quantity in 2019"
  ],
  [
    'USTAA11.jpg',
    "A screenshot of USTAA's Custom Reports page comparing weather-related traffic events between Miami and Charlotte in 2018"
  ],
  ['USTAALogin.png', 'The login page for USTAA']
] as [string, string][]

const imageData = computed<[string, string][]>(() => {
  return partialImageData.map(([partialUrl, altDescription]) => [
    getMediaUrl(`/ustaa/${partialUrl}`, 'Software'),
    altDescription
  ])
})
</script>

<style scoped>
.flex-container > div {
  width: 580px;
}
</style>
