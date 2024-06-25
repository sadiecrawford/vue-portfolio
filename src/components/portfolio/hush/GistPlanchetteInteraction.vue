<script setup lang="ts"></script>

<template>
  <body></body>
  <link rel="stylesheet" href="../../src/assets/styles/gist.css" />

  <div>
    <div id="gist113646910" class="gist">
      <div
        class="gist-file"
        translate="no"
        data-color-mode="color-scheme"
        data-light-theme="color-scheme"
      >
        <div class="gist-data">
          <div class="js-gist-file-update-container js-task-list-container">
            <div id="file-planchetteinteraction-cs" class="file my-2">
              <div itemprop="text" class="Box-body p-0 blob-wrapper data type-c">
                <div class="js-check-bidi js-blob-code-container blob-code-content">
                  <template class="js-file-alert-template">
                    <div
                      data-view-component="true"
                      class="flash flash-warn flash-full d-flex flex-items-center"
                    >
                      <svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        class="octicon octicon-alert"
                      >
                        <path
                          d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                        ></path>
                      </svg>
                      <span>
                        This file contains bidirectional Unicode text that may be interpreted or
                        compiled differently than what appears below. To review, open the file in an
                        editor that reveals hidden Unicode characters.
                        <a
                          class="Link--inTextBlock"
                          href="https://github.co/hiddenchars"
                          target="_blank"
                          >Learn more about bidirectional Unicode characters</a
                        >
                      </span>

                      <div data-view-component="true" class="flash-action">
                        <a
                          href="{{ revealButtonHref }}"
                          data-view-component="true"
                          class="btn-sm btn"
                        >
                          Show hidden characters
                        </a>
                      </div>
                    </div></template
                  >
                  <template class="js-line-alert-template">
                    <span
                      aria-label="This line has hidden Unicode characters"
                      data-view-component="true"
                      class="line-alert tooltipped tooltipped-e"
                    >
                      <svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        class="octicon octicon-alert"
                      >
                        <path
                          d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                        ></path>
                      </svg> </span
                  ></template>

                  <table
                    data-hpc=""
                    class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
                    data-tab-size="8"
                    data-paste-markdown-skip=""
                    data-tagsearch-lang="C#"
                    data-tagsearch-path="PlanchetteInteraction.cs"
                  >
                    <tbody>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L1"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="1"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC1"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">using</span> System<span class="pl-kos">.</span
                          >Collections<span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L2"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="2"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC2"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">using</span> System<span class="pl-kos">.</span
                          >Collections<span class="pl-kos">.</span>Generic<span class="pl-kos"
                            >;</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L3"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="3"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC3"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">using</span> UnityEngine<span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L4"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="4"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC4"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">using</span> UnityEngine<span class="pl-kos">.</span
                          >XR<span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L5"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="5"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC5"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L6"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="6"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC6"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">public</span> <span class="pl-k">class</span>
                          <span class="pl-smi">PlanchetteInteraction</span>
                          <span class="pl-c1">:</span> <span class="pl-smi">MonoBehaviour</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L7"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="7"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC7"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L8"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="8"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC8"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">[</span
                          ><span class="pl-c1"
                            >Tooltip<span class="pl-kos">(</span
                            ><span class="pl-s"
                              ><span class="pl-s">"</span>The GameObject for either UnityXR Rig's
                              controllers respectively<span class="pl-s">"</span></span
                            ><span class="pl-kos">)</span></span
                          ><span class="pl-kos">]</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L9"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="9"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC9"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">public</span> <span class="pl-smi">GameObject</span>
                          <span class="pl-s1">rightController</span><span class="pl-kos">,</span>
                          <span class="pl-s1">leftController</span><span class="pl-kos">;</span>
                          <span class="pl-c">// Right and Left Unity XR Rig controllers</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L10"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="10"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC10"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">[</span
                          ><span class="pl-c1"
                            >Tooltip<span class="pl-kos">(</span
                            ><span class="pl-s"
                              ><span class="pl-s">"</span>The GameObject respresenting either hand
                              and the planchette while its being held<span class="pl-s"
                                >"</span
                              ></span
                            ><span class="pl-kos">)</span></span
                          ><span class="pl-kos">]</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L11"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="11"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC11"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">public</span> <span class="pl-smi">GameObject</span>
                          <span class="pl-s1">rightHand</span><span class="pl-kos">,</span>
                          <span class="pl-s1">leftHand</span><span class="pl-kos">;</span>
                          <span class="pl-c">// Planchette hands with Animators</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L12"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="12"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC12"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L13"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="13"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC13"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">// Interactable</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L14"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="14"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC14"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-smi">Dictionary</span><span class="pl-c1">&lt;</span
                          ><span class="pl-smi">string</span><span class="pl-kos">,</span>
                          <span class="pl-smi">InputDevice</span><span class="pl-c1">&gt;</span>
                          <span class="pl-s1">hands</span><span class="pl-kos">;</span>
                          <span class="pl-c">// e.g., "left" -&gt; Left Unity XR InputDevice</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L15"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="15"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC15"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k"><span class="pl-k">static</span></span>
                          <span class="pl-k">public</span> <span class="pl-smi">string</span>
                          <span class="pl-s1">heldBy</span> <span class="pl-c1">=</span>
                          <span class="pl-s"
                            ><span class="pl-s">"</span><span class="pl-s">"</span></span
                          ><span class="pl-kos">;</span>
                          <span class="pl-c">// "left," "right," or "", for Ouija.cs haptics</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L16"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="16"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC16"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L17"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="17"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC17"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-smi">Vector3</span> <span class="pl-s1">originalPos</span
                          ><span class="pl-kos">;</span>
                          <span class="pl-c">// Planchettes original board position</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L18"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="18"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC18"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-smi">bool</span> <span class="pl-s1">reset</span
                          ><span class="pl-kos">;</span>
                          <span class="pl-c"
                            >// Whether Planchette is floating back to original position</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L19"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="19"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC19"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L20"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="20"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC20"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">// Local Boundaries</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L21"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="21"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC21"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-smi">float</span> <span class="pl-s1">xMin</span>
                          <span class="pl-c1">=</span> <span class="pl-c1">-</span
                          ><span class="pl-c1">0.593f</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L22"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="22"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC22"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-smi">float</span> <span class="pl-s1">xMax</span>
                          <span class="pl-c1">=</span> <span class="pl-c1">0.394f</span
                          ><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L23"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="23"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC23"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-smi">float</span> <span class="pl-s1">zMin</span>
                          <span class="pl-c1">=</span> <span class="pl-c1">-</span
                          ><span class="pl-c1">0.205f</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L24"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="24"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC24"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-smi">float</span> <span class="pl-s1">zMax</span>
                          <span class="pl-c1">=</span> <span class="pl-c1">0.400f</span
                          ><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L25"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="25"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC25"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L26"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="26"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC26"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">private</span> <span class="pl-smi">void</span>
                          <span class="pl-en">Start</span><span class="pl-kos">(</span
                          ><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L27"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="27"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC27"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L28"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="28"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC28"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-s1">hands</span> <span class="pl-c1">=</span>
                          <span class="pl-k">new</span> <span class="pl-smi">Dictionary</span
                          ><span class="pl-c1">&lt;</span><span class="pl-smi">string</span
                          ><span class="pl-kos">,</span> <span class="pl-smi">InputDevice</span
                          ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                          ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L29"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="29"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC29"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-s1">originalPos</span>
                          <span class="pl-c1">=</span> transform<span class="pl-kos">.</span
                          >position<span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L30"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="30"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC30"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L31"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="31"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC31"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L32"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="32"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC32"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">private</span> <span class="pl-smi">void</span>
                          <span class="pl-en">Update</span><span class="pl-kos">(</span
                          ><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L33"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="33"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC33"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L34"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="34"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC34"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">if</span> <span class="pl-kos">(</span>reset<span
                            class="pl-kos"
                            >)</span
                          >
                          <span class="pl-c">// Floating to original position</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L35"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="35"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC35"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L36"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="36"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC36"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">// Moves towards original position</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L37"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="37"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC37"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          transform<span class="pl-kos">.</span>position
                          <span class="pl-c1">=</span> Vector3<span class="pl-kos">.</span
                          ><span class="pl-en">MoveTowards</span
                          ><span class="pl-kos">(</span>transform<span class="pl-kos">.</span
                          >position<span class="pl-kos">,</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L38"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="38"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC38"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          originalPos<span class="pl-kos">,</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L39"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="39"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC39"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          Time<span class="pl-kos">.</span>deltaTime <span class="pl-c1">*</span>
                          <span class="pl-c1">1.5f</span><span class="pl-kos">)</span
                          ><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L40"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="40"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC40"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L41"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="41"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC41"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c"
                            >// Stops resetting once complete to allow interaction</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L42"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="42"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC42"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">if</span> <span class="pl-kos">(</span>transform<span
                            class="pl-kos"
                            >.</span
                          >position<span class="pl-kos">.</span>x
                          <span class="pl-c1">==</span> originalPos<span class="pl-kos">.</span>x
                          <span class="pl-c1">&amp;&amp;</span> transform<span class="pl-kos"
                            >.</span
                          >position<span class="pl-kos">.</span>z
                          <span class="pl-c1">==</span> originalPos<span class="pl-kos">.</span
                          >z<span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L43"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="43"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC43"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-s1">reset</span> <span class="pl-c1">=</span>
                          <span class="pl-c1">false</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L44"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="44"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC44"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span> <span class="pl-k">else</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L45"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="45"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC45"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L46"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="46"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC46"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">if</span> <span class="pl-kos">(</span>hands<span
                            class="pl-kos"
                            >.</span
                          ><span class="pl-en">ContainsKey</span><span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>right<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span> <span class="pl-c1">&amp;&amp;</span>
                          <span class="pl-c1">!</span>heldBy<span class="pl-kos">.</span
                          ><span class="pl-en">Equals</span><span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>left<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                          <span class="pl-c">// Touching right hand</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L47"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="47"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC47"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L48"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="48"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC48"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">// If gripping...</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L49"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="49"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC49"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-smi">float</span> <span class="pl-s1">gripValue</span
                          ><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L50"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="50"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC50"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">if</span> <span class="pl-kos">(</span>hands<span
                            class="pl-kos"
                            >[</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>right<span class="pl-s">"</span></span
                          ><span class="pl-kos">]</span><span class="pl-kos">.</span
                          ><span class="pl-en">TryGetFeatureValue</span
                          ><span class="pl-kos">(</span>CommonUsages<span class="pl-kos">.</span
                          >grip<span class="pl-kos">,</span>
                          <span class="pl-k">out</span> gripValue<span class="pl-kos">)</span>
                          <span class="pl-c1">&amp;&amp;</span>
                          <span class="pl-s1">gripValue</span> <span class="pl-c1">&gt;</span>
                          <span class="pl-c1">0.01f</span><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L51"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="51"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC51"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L52"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="52"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC52"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">if</span>
                          <span class="pl-kos">(</span>IsOutOfBounds<span class="pl-kos">(</span
                          ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L53"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="53"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC53"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L54"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="54"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC54"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c"
                            >// Signals to reset to original position, forces hand to drop
                            planchette</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L55"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="55"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC55"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-s1">reset</span> <span class="pl-c1">=</span>
                          <span class="pl-c1">true</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L56"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="56"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC56"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          EnableUnityXRRightHand<span class="pl-kos">(</span
                          ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L57"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="57"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC57"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L58"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="58"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC58"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">else</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L59"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="59"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC59"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L60"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="60"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC60"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          DisableUnityXRRightHand<span class="pl-kos">(</span
                          ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                          <span class="pl-c">// Changes hands to planchette-holding hand</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L61"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="61"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC61"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L62"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="62"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC62"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">// Moves to controller position (ignoring y)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L63"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="63"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC63"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          transform<span class="pl-kos">.</span>position
                          <span class="pl-c1">=</span> <span class="pl-k">new</span> Vector3<span
                            class="pl-kos"
                            >(</span
                          >rightController<span class="pl-kos">.</span>transform<span class="pl-kos"
                            >.</span
                          >position<span class="pl-kos">.</span>x<span class="pl-kos">,</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L64"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="64"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC64"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          transform<span class="pl-kos">.</span>position<span class="pl-kos">.</span
                          >y<span class="pl-kos">,</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L65"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="65"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC65"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          rightController<span class="pl-kos">.</span>transform<span class="pl-kos"
                            >.</span
                          >position<span class="pl-kos">.</span>z<span class="pl-kos">)</span
                          ><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L66"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="66"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC66"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L67"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="67"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC67"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L68"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="68"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC68"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">else</span>
                          <span class="pl-c">// If not gripping, return to unity XR hands</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L69"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="69"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC69"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L70"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="70"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC70"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          EnableUnityXRRightHand<span class="pl-kos">(</span
                          ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L71"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="71"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC71"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L72"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="72"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC72"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span> <span class="pl-k">else</span>
                          <span class="pl-k">if</span> <span class="pl-kos">(</span>hands<span
                            class="pl-kos"
                            >.</span
                          ><span class="pl-en">ContainsKey</span><span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>left<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span> <span class="pl-c1">&amp;&amp;</span>
                          <span class="pl-c1">!</span>heldBy<span class="pl-kos">.</span
                          ><span class="pl-en">Equals</span><span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>right<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                          <span class="pl-c">// Touching left hand</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L73"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="73"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC73"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L74"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="74"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC74"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">// If gripping...</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L75"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="75"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC75"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-smi">float</span> <span class="pl-s1">gripValue</span
                          ><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L76"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="76"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC76"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">if</span> <span class="pl-kos">(</span>hands<span
                            class="pl-kos"
                            >[</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>left<span class="pl-s">"</span></span
                          ><span class="pl-kos">]</span><span class="pl-kos">.</span
                          ><span class="pl-en">TryGetFeatureValue</span
                          ><span class="pl-kos">(</span>CommonUsages<span class="pl-kos">.</span
                          >grip<span class="pl-kos">,</span>
                          <span class="pl-k">out</span> gripValue<span class="pl-kos">)</span>
                          <span class="pl-c1">&amp;&amp;</span>
                          <span class="pl-s1">gripValue</span> <span class="pl-c1">&gt;</span>
                          <span class="pl-c1">0.01f</span><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L77"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="77"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC77"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L78"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="78"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC78"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">if</span>
                          <span class="pl-kos">(</span>IsOutOfBounds<span class="pl-kos">(</span
                          ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L79"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="79"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC79"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L80"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="80"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC80"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c"
                            >// Signals to reset to original position, forces hand to drop
                            planchette</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L81"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="81"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC81"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-s1">reset</span> <span class="pl-c1">=</span>
                          <span class="pl-c1">true</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L82"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="82"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC82"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          EnableUnityXRLeftHand<span class="pl-kos">(</span
                          ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L83"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="83"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC83"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L84"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="84"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC84"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">else</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L85"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="85"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC85"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L86"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="86"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC86"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          DisableUnityXRLeftHand<span class="pl-kos">(</span
                          ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                          <span class="pl-c">// Changes hands to planchette-holding hand</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L87"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="87"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC87"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L88"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="88"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC88"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">// Moves to controller position (ignoring y)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L89"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="89"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC89"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          transform<span class="pl-kos">.</span>position
                          <span class="pl-c1">=</span> <span class="pl-k">new</span> Vector3<span
                            class="pl-kos"
                            >(</span
                          >leftController<span class="pl-kos">.</span>transform<span class="pl-kos"
                            >.</span
                          >position<span class="pl-kos">.</span>x<span class="pl-kos">,</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L90"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="90"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC90"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          transform<span class="pl-kos">.</span>position<span class="pl-kos">.</span
                          >y<span class="pl-kos">,</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L91"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="91"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC91"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          leftController<span class="pl-kos">.</span>transform<span class="pl-kos"
                            >.</span
                          >position<span class="pl-kos">.</span>z<span class="pl-kos">)</span
                          ><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L92"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="92"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC92"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L93"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="93"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC93"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L94"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="94"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC94"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">else</span>
                          <span class="pl-c">// If not gripping, return to unity XR hands</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L95"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="95"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC95"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L96"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="96"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC96"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          EnableUnityXRLeftHand<span class="pl-kos">(</span
                          ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L97"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="97"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC97"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L98"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="98"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC98"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L99"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="99"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC99"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L100"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="100"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC100"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L101"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="101"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC101"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L102"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="102"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC102"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">private</span> <span class="pl-smi">void</span>
                          <span class="pl-en">OnTriggerExit</span><span class="pl-kos">(</span
                          ><span class="pl-smi">Collider</span> <span class="pl-s1">other</span
                          ><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L103"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="103"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC103"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L104"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="104"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC104"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">/*</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L105"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="105"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC105"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">
                            * Re-enables Unity XR hands if controllers move out of hitbox</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L106"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="106"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC106"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c"> */</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L107"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="107"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC107"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L108"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="108"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC108"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">if</span> <span class="pl-kos">(</span>other<span
                            class="pl-kos"
                            >.</span
                          >name<span class="pl-kos">.</span><span class="pl-en">Equals</span
                          ><span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>RightHandController<span class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L109"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="109"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC109"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L110"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="110"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC110"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">if</span> <span class="pl-kos">(</span>hands<span
                            class="pl-kos"
                            >.</span
                          ><span class="pl-en">ContainsKey</span><span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>right<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L111"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="111"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC111"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L112"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="112"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC112"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          hands<span class="pl-kos">.</span><span class="pl-en">Remove</span
                          ><span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>right<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L113"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="113"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC113"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          EnableUnityXRRightHand<span class="pl-kos">(</span
                          ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L114"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="114"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC114"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L115"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="115"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC115"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L116"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="116"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC116"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">else</span> <span class="pl-k">if</span>
                          <span class="pl-kos">(</span>other<span class="pl-kos">.</span>name<span
                            class="pl-kos"
                            >.</span
                          ><span class="pl-en">Equals</span><span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>LeftHandController<span class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L117"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="117"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC117"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L118"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="118"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC118"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">if</span> <span class="pl-kos">(</span>hands<span
                            class="pl-kos"
                            >.</span
                          ><span class="pl-en">ContainsKey</span><span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>left<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L119"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="119"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC119"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L120"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="120"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC120"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          hands<span class="pl-kos">.</span><span class="pl-en">Remove</span
                          ><span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>left<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L121"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="121"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC121"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          EnableUnityXRLeftHand<span class="pl-kos">(</span
                          ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L122"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="122"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC122"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L123"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="123"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC123"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L124"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="124"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC124"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L125"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="125"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC125"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L126"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="126"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC126"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">private</span> <span class="pl-smi">void</span>
                          <span class="pl-en">OnTriggerStay</span><span class="pl-kos">(</span
                          ><span class="pl-smi">Collider</span> <span class="pl-s1">other</span
                          ><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L127"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="127"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC127"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L128"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="128"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC128"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">/*</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L129"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="129"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC129"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">
                            * Gets Unity XR Input Devices for positional data to be utilized</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L130"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="130"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC130"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c"> */</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L131"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="131"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC131"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L132"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="132"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC132"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">if</span> <span class="pl-kos">(</span>other<span
                            class="pl-kos"
                            >.</span
                          >name<span class="pl-kos">.</span><span class="pl-en">Equals</span
                          ><span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>RightHandController<span class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L133"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="133"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC133"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L134"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="134"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC134"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c"
                            >// Gets characteristics of desired device (left or right
                            controller)</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L135"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="135"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC135"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-smi">List</span><span class="pl-c1">&lt;</span
                          ><span class="pl-smi">InputDevice</span><span class="pl-c1">&gt;</span>
                          <span class="pl-s1">devices</span> <span class="pl-c1">=</span>
                          <span class="pl-k">new</span> <span class="pl-smi">List</span
                          ><span class="pl-c1">&lt;</span><span class="pl-smi">InputDevice</span
                          ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                          ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L136"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="136"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC136"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-smi">InputDeviceCharacteristics</span>
                          <span class="pl-s1">deviceChars</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L137"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="137"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC137"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-s1">deviceChars</span>
                          <span class="pl-c1">=</span> InputDeviceCharacteristics<span
                            class="pl-kos"
                            >.</span
                          >Right<span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L138"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="138"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC138"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L139"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="139"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC139"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c"
                            >// Receives desired device (left or right controller)</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L140"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="140"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC140"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          InputDevices<span class="pl-kos">.</span
                          ><span class="pl-en">GetDevicesWithCharacteristics</span
                          ><span class="pl-kos">(</span>deviceChars<span class="pl-kos">,</span>
                          devices<span class="pl-kos">)</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L141"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="141"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC141"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">if</span> <span class="pl-kos">(</span>devices<span
                            class="pl-kos"
                            >.</span
                          >Count <span class="pl-c1">&gt;</span> <span class="pl-c1">0</span
                          ><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L142"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="142"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC142"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L143"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="143"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC143"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-smi">InputDevice</span> <span class="pl-s1">device</span>
                          <span class="pl-c1">=</span> devices<span class="pl-kos">[</span
                          ><span class="pl-c1">0</span><span class="pl-kos">]</span
                          ><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L144"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="144"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC144"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          hands<span class="pl-kos">[</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>right<span class="pl-s">"</span></span
                          ><span class="pl-kos">]</span> <span class="pl-c1">=</span>
                          <span class="pl-s1">device</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L145"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="145"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC145"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L146"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="146"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC146"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L147"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="147"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC147"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">else</span> <span class="pl-k">if</span>
                          <span class="pl-kos">(</span>other<span class="pl-kos">.</span>name<span
                            class="pl-kos"
                            >.</span
                          ><span class="pl-en">Equals</span><span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>LeftHandController<span class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L148"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="148"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC148"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L149"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="149"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC149"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c"
                            >// Gets characteristics of desired device (left or right
                            controller)</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L150"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="150"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC150"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-smi">List</span><span class="pl-c1">&lt;</span
                          ><span class="pl-smi">InputDevice</span><span class="pl-c1">&gt;</span>
                          <span class="pl-s1">devices</span> <span class="pl-c1">=</span>
                          <span class="pl-k">new</span> <span class="pl-smi">List</span
                          ><span class="pl-c1">&lt;</span><span class="pl-smi">InputDevice</span
                          ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                          ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L151"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="151"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC151"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-smi">InputDeviceCharacteristics</span>
                          <span class="pl-s1">deviceChars</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L152"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="152"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC152"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-s1">deviceChars</span>
                          <span class="pl-c1">=</span> InputDeviceCharacteristics<span
                            class="pl-kos"
                            >.</span
                          >Left<span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L153"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="153"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC153"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L154"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="154"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC154"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c"
                            >// Receives desired device (left or right controller)</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L155"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="155"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC155"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          InputDevices<span class="pl-kos">.</span
                          ><span class="pl-en">GetDevicesWithCharacteristics</span
                          ><span class="pl-kos">(</span>deviceChars<span class="pl-kos">,</span>
                          devices<span class="pl-kos">)</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L156"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="156"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC156"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">if</span> <span class="pl-kos">(</span>devices<span
                            class="pl-kos"
                            >.</span
                          >Count <span class="pl-c1">&gt;</span> <span class="pl-c1">0</span
                          ><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L157"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="157"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC157"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L158"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="158"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC158"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-smi">InputDevice</span> <span class="pl-s1">device</span>
                          <span class="pl-c1">=</span> devices<span class="pl-kos">[</span
                          ><span class="pl-c1">0</span><span class="pl-kos">]</span
                          ><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L159"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="159"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC159"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          hands<span class="pl-kos">[</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>left<span class="pl-s">"</span></span
                          ><span class="pl-kos">]</span> <span class="pl-c1">=</span>
                          <span class="pl-s1">device</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L160"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="160"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC160"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L161"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="161"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC161"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L162"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="162"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC162"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L163"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="163"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC163"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L164"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="164"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC164"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">private</span> <span class="pl-smi">void</span>
                          <span class="pl-en">EnableUnityXRRightHand</span
                          ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L165"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="165"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC165"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L166"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="166"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC166"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">/*</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L167"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="167"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC167"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">
                            * Disables the planchette with right hand attached object</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L168"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="168"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC168"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c"> * Enables Unity XR Rigs right hand mesh</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L169"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="169"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC169"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c"> */</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L170"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="170"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC170"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L171"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="171"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC171"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          hands<span class="pl-kos">.</span><span class="pl-en">Remove</span
                          ><span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>right<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L172"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="172"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC172"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-s1">heldBy</span> <span class="pl-c1">=</span>
                          <span class="pl-s"
                            ><span class="pl-s">"</span><span class="pl-s">"</span></span
                          ><span class="pl-kos">;</span>
                          <span class="pl-c"
                            >// Signals to Ouija.cs that Planchette is being held by no
                            controller</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L173"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="173"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC173"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          rightController<span class="pl-kos">.</span
                          ><span class="pl-smi">GetComponentInChildren</span
                          ><span class="pl-c1">&lt;</span
                          ><span class="pl-smi">SkinnedMeshRenderer</span
                          ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                          ><span class="pl-kos">)</span><span class="pl-kos">.</span>enabled
                          <span class="pl-c1">=</span> <span class="pl-c1">true</span
                          ><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L174"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="174"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC174"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          rightHand<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                          ><span class="pl-kos">(</span><span class="pl-c1">false</span
                          ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L175"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="175"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC175"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L176"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="176"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC176"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L177"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="177"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC177"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">private</span> <span class="pl-smi">void</span>
                          <span class="pl-en">DisableUnityXRRightHand</span
                          ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L178"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="178"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC178"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L179"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="179"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC179"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">/*</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L180"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="180"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC180"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">
                            * Enables the planchette with right hand attached object</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L181"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="181"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC181"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c"> * Disables Unity XR Rigs right hand mesh</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L182"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="182"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC182"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c"> */</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L183"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="183"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC183"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L184"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="184"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC184"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-s1">heldBy</span> <span class="pl-c1">=</span>
                          <span class="pl-s"
                            ><span class="pl-s">"</span>right<span class="pl-s">"</span></span
                          ><span class="pl-kos">;</span>
                          <span class="pl-c"
                            >// Signals to Ouija.cs that Planchette is being held by right
                            controller</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L185"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="185"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC185"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          rightController<span class="pl-kos">.</span
                          ><span class="pl-smi">GetComponentInChildren</span
                          ><span class="pl-c1">&lt;</span
                          ><span class="pl-smi">SkinnedMeshRenderer</span
                          ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                          ><span class="pl-kos">)</span><span class="pl-kos">.</span>enabled
                          <span class="pl-c1">=</span> <span class="pl-c1">false</span
                          ><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L186"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="186"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC186"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          rightHand<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                          ><span class="pl-kos">(</span><span class="pl-c1">true</span
                          ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L187"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="187"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC187"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L188"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="188"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC188"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L189"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="189"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC189"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">private</span> <span class="pl-smi">void</span>
                          <span class="pl-en">EnableUnityXRLeftHand</span
                          ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L190"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="190"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC190"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L191"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="191"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC191"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">/*</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L192"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="192"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC192"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">
                            * Disables the planchette with left hand attached object</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L193"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="193"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC193"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">
                            * Enables Unity XR Rigs left hand and watch meshes</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L194"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="194"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC194"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c"> */</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L195"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="195"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC195"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L196"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="196"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC196"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          hands<span class="pl-kos">.</span><span class="pl-en">Remove</span
                          ><span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>left<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L197"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="197"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC197"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-s1">heldBy</span> <span class="pl-c1">=</span>
                          <span class="pl-s"
                            ><span class="pl-s">"</span><span class="pl-s">"</span></span
                          ><span class="pl-kos">;</span>
                          <span class="pl-c"
                            >// Signals to Ouija.cs that Planchette is being held by no
                            controller</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L198"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="198"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC198"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          leftController<span class="pl-kos">.</span
                          ><span class="pl-smi">GetComponentInChildren</span
                          ><span class="pl-c1">&lt;</span
                          ><span class="pl-smi">SkinnedMeshRenderer</span
                          ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                          ><span class="pl-kos">)</span><span class="pl-kos">.</span>enabled
                          <span class="pl-c1">=</span> <span class="pl-c1">true</span
                          ><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L199"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="199"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC199"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">// Enables watch</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L200"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="200"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC200"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">foreach</span>
                          <span class="pl-kos">(</span>MeshRenderer mesh
                          <span class="pl-k">in</span> leftController<span class="pl-kos">.</span
                          ><span class="pl-smi">GetComponentsInChildren</span
                          ><span class="pl-c1">&lt;</span><span class="pl-smi">MeshRenderer</span
                          ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                          ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L201"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="201"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC201"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L202"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="202"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC202"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          mesh<span class="pl-kos">.</span>enabled <span class="pl-c1">=</span>
                          <span class="pl-c1">true</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L203"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="203"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC203"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L204"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="204"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC204"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          leftHand<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                          ><span class="pl-kos">(</span><span class="pl-c1">false</span
                          ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L205"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="205"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC205"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L206"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="206"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC206"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L207"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="207"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC207"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">private</span> <span class="pl-smi">void</span>
                          <span class="pl-en">DisableUnityXRLeftHand</span
                          ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L208"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="208"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC208"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L209"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="209"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC209"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">/*</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L210"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="210"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC210"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">
                            * Enables the planchette with left hand attached object</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L211"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="211"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC211"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">
                            * Disables Unity XR Rigs left hand and watch meshes</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L212"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="212"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC212"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c"> */</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L213"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="213"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC213"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L214"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="214"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC214"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-s1">heldBy</span> <span class="pl-c1">=</span>
                          <span class="pl-s"
                            ><span class="pl-s">"</span>left<span class="pl-s">"</span></span
                          ><span class="pl-kos">;</span>
                          <span class="pl-c"
                            >// Signals to Ouija.cs that Planchette is being held by left
                            controller</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L215"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="215"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC215"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          leftController<span class="pl-kos">.</span
                          ><span class="pl-smi">GetComponentInChildren</span
                          ><span class="pl-c1">&lt;</span
                          ><span class="pl-smi">SkinnedMeshRenderer</span
                          ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                          ><span class="pl-kos">)</span><span class="pl-kos">.</span>enabled
                          <span class="pl-c1">=</span> <span class="pl-c1">false</span
                          ><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L216"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="216"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC216"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">// Disables watch</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L217"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="217"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC217"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">foreach</span>
                          <span class="pl-kos">(</span>MeshRenderer mesh
                          <span class="pl-k">in</span> leftController<span class="pl-kos">.</span
                          ><span class="pl-smi">GetComponentsInChildren</span
                          ><span class="pl-c1">&lt;</span><span class="pl-smi">MeshRenderer</span
                          ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                          ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L218"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="218"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC218"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L219"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="219"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC219"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          mesh<span class="pl-kos">.</span>enabled <span class="pl-c1">=</span>
                          <span class="pl-c1">false</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L220"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="220"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC220"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L221"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="221"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC221"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          leftHand<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                          ><span class="pl-kos">(</span><span class="pl-c1">true</span
                          ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L222"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="222"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC222"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L223"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="223"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC223"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L224"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="224"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC224"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">private</span> <span class="pl-smi">bool</span>
                          <span class="pl-en">IsOutOfBounds</span><span class="pl-kos">(</span
                          ><span class="pl-kos">)</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L225"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="225"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC225"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">{</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L226"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="226"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC226"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">/*</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L227"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="227"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC227"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c">
                            * Checks whether the planchette is out-of-bounds</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L228"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="228"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC228"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-c"> */</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L229"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="229"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC229"
                          class="blob-code blob-code-inner js-file-line"
                        ></td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L230"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="230"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC230"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-k">return</span>
                          <span class="pl-kos">(</span>transform<span class="pl-kos">.</span
                          >localPosition<span class="pl-kos">.</span>x
                          <span class="pl-c1">&gt;</span> <span class="pl-s1">xMax</span>
                          <span class="pl-c1">||</span> transform<span class="pl-kos">.</span
                          >localPosition<span class="pl-kos">.</span>x
                          <span class="pl-c1">&lt;</span> <span class="pl-s1">xMin</span>
                          <span class="pl-c1">||</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L231"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="231"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC231"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          transform<span class="pl-kos">.</span>localPosition<span class="pl-kos"
                            >.</span
                          >z <span class="pl-c1">&gt;</span> <span class="pl-s1">zMax</span>
                          <span class="pl-c1">||</span> transform<span class="pl-kos">.</span
                          >localPosition<span class="pl-kos">.</span>z
                          <span class="pl-c1">&lt;</span> <span class="pl-s1">zMin</span
                          ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L232"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="232"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC232"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="file-planchetteinteraction-cs-L233"
                          class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                          data-line-number="233"
                        ></td>
                        <td
                          id="file-planchetteinteraction-cs-LC233"
                          class="blob-code blob-code-inner js-file-line"
                        >
                          <span class="pl-kos">}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="gist-meta">
          <a
            href="https://gist.github.com/sadiecrawford/df3398461fde689e1fb99ee2848a37e0/raw/404d9c307dbe8d188b7789c32908bf6f39932f0c/PlanchetteInteraction.cs"
            style="float: right"
            class="Link--inTextBlock"
            >view raw</a
          >
          <a
            href="https://gist.github.com/sadiecrawford/df3398461fde689e1fb99ee2848a37e0#file-planchetteinteraction-cs"
            class="Link--inTextBlock"
          >
            PlanchetteInteraction.cs
          </a>
          hosted with ❤ by <a class="Link--inTextBlock" href="https://github.com">GitHub</a>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gist {
  overflow: auto;
}
.gist-file .gist-data {
  max-height: 500px;
}
</style>

<script lang="ts">
export default {
  name: 'GistPlanchetteInteraction'
}
</script>
