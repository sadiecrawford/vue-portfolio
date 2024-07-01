<template>
  <main class="portfolio">
    <!-- Header -->
    <PortfolioHeader title="Dungeon Defenders: Awakened.">
      <strong>Game Programmer</strong> | Tower Defense Action RPG | Unreal Engine 4
    </PortfolioHeader>

    <!-- Description -->
    <FlexContainer>
      <VerticalFlexBox>
        <h3>Description.</h3>
        <p>
          <SimpleLink
            href="https://store.steampowered.com/app/1101190/Dungeon_Defenders_Awakened/"
            target="_blank"
            ><strong>"Dungeon Defenders: Awakened"</strong></SimpleLink
          >
          is a Tower Defense Action RPG game. I contributed to the development by optimizing
          multiplayer loading times, adding split-screen functionality with UI compatibility,
          developing a free-to-play release and for Smilegate's Stove platform, and leading release
          management. During this time, I also worked on several internal prototypes, fully fleshing
          out the UI functionality and stylization for the vertical slices.
        </p>
      </VerticalFlexBox>

      <video controls muted autoplay>
        <source
          :src="getMediaUrl('Games', '/dda/DDATrailer.mp4')"
          alt="A trailer of Chromatic Games' 'Dungeon Defenders: Awakened'"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </FlexContainer>
    <!-- END Description -->

    <hr />

    <!-- Contributions -->
    <FlexContainer>
      <VerticalFlexBox>
        <h3>Contributions.</h3>
        <ul class="colored-bullets">
          <li>
            Ported the game to a free-to-play version for Smilegate Stove release, with a focus on
            F2P gameplay changes and the Emporium store UIs.
            <SimpleLink href="#stove">[Jump]</SimpleLink>
          </li>
          <li>
            Created split-screen functionality with dynamic UI changes, including UE4 engine source
            modification to bugfix a split-screen Slate focus issue.
            <SimpleLink href="#split-screen">[Jump]</SimpleLink>
          </li>
          <li>
            Achieved significant optimization in multiplayer loading times, reducing them up to
            sixfold by implementing local item storage.
          </li>
          <li>Led PTR and live releases, facilitating hotfixes and patch notes.</li>
        </ul>
      </VerticalFlexBox>
      <img
        :src="getMediaUrl('Games', `/dda/DDATavernStash.png`)"
        alt="The hero 'EV' kneeling down to open the Tavern Stash, a chest that emanates light from its keyhole."
      />
    </FlexContainer>
    <hr />
    <!-- END Contributions-->

    <!-- Smilegate Stove -->
    <VerticalFlexBox id="stove">
      <GridBox>
        <div class="stove-container">
          <img
            style="margin-right: 36px"
            :src="getMediaUrl('Games', '/dda/DDAStoveIconBackground.png')"
            aria-hidden="true"
          />
          <div class="gradient" aria-hidden="true"></div>
          <img
            style="left: 36px"
            :src="getMediaUrl('Games', '/dda/DDAStoveIconForeground.png')"
            alt="The banner for DDA on the Smilegate Stove platform in Korea"
          />
        </div>

        <VerticalFlexBox>
          <h3>Smilegate Stove.</h3>
          <p>
            We aimed to introduce Dungeon Defenders: Awakened (DDA) to a new market and explore the
            free-to-play model. We launched the game in Korea through Smilegate Stove, complete with
            Korean localization. I developed numerous new UIs for the F2P experience, including an
            Emporium store. In addition to creating the store's materials, preview images, and
            icons, I set up the backend functionality for real-money cosmetic purchases, integrating
            Stove's API for gem purchases and utilizing these gems for acquiring items from the
            PlayFab store.
          </p>
        </VerticalFlexBox>
      </GridBox>

      <GridBox style="margin: 1.8rem">
        <video controls muted autoplay loop>
          <source
            :src="getMediaUrl('Games', '/dda/DDAEmporiumSlotsAndStash.mp4')"
            alt="A player purchases Gems and the Prismatic Core in the Emporium cosmetic store and uses the Prismatic Core in their default transmog"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <video controls muted autoplay loop>
          <source
            :src="getMediaUrl('Games', '/dda/DDAEmporiumCore.mp4')"
            alt="A player purchases a hero deck slot and 200 Tavern Stash slots in the Emporium store"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </GridBox>
    </VerticalFlexBox>
    <!-- END Smilegate Stove -->

    <hr />

    <!-- Split-Screen -->
    <VerticalFlexBox id="split-screen">
      <GridBox>
        <img
          style="left: 36px"
          :src="getMediaUrl('Games', '/dda/DDASplitscreen.png')"
          alt="The banner for DDA on the Smilegate Stove platform in Korea"
        />

        <VerticalFlexBox>
          <h3>Split-Screen.</h3>
          <p>
            Adding split-screen required a huge overhaul to the existing UIs! For each menu and HUD
            element, we had to ensure split-screen viewability and functionality. I also delved into
            engine code to fix a Slate input routing bug, where split-screen input was not routed
            properly to Slate focus. This was another one of my projects that strengthened my love
            of game interfaces. ♡
          </p>
        </VerticalFlexBox>
      </GridBox>
    </VerticalFlexBox>
    <!-- END Split-Screen -->

    <AttributeFooter>All rights and trademarks are owned by Chromatic Games.</AttributeFooter>
  </main>
</template>

<script setup lang="ts">
import VerticalFlexBox from '@common/VerticalFlexBox.vue'
import FlexContainer from '@common/FlexContainer.vue'
import { getMediaUrl } from '@utils/mediaUtils'
import PortfolioHeader from '@portfolio/PortfolioHeader.vue'
import AttributeFooter from '@portfolio/AttributeFooter.vue'
import SimpleLink from '@components/SimpleLink.vue'
import GridBox from '@common/GridBox.vue'
</script>

<style scoped>
.flex-container div {
  width: 580px;
}

li {
  line-height: 1.8rem;
}

.stove-container {
  position: relative;
}

.stove-container img {
  object-fit: cover;
  position: absolute;
  width: 100%;
  height: 100%;
}

.stove-container .gradient {
  background: linear-gradient(to right, #09060c, rgba(0, 0, 0, 0));
  position: absolute;
  border-radius: var(--global-border-radius);
  width: 100%;
  height: 100%;
}
</style>
