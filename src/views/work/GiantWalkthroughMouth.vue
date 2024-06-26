<script setup lang="ts">
import VerticalBox from '@components/VerticalBox.vue'
import PortfolioHeader from '@portfolio/PortfolioHeader.vue'
import FlexBox from '@common/FlexBox.vue'
import { getImageUrl } from '@utils/imageUtils'
import GistToothManager from '@portfolio/giantwalkthroughmouth/GistToothManager.vue'
import GistCanvasManager from '@portfolio/giantwalkthroughmouth/GistCanvasManager.vue'
import GistRootCanal from '@portfolio/giantwalkthroughmouth/GistRootCanal.vue'
import GistPortal from '@portfolio/giantwalkthroughmouth/GistPortal.vue'
import SimpleLink from '@/components/SimpleLink.vue'
</script>

<template>
  <main class="portfolio">
    <!-- Header -->
    <PortfolioHeader title="Giant Walkthrough Mouth.">
      <strong>Team Lead & Programmer</strong> | VR Multiplayer Educational Dentistry | Unity & OVR
      <br />
      6 developers | 4 months | April 2022
    </PortfolioHeader>

    <!-- Description -->
    <FlexBox>
      <VerticalBox>
        <h3>Description.</h3>
        <p>
          <strong>"Giant Walkthrough Mouth"</strong> is a cutting-edge multiplayer VR application
          developed for Oculus, tailored for dental students to explore dental anatomy. Leveraging
          Unity and Metaverse avatars, students can customize their appearances and engage in
          collaborative learning. The exhibit features a large-scale model of the mouth with
          interactable teeth and a comprehensive quiz to test knowledge retention. This unique
          virtual reality experience offers an innovative approach to dental education.
        </p>
      </VerticalBox>

      <video autoplay controls muted>
        <source
          :src="getImageUrl('VR Research', `/giantwalkthroughmouth/GWMTrailer.mp4`)"
          alt="Trailer for 'Giant Walkthrough Mouth' VR experience, showcasing a museum-like exhibit of an enormously scaled human mouth."
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
          As Team Lead & Programmer, I facilitated communication between the Product Owner and the
          development team, coordinated development efforts, and resolved emergent issues. My
          contributions included:
        </p>
        <br />
        <ul class="colored-bullets">
          <li>
            Implemented educational information panels, including video, 3D models, and more
            <SimpleLink href="#info-panels">[Jump]</SimpleLink>.
          </li>
          <li>
            Developed magnifying glass tool that reveals root canals <br />
            <SimpleLink href="#magnifying-glass">[Jump]</SimpleLink>.
          </li>
          <li>Integrated multiplayer using PUN 2.</li>
          <li>Configured permission settings and submitted builds to Oculus.</li>
          <li>
            Assisted the University of Illinois Chicago with Oculus setup and application
            installation
          </li>
        </ul>
      </VerticalBox>
      <img
        :src="getImageUrl('VR Research', `/giantwalkthroughmouth/GWMMouthFront.png`)"
        alt="A large 3D model of a set of human teeth displayed in a virtual environment, shown from the front. The model includes detailed white teeth and gums, surrounded by a viewing balcony."
      />
    </FlexBox>
    <hr />

    <!-- Info Panels -->
    <FlexBox>
      <VerticalBox>
        <h3 id="info-panels">Info Panels.</h3>
        <h4>Description.</h4>
        <p>
          As a part of the educative experience, users can point at a tooth to learn more about its
          position, functionality, and more. This includes a rotating 3D model, a video, and
          interactive root canal viewing.
        </p>
        <h4>Challenges.</h4>
        <p>
          The bulk of the work in the information panels was in setting up the Unity UI Canvas,
          which is more tedious than challenging. The MultiplayerToothManager.cs script opens up
          each tooth's respective panel. From there, MultiplayerCanvasManager.cs handles the panel's
          interactions. The biggest coding challenge was an interaction between the “3D Model” and
          “Root Canal.” When the model is open and a user selects “Root Canal,” the user likely
          expects the root canal to appear on first selection; however, this wasn't the initial case
          because these buttons shared the same GameObject. To solve this, I added a variable to
          track the user's last selection, which prevents an unexpected user interaction.

          <br />Additionally, I had to make these work in multiplayer. Thankfully, I had worked on a
          previous project using PUN 2 (See <SimpleLink href="dentalab">DentaLab</SimpleLink>), so
          my knowledge carried over!
        </p>
      </VerticalBox>

      <video controls muted>
        <source
          :src="getImageUrl('VR Research', `/giantwalkthroughmouth/GWMInformationPanels.mp4`)"
          alt="A video demonstrating the exhibit's information panel. The user clicks on a tooth, opens that tooth's description, 3D model, root canal, video, and histology."
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <VerticalBox class="gist-wrapper" style="width: 100%">
        <h4 id="source-canvasmanager">MultiplayerCanvasManager.cs.</h4>
        <div class="gist-wrapper" style="width: 100%">
          <GistCanvasManager />
        </div>
      </VerticalBox>

      <VerticalBox class="gist-wrapper" style="width: 100%">
        <h4 id="source-toothmanager">MultiplayerToothManager.cs.</h4>
        <div class="gist-wrapper" style="width: 100%">
          <GistToothManager />
        </div>
      </VerticalBox>
    </FlexBox>

    <!-- Magnifying Glass -->
    <FlexBox>
      <VerticalBox>
        <h3 id="magnifying-glass">Magnifying Glass.</h3>
        <h4>Description.</h4>
        <p>
          A user can pickup the magnifying glass to view the root canal of the selected tooth. This
          allows for greater interactivity than the simple “Root Canal” option of the information
          panel.
        </p>
        <h4>Challenges.</h4>
        <p>
          Portals are tough enough in regular 3D; stereoscopic rendering makes them even harder to
          execute in VR. Thankfully, the “Multi Pass” Stereo Rendering Mode allowed these custom
          stencil shaders to be visible in both eyes.
        </p>
      </VerticalBox>

      <video controls muted>
        <source
          :src="getImageUrl('VR Research', `/giantwalkthroughmouth/GWMMagnifyingGlass.mp4`)"
          alt="A video demonstrating the exhibit's magnifying glass tool. As the player moves the magnifying glass across the 3D tooth model, the root canal of that tooth is seen."
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <VerticalBox class="gist-wrapper" style="width: 100%">
        <h4 id="source-canvasmanager">RootCanal.shader.</h4>
        <div class="gist-wrapper" style="width: 100%">
          <GistRootCanal />
        </div>
      </VerticalBox>

      <VerticalBox class="gist-wrapper" style="width: 100%">
        <h4 id="source-toothmanager">Portal.shader.</h4>
        <div class="gist-wrapper" style="width: 100%">
          <GistPortal />
        </div>
      </VerticalBox>
    </FlexBox>
  </main>
</template>

<style scoped>
.flex-grid > div {
  width: 580px;
}
</style>
