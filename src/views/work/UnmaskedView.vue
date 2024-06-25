<script setup lang="ts">
import VerticalBox from '@components/VerticalBox.vue'
import PortfolioHeader from '@portfolio/PortfolioHeader.vue'
import FlexBox from '@common/FlexBox.vue'
import { getImageUrl } from '@utils/imageUtils'
</script>

<template>
  <main class="portfolio">
    <link rel="stylesheet" href="../../src/assets/styles/portfolio.css" />
    <VerticalBox>
      <!-- Header -->
      <PortfolioHeader title="Unmasked." style="width: 100%">
        <strong>Programmer & Game Designer</strong> | VR Puzzle Game | Unreal 5 Early Access
        <br />
        3 developers | 4 months | April 2022
        <br />
        Awarded <strong>Best MiDAS Capstone</strong>
      </PortfolioHeader>

      <!-- Description -->
      <FlexBox>
        <VerticalBox>
          <h3>Description.</h3>
          <p>
            For my Master's capstone project, my team and I developed <strong>"Unmasked,"</strong> a
            VR puzzle game with a heavy usage of non-Euclidean spaces. Transitioning from Unity to
            Unreal, we jumped headfirst into this project to tell the story of human greed from an
            alien's perspective. The mask, an AI-powered guide, navigates and provides hints for the
            mind-bending puzzles, which defy time and 3D space.
          </p>
        </VerticalBox>

        <video autoplay controls muted>
          <source
            :src="getImageUrl('Games', `/unmasked/UnmaskedTrailer.mp4`)"
            alt="A spooky, preview trailer for the game 'Unmasked'"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </FlexBox>

      <hr class="portfolio-hr" />

      <!-- Contributions -->
      <FlexBox>
        <VerticalBox>
          <h3>Contributions.</h3>
          <ul class="colored-bullets">
            <li>
              Designed and implemented all zone-specific puzzles to align with the story's overall
              theme.
            </li>
            <li>
              Developed the mask's artificial intelligence with behavior trees and blueprints.
            </li>
            <li>
              Authored the voice lines for the mask character with a focus on player guidance and
              story narrative.
            </li>
            <li>
              Created various Niagara VFX, including the portal glows, object disintegration, the
              mask's awakening sequence, the watering can's pour, and the seed spread visual.
            </li>
          </ul>
        </VerticalBox>

        <img
          :src="getImageUrl('Games', `/unmasked/UnmaskedAward1.png`)"
          alt="Sadie Crawford, Charlotte Atwill, Seung Hyuk Jang (professor), and Daniel Briz (left to right) holding awards for 'Best MiDAS Capstone'"
        />
      </FlexBox>

      <hr class="portfolio-hr" />

      <!-- Gameplay -->
      <FlexBox style="justify-content: space-around; padding-inline: 2rem; align-content: center">
        <VerticalBox>
          <VerticalBox>
            <h3>Seasons Puzzle.</h3>
            <video controls muted>
              <source
                :src="getImageUrl('Games', `/unmasked/UnmaskedSeasonsPuzzle.mp4`)"
                alt="A video showing the 'Seasons' puzzle, where the player goes into the past of winter to plant and water seeds. Upon returning to the future of summer, the seeds have grown into corn."
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </VerticalBox>
          <VerticalBox>
            <h3>Rope Physics.</h3>
            <video controls muted>
              <source
                :src="getImageUrl('Games', `/unmasked/UnmaskedRopePhysics.mp4`)"
                alt="A demonstration of rope physics in the VR game 'Unmasked.'"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </VerticalBox>
        </VerticalBox>

        <img
          style="align-self: center; width: 500px; margin-top: 2.5rem"
          :src="getImageUrl('Games', `/unmasked/UnmaskedConvergence.png`)"
          alt="Seung Hyuk Jang (professor), Sadie Crawford, and Charlotte Atwill (left to right) standing next to an 'Unmasked' banner at University of Florida's 2022 Convergence event"
        />
      </FlexBox>
    </VerticalBox>
  </main>
</template>

<style scoped>
.flex-grid > div {
  width: 580px;
}
</style>
