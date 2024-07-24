<script setup lang="ts">
import VerticalFlexBox from '@common/VerticalFlexBox.vue'
import FlexContainer from '@common/FlexContainer.vue'
import SimpleLink from '@components/SimpleLink.vue'
import GridBox from '@common/GridBox.vue'
import PortfolioPreview from '@portfolio/PortfolioPreview.vue'
</script>

<template>
  <main>
    <VerticalFlexBox>
      <h1 class="center-wrapper">Work.</h1>
      <FlexContainer class="center-wrapper">
        <div v-for="category in categories" :key="category.name" class="category">
          <SimpleLink :href="`#${category.name}`">{{ category.name }}</SimpleLink>
        </div>
      </FlexContainer>

      <div v-for="category in categories" :key="category.name" class="category">
        <h2 :id="category.name" class="left-wrapper" style="padding-left: 10px">
          {{ category.name.toUpperCase() }}
        </h2>
        <GridBox>
          <div v-for="item in category.items" :key="item.target" class="item">
            <PortfolioPreview
              :category="category.name"
              :imageSrc="item.previewImg"
              :imgDesc="item.previewImgDesc"
              :target="item.target"
            />
          </div>
        </GridBox>
      </div>
    </VerticalFlexBox>
  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {
      // See category.enum.ts
      categories: [
        {
          name: 'Games',
          items: [
            {
              target: 'dda',
              previewImg: 'DDAPreview.png',
              previewImgDesc: ''
            },
            {
              target: 'ddgr',
              previewImg: 'DDGRPreview.png',
              previewImgDesc: ''
            },
            {
              target: 'unmasked',
              previewImg: 'UnmaskedPreview.png',
              previewImgDesc:
                'A screenshot of the game "Unmasked" that shows a stone house in the middle of a valley with a windmill in the distance'
            },
            {
              target: 'hush',
              previewImg: 'HushPreview.png',
              previewImgDesc:
                'A screenshot of the game "Hush" that shows the second floor of a dark library, looking towards a table with a candlestick'
            }
          ]
        },
        {
          name: 'VR Research',
          items: [
            {
              target: 'giantwalkthroughmouth',
              previewImg: 'MouthPreview.png',
              previewImgDesc:
                'A screenshot of the educational VR experience "Giant Walkthrough Mouth", which displays its large-scale model of a human mouth'
            },
            {
              target: 'dentalab',
              previewImg: 'DentaLabPreview.png',
              previewImgDesc:
                'A screenshot of the educational VR experience "DentaLab", showing an image of a virtual dental-themed classroom. In the bottom-right corner of the image, there is a logo for VR IEEE 2022.'
            }
          ]
        },
        {
          name: 'Software',
          items: [
            {
              target: 'ustaa',
              previewImg: 'USTAAPreview.png',
              previewImgDesc:
                'A screenshot of the website "USTAA" displaying various statistics and graphs'
            },
            {
              target: 'lfg',
              previewImg: 'LFGPreview.png',
              previewImgDesc:
                'A screenshot of a spreadsheet displaying game character information with a logo that says "LFG"'
            }
          ]
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>
.flex-container {
  flex-direction: row;
}
</style>
