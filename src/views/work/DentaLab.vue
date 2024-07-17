<script setup lang="ts">
import VerticalFlexBox from '@common/VerticalFlexBox.vue'
import PortfolioHeader from '@portfolio/PortfolioHeader.vue'
import FlexContainer from '@common/FlexContainer.vue'
import { getMediaUrl } from '@utils/mediaUtils'
import SimpleLink from '@/components/SimpleLink.vue'
import GistPDF from '@portfolio/dentalab/GistPDF.vue'
import GistPdfInteractable from '@portfolio/dentalab/GistPdfInteractable.vue'
import GistWhiteboard from '@portfolio/dentalab/GistWhiteboard.vue'
import GistPenSelector from '@portfolio/dentalab/GistPenSelector.vue'
import GistExamManager from '@portfolio/dentalab/GistExamManager.vue'
import GistToExamRoom from '@portfolio/dentalab/GistToExamRoom.vue'
</script>

<template>
  <main class="portfolio">
    <!-- Header -->
    <PortfolioHeader title="DentaLab.">
      <strong>Team Lead & Programmer</strong> | VR Multiplayer Dental Simulation | Unity & OVR
      <br />
      5 developers | 5 months | December 2021
      <br />
      Published in<SimpleLink href="https://ieeexplore.ieee.org/document/9757657"
        >2022 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops
        (VRW)</SimpleLink
      >
    </PortfolioHeader>

    <!-- Description -->
    <FlexContainer>
      <VerticalFlexBox>
        <h3>Description.</h3>
        <p>
          <strong>DentaLab</strong> is an innovative educational platform tailored for dentistry
          students, offering immersive and remote learning experiences. Developed in collaboration
          between the University of Florida's Digital Worlds Institute and the University of
          Illinois Chicago's College of Dentistry, I played a pivotal role in introducing
          multiplayer functionality and a dynamic lecture room environment enriched with interactive
          features. Explore further details in the publication
          <SimpleLink href="https://ieeexplore.ieee.org/document/9757657">here</SimpleLink>.
        </p>
      </VerticalFlexBox>

      <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/LQnr3f7ZuBg?si=FZ3VcoAKy3PADf3U&amp;start=141"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        alt="A video demonstrating a dental VR classroom for University of Illinois Chicago"
      ></iframe>
    </FlexContainer>
    <hr />

    <!-- Contributions -->
    <FlexContainer>
      <VerticalFlexBox>
        <h3>Contributions.</h3>
        <p>
          As Team Lead & Programmer, I coordinated development efforts within my communication team,
          delivering the requested features for professors at the University of Illinois Chicago and
          the University of Florida. I also played a significant role in co-authoring the published
          journal.
        </p>
        <br />
        <ul class="colored-bullets">
          <li>PDF and PowerPoint viewers <SimpleLink href="#pdf-viewer">[Jump]</SimpleLink>.</li>
          <li>
            Color-changing marker for whiteboard <SimpleLink href="#whiteboard">[Jump]</SimpleLink>.
          </li>
          <li>Customizable exam assessment <SimpleLink href="#exam">[Jump]</SimpleLink>.</li>
          <li>Multiplayer functionality for entire application utilizing PUN 2.</li>
        </ul>
      </VerticalFlexBox>
      <img
        :src="getMediaUrl('/dentalab/DentaLabExamRoom.jpg', 'VR Research')"
        alt="A virtual, dental exam room with a patient lying on the exam table."
      />
    </FlexContainer>
    <hr />

    <!-- PDF & PowerPoint Viewers -->
    <FlexContainer>
      <VerticalFlexBox>
        <h3 id="pdf-viewer">PDF & PowerPoint Viewers.</h3>
        <h4>Description.</h4>
        <p>
          Each virtual reality environment in DentaLab replicates its real-world counterpart with
          augmented reality. The PowerPoint display enables customizable presentations, and the PDF
          viewer allows users to read notes or research papers. Files can be added, edited, and
          removed without requiring Unity knowledge.
        </p>
        <h4>Challenges.</h4>
        <p>
          One major goal was to provide flexibility in managing stored files, necessitating
          automatic file conversion to .png images for user-friendliness. Although the conversion
          works flawlessly in development, Window's System.Drawing caused build conflicts in Unity.
          Fortunately, the data structure representing the PDF and PowerPoint files supports regular
          .png use, enabling users to change files easily (See
          <SimpleLink href="#source-pdf">PDF.cs</SimpleLink> under Code). Controls switch between
          file selection and scrolling. Once a file is chosen, file selection controls disappear,
          allowing navigation within the selected file. Transitioning from a raycast selector to a
          touchscreen press caused unintended control activations due to overlapping areas.
          Implementing a simple Coroutine introduced a short grace period to prevent these
          accidental presses (See
          <SimpleLink href="#source-pdfinteractable">PdfInteractable.cs</SimpleLink> under Code).
        </p>
      </VerticalFlexBox>

      <VerticalFlexBox>
        <video controls muted style="margin-bottom: 2rem">
          <source
            :src="getMediaUrl('/dentalab/DentaLabPowerPoint.mp4', 'VR Research')"
            alt="A first-person perspective of a teacher in a virtual classroom navigating a PowerPoint presentation with 3D buttons"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <video controls muted>
          <source
            :src="getMediaUrl('/dentalab/DentaLabPDFViewer.mp4', 'VR Research')"
            alt="A first-person perspective. The player uses a virtual wristband UI to open a PDF viewer that the player holds virtually and moves around the environment"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </VerticalFlexBox>

      <VerticalFlexBox style="width: 100%">
        <h4 id="source-pdf">Pdf.cs.</h4>
        <div style="width: 100%">
          <GistPDF />
        </div>
      </VerticalFlexBox>

      <VerticalFlexBox style="width: 100%">
        <h4 id="source-pdfinteractable">PdfInteractable.cs.</h4>
        <div style="width: 100%">
          <GistPdfInteractable />
        </div>
      </VerticalFlexBox>
    </FlexContainer>
    <!-- END PDF & PowerPoint Viewers -->

    <hr />

    <!-- Whiteboard -->
    <FlexContainer>
      <VerticalFlexBox>
        <h3 id="whiteboard">Whiteboard.</h3>
        <h4>Description.</h4>
        <p>
          Each user has a wrist user-interface, providing them with a personal whiteboard. While
          only the whiteboard's owner can move it around the room, other users can collaborate by
          writing or drawing on it.
        </p>
        <h4>Challenges.</h4>
        <p>
          Multiplayer implementation was the primary challenge of DentaLab. Transmitting whiteboard
          data required careful thought. Using Photon Unity Networking (PUN), I implemented remote
          procedure calls to notify other users of any whiteboard changes. However,
          sending/receiving a whiteboard's image upon every change caused severe frame rate drops
          and latency. To provide a lag-free, real-time experience, PUN only tracks the positional
          and rotational data of the whiteboard and its marker. This way, each player runs the
          drawing functions locally, eliminating the need for image data transmission (See
          <SimpleLink href="#source-whiteboard">Whiteboard.cs</SimpleLink>). Meanwhile, remote
          procedure calls notify all users if a marker's color changes (See
          <SimpleLink href="#source-pencolorselector">PenColorSelector.cs</SimpleLink>).
        </p>
      </VerticalFlexBox>

      <VerticalFlexBox>
        <video controls muted style="margin-bottom: 2rem">
          <source
            :src="getMediaUrl('/dentalab/DentaLabWhiteboard.mp4', 'VR Research')"
            alt="A first-person perspective of player drawing on a virtual whiteboard saying DentaLab"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <img
          :src="getMediaUrl('/dentalab/DentaLabWhiteboard.jpg', 'VR Research')"
          alt="A user pointing to 3 different colored buttons next to a virtual whiteboard"
        />
      </VerticalFlexBox>

      <VerticalFlexBox style="width: 100%">
        <h4 id="source-whiteboard">Whiteboard.cs.</h4>
        <div style="width: 100%">
          <GistWhiteboard />
        </div>
      </VerticalFlexBox>

      <VerticalFlexBox style="width: 100%">
        <h4 id="source-pencolorselector">PenColorSelector.cs.</h4>
        <div style="width: 100%">
          <GistPenSelector />
        </div>
      </VerticalFlexBox>
    </FlexContainer>
    <!-- END Whiteboard -->

    <hr />

    <!-- Exam Assessments -->
    <FlexContainer>
      <VerticalFlexBox>
        <h3 id="exam-assessment">Exam Assessments.</h3>
        <h4>Description.</h4>
        <p>
          Assessments grant students the opportunity to recall what they have learned in DentaLab.
          Given the automatic grading and review feature, students can see their educational
          progress without leaving virtual reality. By simply editing a text document, professors
          can easily adjust the exam to reflect the current curriculum as well.
        </p>
        <h4>Challenges.</h4>
        <p>
          Reading and storing the exam itself was the main task. One solution would have been
          implementing a class "Question," containing the question itself, its possible answers, and
          the correct answer. However, I was using this exam feature to teach my new-to-coding peer
          and decided not to delve into object-oriented programming just yet. Instead, I opted for a
          solution with the same effect: a List of Tuples containing the same data (See
          <SimpleLink href="#source-exammanager">ExamManager.cs</SimpleLink>).
          <br />
          Going from the lecture room to the test-taking room should feel as natural as possible,
          increasing player immersion and comfort. In the real world, we don't use an interface to
          open a door. Luckily, the environment has a door in the back. So, the solution is for the
          players to enter the Exam Room by grabbing the doorknob (See
          <SimpleLink href="#source-toexamroom">ToExamRoom.cs</SimpleLink>).
        </p>
      </VerticalFlexBox>

      <VerticalFlexBox>
        <img
          :src="getMediaUrl('/dentalab/DentaLabExamRoomDoor.jpg', 'VR Research')"
          alt="A virtual environment with a classroom table and a gray door labeled 'Exam Room'"
          style="margin-bottom: 2rem"
        />
        <video controls muted>
          <source
            :src="getMediaUrl('/dentalab/DentaLabExamAssessment.mp4', 'VR Research')"
            alt="A first-person perspective of player navigating to the Exam Room, where they take a dental-related quiz and receive a test score."
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </VerticalFlexBox>

      <VerticalFlexBox style="width: 100%">
        <h4 id="source-exammanager">ExamManager.cs.</h4>
        <div style="width: 100%">
          <GistExamManager />
        </div>
      </VerticalFlexBox>

      <VerticalFlexBox style="width: 100%">
        <h4 id="source-toexamroom">ToExamRoom.cs.</h4>
        <div style="width: 100%">
          <GistToExamRoom />
        </div>
      </VerticalFlexBox>
    </FlexContainer>
    <!-- END Whiteboard -->
  </main>
</template>

<style scoped>
.flex-container > div {
  width: 580px;
}

iframe {
  border-radius: 12px;
  max-width: 580px;
}
</style>
