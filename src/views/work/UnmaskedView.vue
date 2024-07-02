<script setup lang="ts">
import VerticalFlexBox from '@common/VerticalFlexBox.vue'
import PortfolioHeader from '@portfolio/PortfolioHeader.vue'
import FlexContainer from '@common/FlexContainer.vue'
import { getMediaUrl } from '@utils/mediaUtils'
</script>

<template>
  <main class="portfolio">
    <!-- Header -->
    <PortfolioHeader title="Unmasked." style="width: 100%">
      <strong>Programmer & Game Designer</strong> | VR Puzzle Game | Unreal 5 Early Access
      <br />
      3 developers | 4 months | April 2022
      <br />
      Awarded <strong>Best MiDAS Capstone</strong>
    </PortfolioHeader>

    <!-- Description -->
    <FlexContainer>
      <VerticalFlexBox>
        <h3>Description.</h3>
        <p>
          For my Master's capstone project, my team and I developed <strong>"Unmasked,"</strong> a
          VR puzzle game with a heavy usage of non-Euclidean spaces. Transitioning from Unity to
          Unreal, we jumped headfirst into this project to tell the story of human greed from an
          alien's perspective. The mask, an AI-powered guide, navigates and provides hints for the
          mind-bending puzzles, which defy time and 3D space.
        </p>
      </VerticalFlexBox>

      <video autoplay controls muted>
        <source
          :src="getMediaUrl('/unmasked/UnmaskedTrailer.mp4', 'Games')"
          alt="A spooky, preview trailer for the game 'Unmasked'"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </FlexContainer>

    <hr />

    <!-- Contributions -->
    <FlexContainer>
      <VerticalFlexBox>
        <h3>Contributions.</h3>
        <ul class="colored-bullets">
          <li>
            Designed and implemented all zone-specific puzzles to align with the story's overall
            theme.
          </li>
          <li>Developed the mask's artificial intelligence with behavior trees and blueprints.</li>
          <li>
            Authored the voice lines for the mask character with a focus on player guidance and
            story narrative.
          </li>
          <li>
            Created various Niagara VFX, including the portal glows, object disintegration, the
            mask's awakening sequence, the watering can's pour, and the seed spread visual.
          </li>
        </ul>
      </VerticalFlexBox>

      <img
        :src="getMediaUrl('/unmasked/UnmaskedAward1.png', 'Games')"
        alt="Sadie Crawford, Charlotte Atwill, Seung Hyuk Jang (professor), and Daniel Briz (left to right) holding awards for 'Best MiDAS Capstone'"
      />
    </FlexContainer>

    <hr />

    <!-- Gameplay -->
    <FlexContainer
      style="justify-content: space-around; padding-inline: 2rem; align-content: center"
    >
      <VerticalFlexBox>
        <VerticalFlexBox>
          <h3>Seasons Puzzle.</h3>
          <video controls muted>
            <source
              :src="getMediaUrl('/unmasked/UnmaskedSeasonsPuzzle.mp4', 'Games')"
              alt="A video showing the 'Seasons' puzzle, where the player goes into the past of winter to plant and water seeds. Upon returning to the future of summer, the seeds have grown into corn."
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </VerticalFlexBox>
        <VerticalFlexBox>
          <h3>Rope Physics.</h3>
          <video controls muted>
            <source
              :src="getMediaUrl('/unmasked/UnmaskedRopePhysics.mp4', 'Games')"
              alt="A demonstration of rope physics in the VR game 'Unmasked.'"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </VerticalFlexBox>
      </VerticalFlexBox>

      <img
        style="align-self: center; width: 500px; margin-top: 2.5rem"
        :src="getMediaUrl('/unmasked/UnmaskedConvergence.png', 'Games')"
        alt="Seung Hyuk Jang (professor), Sadie Crawford, and Charlotte Atwill (left to right) standing next to an 'Unmasked' banner at University of Florida's 2022 Convergence event"
      />
    </FlexContainer>
  </main>
</template>

<style scoped>
.flex-container > div {
  width: 580px;
}
</style>
