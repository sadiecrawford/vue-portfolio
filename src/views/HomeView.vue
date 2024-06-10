<script setup lang="ts">
import VerticalBox from '@components/VerticalBox.vue'
import HorizontalBox from '@components/HorizontalBox.vue'
import SimpleLink from '@components/SimpleLink.vue'
import PortfolioSection from '@components/portfolio_elements/PortfolioSection.vue'
import PortfolioPreview from '@components/portfolio_elements/PortfolioPreview.vue'
</script>

<template>
  <main>
    <VerticalBox>
      <h1 class="center-wrapper">Work.</h1>
      <HorizontalBox class="center-wrapper">
        <div v-for="category in categories" :key="category.name" class="category">
          <SimpleLink :href="`#${category.name}`">{{ category.name }}</SimpleLink>
        </div>
      </HorizontalBox>

      <div v-for="category in categories" :key="category.name" class="category">
        <h2
          :id="category.name"
          class="left-wrapper"
          style="scroll-margin-top: 96px; padding-left: 10px"
        >
          {{ category.name.toUpperCase() }}
        </h2>
        <PortfolioSection>
          <div v-for="item in category.items" :key="item.title" class="item">
            <PortfolioPreview
              :category="category.name"
              :imageSrc="item.previewImg"
              :imgDesc="item.previewImgDesc"
            />
          </div>
        </PortfolioSection>
      </div>
    </VerticalBox>
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
              title: 'Unmasked',
              previewImg: '/unmasked/UnmaskedPreview.png',
              previewImgDesc:
                'A screenshot of the game "Unmasked" that shows a stone house in the middle of a valley with a windmill in the distance'
            },
            {
              title: 'Hush',
              previewImg: '/hush/HushPreview.png',
              previewImgDesc:
                'A screenshot of the game "Hush" that shows the second floor of a dark library, looking towards a table with a candlestick'
            }
          ]
        },
        {
          name: 'VR Research',
          items: [
            {
              title: 'Giant Walkthrough Mouth',
              previewImg: '/giantwalkthroughmouth/MouthPreview.png',
              previewImgDesc:
                'A screenshot of the educational VR experience "Giant Walkthrough Mouth", which displays its large-scale model of a human mouth'
            },
            {
              title: 'DentaLab',
              previewImg: '/dentalab/DentaLabPreview.png',
              previewImgDesc:
                'A screenshot of the educational VR experience "DentaLab", showing an image of a virtual dental-themed classroom. In the bottom-right corner of the image, there is a logo for VR IEEE 2022.'
            }
          ]
        },
        {
          name: 'Software',
          items: [
            {
              title: 'USTAA',
              previewImg: '/ustaa/USTAAPreview.jpg',
              previewImgDesc:
                'A screenshot of the website "USTAA" displaying various statistics and graphs'
            },
            {
              title: 'LFG',
              previewImg: '/lfg/LFGPreview.jpg',
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
