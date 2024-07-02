<template>
  <main>
    <ImageDescGrid :imageData="imageData" />
  </main>
</template>

<script setup lang="ts">
import ImageDescGrid from '@common/ImageDescGrid.vue'

// Full URLs are calculated
const imageData = [
  [
    'ArizonaTelephoneBooth.jpg',
    'A 3D model of a telephone booth with cacti and an Arizona logo',
    'Arizona Telephone Booth [Maya & Substance Painter]'
  ],
  [
    'MoonlitDruid.jpg',
    'A 3D model of a human druid wearing a tunic-like dress and leather belt, wielding a wooden staff adorned with a lantern of fireflies',
    'Moonlit Druid [Maya & Substance Painter]'
  ],
  [
    'TheEyesOfAShark.png',
    'A digital drawing of a shark filled with drawings of other aquatic life',
    'The Eyes of a Shark [Photoshop]'
  ],
  [
    'SelfPortrait.png',
    'Two point-of-views of a 3D model of a female human head',
    'Self Portrait [Maya, Substance, & XGen]'
  ],
  [
    'Porcupine.jpg',
    'An acrylic painting of a vivid, rainbow porcupine',
    'A re-interpretation of the "Prehensile-tailed porcupine" by Slaveika Aladjova using bright colors [acrylic]'
  ],
  [
    'ThroughTheForest.png',
    "A watercolor painting of a jumping deer with trees painted within the deer's shadows",
    'Through the Forest [watercolor]'
  ],
  [
    'FloatingBorkle.png',
    'A digital drawing of a cat floating in space, surrounded by glowing spheres and planets',
    'Floating Borkle [Adobe Fresco]'
  ],
  [
    'HumanEye.png',
    'A digital drawing of a single human eye',
    'A human eye. Drawn in digital art course taught by Austin and Jaysen Batchelor [Photoshop]'
  ]
] as [string, string, string][]
</script>
