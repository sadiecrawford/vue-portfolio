<script setup lang="ts">
import VerticalBox from '../components/VerticalBox.vue'
import SimpleLink from '../components/SimpleLink.vue'
import PortfolioSection from '../components/portfolio_elements/PortfolioSection.vue'
import PortfolioPreview from '../components/portfolio_elements/PortfolioPreview.vue'
</script>

<template>
  <VerticalBox>
    <h1 class="center-wrapper">Work.</h1>
    <HorizontalBox class="center-wrapper">
      <SimpleLink target="Work">Games</SimpleLink>
      <SimpleLink target="VR Research">VR Research</SimpleLink>
      <SimpleLink target="Software">Software</SimpleLink>
    </HorizontalBox>

    <div v-for="(category, index) in categories" :key="index" class="category">
      <h2 class="left-wrapper">{{ category.name }}.</h2>
      <PortfolioSection>
        <div v-for="(item, itemIndex) in category.items" :key="itemIndex" class="item">
          <PortfolioPreview :imageSrc="item.previewImg" />
        </div>
      </PortfolioSection>
    </div>
  </VerticalBox>
</template>

<script lang="ts">
export default {
  data() {
    return {
      categories: [
        {
          name: 'Games',
          items: [
            {
              title: 'Unmasked',
              previewImg: 'games/unmasked/UnmaskedPreview.png',
              previewImgDesc: ''
            },
            {
              title: 'Hush',
              previewImg: 'games/hush/HushPreview.png',
              previewImgDesc: ''
            }
          ]
        },
        {
          name: 'VR Research',
          items: [
            {
              title: 'Giant Walkthrough Mouth',
              previewImg: 'research/giantwalkthroughmouth/MouthPreview.png',
              previewImgDesc: ''
            },
            {
              title: 'DentaLab',
              previewImg: 'research/dentalab/DentaLabPreview.png',
              previewImgDesc: ''
            }
          ]
        },
        {
          name: 'Software',
          items: [
            {
              title: 'USTAA',
              previewImg: 'software/ustaa/USTAAPreview.jpg',
              previewImgDesc: ''
            },
            {
              title: 'LFG',
              previewImg: 'software/lfg/LFGPreview.jpg',
              previewImgDesc: ''
            }
          ]
        }
      ]
    }
  },
  methods: {}
}
</script>
