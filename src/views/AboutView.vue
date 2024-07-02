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
          With what started as a Python-coding competition in an AP Physics class, Sadie recognized
          her enjoyment in coding. Sparked by this interest, she pursued a degree in Computer
          Science at the University of Florida. Since then, she has been collaborating with a
          diverse group of people, from machinists and knife makers to a startup focused on
          harnessing the power of fireflies' bioluminescent chemicals. Meanwhile, continuing her
          education at the Digital Worlds Institute, she began diving into the beginnings of the
          virtual reality metaverse. Upon completing her Masters, she has continued to construct
          these awe-inspiring worlds with Chromatic Games.
        </p>
        <br />
        <strong>Interests.</strong>
        <p>Knitting, bird watching, books, raising farm animals</p>
        <strong>Favorite Games!</strong>
        <p>
          Outer Wilds, Bioshock, Moss, Labyrinthine, Phasmophobia, World of Warcraft, Inscryption
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
}
</style>
