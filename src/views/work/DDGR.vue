<template>
  <main class="portfolio">
    <!-- Header -->
    <PortfolioHeader title="Dungeon Defenders: Going Rogue.">
      <strong>Game Programmer</strong> | RPG Tower Defense Roguelite | Unreal Engine 4
    </PortfolioHeader>

    <!-- Description -->
    <FlexContainer>
      <VerticalFlexBox>
        <h3>Description.</h3>
        <p>
          <SimpleLink
            href="https://store.steampowered.com/app/1815530/Dungeon_Defenders_Going_Rogue/"
            target="_blank"
            ><strong>"Dungeon Defenders: Going Rogue"</strong></SimpleLink
          >
          is an RPG Roguelite game. I contributed to the development by functionally improving and
          stylizing the original user interface. I also developed various gameplay mechanics,
          including enemy AIs and game modes. During this time, I also worked on an internal project
          to create a vertical slice of a Dungeon Defenders-esque game in virtual reality.
        </p>
      </VerticalFlexBox>

      <video controls muted autoplay>
        <source
          :src="getMediaUrl('Games', '/ddgr/DDGRTrailer.mp4')"
          alt="A trailer of Chromatic Games' 'Dungeon Defenders: Going Rogue'"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </FlexContainer>
    <!-- END Description -->

    <hr />

    <!-- UI Overhaul -->
    <VerticalFlexBox>
      <GridBox>
        <ComparisonImage
          :firstImgUrl="getMediaUrl('Games', '/ddgr/DDGRHeroInfo_Before.png')"
          :secondImgUrl="getMediaUrl('Games', '/ddgr/DDGRHeroInfo_After.png')"
          :startPercentage="50"
        >
        </ComparisonImage>

        <VerticalFlexBox>
          <h3>UI.</h3>
          <p>
            Working on UI/UX is my favorite part of game development. The UI overhaul for DDGR was
            the realization of this passion! Since then, I've had the privilege of doing extensive
            UI work at Chromatic Games, including material development, spearheading UI
            functionalities and stylizations for multiple prototypes, UX design, and both front-end
            and back-end development.
            <br />
            Feel free to check out these before-and-afters!
          </p>
        </VerticalFlexBox>
      </GridBox>

      <ComparisonImageGrid :imageData="imageData" style="margin-top: 1em" />
      <p class="small-text" style="padding-top: 0.5rem">
        Sources:
        <SimpleLink
          class="in-line"
          href="https://www.youtube.com/watch?v=dCFqOAUGpNI"
          target="_blank"
          >The Backlog</SimpleLink
        >,
        <SimpleLink
          class="in-line"
          href="https://www.youtube.com/watch?v=-Sx4Va70ULg"
          target="_blank"
          >MrJuicebags</SimpleLink
        >,
        <SimpleLink
          class="in-line"
          href="https://www.youtube.com/watch?v=w2X7YBIWSVQ"
          target="_blank"
          >DiinoMaaster</SimpleLink
        >, and personal gameplay captures.
      </p>
    </VerticalFlexBox>
    <!-- END UI Overhaul -->

    <hr />

    <!-- Moving Core -->
    <VerticalFlexBox>
      <GridBox>
        <video autoplay controls muted loop>
          <source
            :src="getMediaUrl('Games', `/ddgr/DDGRMovingCoreBarrels.mp4`)"
            alt="The Huntress shooting barrels that are blocking the Moving Core\'s path."
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <VerticalFlexBox>
          <h3>Gameplay.</h3>
          <p>
            The Moving Core mode is one of the many gameplay elements I had the opportunity to
            create! In true Dungeon Defenders fashion, players must keep their Core alive. This game
            mode is an escort mission where you fight mobs at checkpoints while defending the Core
            and clearing its path. I also contributed heavily to DDGR's Arena modes, creating the
            battle arena, patrolling enemy AI, and a spider mini-boss. Here are the
            <SimpleLink
              href="https://store.steampowered.com/news/app/1815530/view/3685672555999799832"
              target="_blank"
              >patch notes</SimpleLink
            >
            if you're curious!
          </p>
        </VerticalFlexBox>

        <video autoplay controls muted loop>
          <source
            :src="getMediaUrl('Games', `/ddgr/DDGRMovingCoreVictory.mp4`)"
            alt="A player watching the Moving Core reach the end goal and achieve a Victory."
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <p>
          Additionally, during this time, I was primarily focused on an internal, unreleased VR
          project, spending the majority of my development efforts and time inside a VR headset.
          This included developing engaging combat and intuitive UI/UX experiences for virtual
          reality gameplay.
        </p>
      </GridBox>
    </VerticalFlexBox>
    <!-- END Moving Core -->

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
import ComparisonImageGrid from '@common/ComparisonImageGrid.vue'
import { reactive, computed } from 'vue'
import GridBox from '@common/GridBox.vue'
import ComparisonImage from '@/components/common/ComparisonImage.vue'

const state = reactive({
  // Full URLs are calculated
  partialImageData: [
    [
      'DDGRTalents_Before.png',
      'DDGRTalents_After.png',
      "Dungeon Defenders: Going Rogue's talent tree UI before and after comparison"
    ],
    [
      'DDGRLoadout_Before.png',
      'DDGRLoadout_After.png',
      "Dungeon Defenders: Going Rogue's hero character's loadout display before and after comparison"
    ],
    [
      'DDGRTavern_Before.png',
      'DDGRTavern_After.png',
      "Dungeon Defenders: Going Rogue's Tavern lobby screen before and after comparison"
    ],
    [
      'DDGRHeroSelect_Before.png',
      'DDGRHeroSelect_After.png',
      "Dungeon Defenders: Going Rogue's hero selection UI before and after comparison"
    ]
  ] as [string, string, string][]
})

const imageData = computed<[string, string, string][]>(() => {
  return state.partialImageData.map(([partialUrlBefore, partialUrlAfter, altDescription]) => [
    getMediaUrl('Games', `/ddgr/${partialUrlBefore}`),
    getMediaUrl('Games', `/ddgr/${partialUrlAfter}`),
    altDescription
  ])
})
</script>

<style scoped>
.flex-container div {
  width: 580px;
}
</style>
