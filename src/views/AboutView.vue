<template>
  <main>
    <div class="container">
      <img
        :src="getMediaUrl('/SadiePortrait.png')"
        alt="A picture of Sadie sitting in a chunky wooden chair"
      />

      <VerticalFlexBox style="margin: 1.8rem">
        <h3>About.</h3>
        <p>
          It all started with a Python-coding competition in an AP Physics class, where Sadie first
          discovered her love for coding. This spark led her to the University of Florida, where she
          dove headfirst into a Computer Science degree. But Sadie's journey didn't stop there.
          She's worked alongside an eclectic mix of professionals—machinists, knife makers, and even
          a startup obsessed with harnessing the glow of fireflies.
          <br />
          Her curiosity pulled her into the Digital Worlds Institute, where she explored the early
          realms of the virtual reality metaverse. Now, armed with a Master's degree, she's crafting
          awe-inspiring worlds and experiences with Chromatic Games. Her adoration for game
          development has flourished in the titles <i>Dungeon Defenders: Going Rogue</i>,
          <i>Dungeon Defenders: Awakened</i>, and numerous internal projects.
        </p>
        <br />
        <strong>Interests.</strong>
        <p>Knitting, bird watching, books, raising farm animals</p>
        <strong>Favorite Games!</strong>
        <p>
          Outer Wilds, Bioshock, Moss, Labyrinthine, Phasmophobia, World of Warcraft, Inscryption,
          Baldur's Gate 3
        </p>
      </VerticalFlexBox>
    </div>
  </main>
</template>

<script setup lang="ts">
import VerticalFlexBox from '@/components/common/VerticalFlexBox.vue'
import { getMediaUrl } from '@utils/mediaUtils'
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

img {
  outline-style: solid;
  outline-width: 8px;
  outline-color: var(--global-outline-color-hover);
  margin: 8px;
  width: 60%;
}

h3 {
  margin-block: 1.8rem 1rem;
}

p {
  margin-bottom: 1.8rem;
  line-height: 1.8rem;
}

strong {
  margin-inline: 0rem;
  padding-inline: 0rem;
}
</style>
