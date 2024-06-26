<script setup lang="ts">
import VerticalBox from '@components/VerticalBox.vue'
import PortfolioHeader from '@portfolio/PortfolioHeader.vue'
import FlexBox from '@common/FlexBox.vue'
import { getImageUrl } from '@utils/imageUtils'
import GistPlanchetteInteraction from '@portfolio/hush/GistPlanchetteInteraction.vue'
import GistOuija from '@portfolio/hush/GistOuija.vue'
import GistPuzzles from '@portfolio/hush/GistPuzzles.vue'
import SimpleLink from '@components/SimpleLink.vue'
</script>

<template>
  <main class="portfolio">
    <VerticalBox>
      <!-- Header -->
      <PortfolioHeader title="Hush.">
        <strong>Lead Systems Engineer</strong> | VR Puzzle Game | Unity XR
        <br />
        11 developers | 5 months | December 2021
      </PortfolioHeader>

      <!-- Description -->
      <FlexBox>
        <VerticalBox>
          <h3>Description.</h3>
          <p>
            In <strong>"Hush,"</strong> you play as an innocent intern looking to pick up an antique
            book; however, you find Dr. Montgomery's library is not what it seems as the door locks
            behind you. At the expense of interns' souls, he keeps his youth. You must escape before
            he quenches his thirst yet again.
          </p>
        </VerticalBox>

        <video autoplay controls muted>
          <source
            :src="getImageUrl('Games', `/hush/HushTrailer.mp4`)"
            alt="A spooky, preview trailer for the game 'Hush' showcasing a dark library with a Ouija board and a fuse box."
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </FlexBox>

      <hr />

      <!-- Contributions -->
      <FlexBox>
        <VerticalBox>
          <h3>Contributions.</h3>
          <p>
            As Lead Systems Engineer, I coordinated tasks and communication among the programming
            team through weekly standups and frequent check-ins. In addition to these
            responsibilities, I had the privilege to implement key interactive elements, including
            the following:
          </p>
          <br />
          <ul class="colored-bullets">
            <li>
              Haptic-feedback-based Ouija board puzzle <SimpleLink href="#ouija">[Jump]</SimpleLink>
            </li>
            <li>Drawer & fuse box physics</li>
            <li>Base Player XR controller</li>
            <li>Hand animation scripting & pivots</li>
            <li>
              Puzzle completions leading to aging and portrait changes
              <br /><SimpleLink href="#state-changes">[Jump]</SimpleLink>
            </li>
          </ul>
        </VerticalBox>
        <img
          :src="getImageUrl('Games', `/hush/HushUpstairs.png`)"
          alt="A dimly lit library with wooden shelves, a candle-lit desk, and red-patterned wallpaper from the video game 'Hush'"
        />
      </FlexBox>

      <hr />

      <!-- Ouija Board -->
      <FlexBox>
        <VerticalBox>
          <h3 id="ouija">Ouija Board.</h3>
          <h4>Description.</h4>
          <p>
            The Ouija board provides the means of communication between the deceased interns and the
            player. As the user gets closer to the next letter, the ghost vibrates the planchette
            with a greater intensity. Through this haptic feedback, users are guided to the correct
            letters, which are written on the chalkboard.
          </p>
          <h4>Challenges.</h4>
          <p>
            As the team was utilizing Unity XR's Grab Interactable script, the planchette's
            interactions posed a challenge because this script removes positional constraints on
            held objects. To avoid the removal of these necessary constraints, I hid the Grab
            Interactable object's mesh and replaced it with a replica planchette. From there, I used
            the positional data of the holding controller and bound the replica planchette on the
            y-axis within the Ouija board. To provide the sense that the ghosts were keeping the
            planchette in place, I also implemented a solution where the planchette glides back to
            its original position if the holding controller goes out-of-bounds (See
            <SimpleLink href="#source-planchette">PlanchetteInteraction.cs</SimpleLink> under Code).
            <br />
            The initial Ouija interaction caused the distance-to-letter haptic feedback to become
            muddled on letter changes. To provide a break between letters, the haptic feedback is
            reduced to nothing as each letter is drawn on the chalkboard. This Coroutine allows the
            next haptic vibration to have a greater impact on the user (See
            <SimpleLink href="#source-ouija">Ouija.cs</SimpleLink> under Code).
          </p>
        </VerticalBox>

        <VerticalBox>
          <video controls muted>
            <source
              :src="getImageUrl('Games', `/hush/HushOuija.mp4`)"
              alt="A video demonstrating the game 'Hush's' ouija board puzzle, where the plancette spells out 'DANGER' as it is also written on the chalkboard"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <img
            :src="getImageUrl('Games', `/hush/HushOuija.jpg`)"
            alt="A dimly lit scene with a Ouija board on a table, a white candle, and Unreal Engine's UI elements."
          />
        </VerticalBox>

        <VerticalBox class="gist-wrapper" style="width: 100%">
          <h4 id="source-planchette">Planchette.cs.</h4>
          <div class="gist-wrapper" style="width: 100%">
            <GistPlanchetteInteraction />
          </div>
        </VerticalBox>

        <VerticalBox class="gist-wrapper" style="width: 100%">
          <h4 id="source-ouija">Ouija.cs.</h4>
          <div class="gist-wrapper" style="width: 100%">
            <GistOuija />
          </div>
        </VerticalBox>
      </FlexBox>

      <hr />

      <!-- State Changes -->
      <FlexBox>
        <VerticalBox>
          <h3 id="state-changes">State Changes.</h3>
          <h4>Description.</h4>
          <p>
            Although time limits are non-existent in Hush, we wanted to provide a sense of urgency.
            Once the player makes progress towards their escape, several changes are seen to give
            this illusion. The clock's hands shift to the next quarter-hour, and a loud clock chime
            is heard. Dr. Montgomery's portrait becomes younger until distortion overcomes the
            image. In stealing their essence, he also causes the player's hands to age.
          </p>
          <h4>Challenges.</h4>
          <p>
            As a virtual escape room, Hush is a non-linear game by nature. To account for this, the
            state changes were required to be non-linear as well. Since the following state must
            make sense given the previous, an incrementing of states is needed to track their
            ordering.
          </p>
        </VerticalBox>

        <video controls muted>
          <source
            :src="getImageUrl('Games', `/hush/HushStateChanges.mp4`)"
            alt="A video demonstrating the game 'Hush's' state changes. In unison with the clock chimes, the portrait painting changes from an old man, to a slightly younger version of the man wearing a necklace, to a young version of the same, and finally to images of hands grasping to escape from the frame. Additionally, the player's hands progressively become older and more frail looking."
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <VerticalBox class="gist-wrapper" style="width: 100%">
          <h4>Puzzles.cs.</h4>
          <div class="gist-wrapper" style="width: 100%">
            <GistPuzzles />
          </div>
        </VerticalBox>
      </FlexBox>
    </VerticalBox>
  </main>
</template>

<style scoped>
.flex-grid > div {
  width: 580px;
}

.gist-wrapper {
  max-width: 1160px;
}
</style>
