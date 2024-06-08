<script setup lang="ts">
import VerticalBox from '../components/VerticalBox.vue'
import HorizontalBox from '../components/HorizontalBox.vue'
import SimpleLink from '../components/SimpleLink.vue'
import PortfolioSection from '../components/portfolio_elements/PortfolioSection.vue'
import PortfolioPreview from '../components/portfolio_elements/PortfolioPreview.vue'

import img_UnmaskedPreview from '@/assets/portfolio/games/unmasked/UnmaskedPreview.png'
import img_HushPreview from '@/assets/portfolio/games/hush/HushPreview.png'
import img_MouthPreview from '@/assets/portfolio/games/giantwalkthroughmouth/MouthPreview.png'
import img_DentaLabPreview from '@/assets/portfolio/games/dentalab/DentaLabPreview.png'
</script>

<template>
  <main>
    <VerticalBox>
      <h1 class="center-wrapper">Work.</h1>
      <HorizontalBox class="center-wrapper">
        <SimpleLink href="#work">Games</SimpleLink>
        <SimpleLink href="#vr">VR Research</SimpleLink>
        <SimpleLink href="#software">Software</SimpleLink>
      </HorizontalBox>

      <h2 class="left-wrapper" id="games">Games.</h2>
      <PortfolioSection>
        <PortfolioPreview :imageSrc="img_UnmaskedPreview" />
        <PortfolioPreview :imageSrc="img_HushPreview" />
      </PortfolioSection>

      <h2 class="left-wrapper" id="vr">VR Research.</h2>
      <PortfolioSection>
        <PortfolioPreview :imageSrc="img_MouthPreview" />
        <PortfolioPreview :imageSrc="img_DentaLabPreview" />
      </PortfolioSection>
      <h2 class="left-wrapper" id="software">Software.</h2>
    </VerticalBox>
  </main>
</template>
