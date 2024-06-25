<script setup lang="ts"></script>

<template>
  <body></body>
  <link rel="stylesheet" href="../../src/assets/styles/gist.css" />

  <div class="gist">
    <div
      class="gist-file"
      translate="no"
      data-color-mode="color-scheme"
      data-light-theme="color-scheme"
    >
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container">
          <div id="file-puzzles-cs" class="file my-2">
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
                  data-tagsearch-path="Puzzles.cs"
                >
                  <tbody>
                    <tr>
                      <td
                        id="file-puzzles-cs-L1"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="1"
                      ></td>
                      <td id="file-puzzles-cs-LC1" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">using</span> System<span class="pl-kos">.</span
                        >Collections<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L2"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="2"
                      ></td>
                      <td id="file-puzzles-cs-LC2" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">using</span> System<span class="pl-kos">.</span
                        >Collections<span class="pl-kos">.</span>Generic<span class="pl-kos"
                          >;</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L3"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="3"
                      ></td>
                      <td id="file-puzzles-cs-LC3" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">using</span> UnityEngine<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L4"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="4"
                      ></td>
                      <td
                        id="file-puzzles-cs-LC4"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L5"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="5"
                      ></td>
                      <td id="file-puzzles-cs-LC5" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-k">class</span>
                        <span class="pl-smi">Puzzles</span> <span class="pl-c1">:</span>
                        <span class="pl-smi">MonoBehaviour</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L6"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="6"
                      ></td>
                      <td id="file-puzzles-cs-LC6" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L7"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="7"
                      ></td>
                      <td id="file-puzzles-cs-LC7" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Header<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>Portrait<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L8"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="8"
                      ></td>
                      <td id="file-puzzles-cs-LC8" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The portrait's canvas Renderer<span
                              class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L9"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="9"
                      ></td>
                      <td id="file-puzzles-cs-LC9" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">Renderer</span>
                        <span class="pl-s1">portraitRenderer</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L10"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="10"
                      ></td>
                      <td id="file-puzzles-cs-LC10" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The second portrait Material<span
                              class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L11"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="11"
                      ></td>
                      <td id="file-puzzles-cs-LC11" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">Material</span>
                        <span class="pl-s1">secondPortrait</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L12"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="12"
                      ></td>
                      <td id="file-puzzles-cs-LC12" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The third and final portrait animations
                            placed inside the frame<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L13"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="13"
                      ></td>
                      <td id="file-puzzles-cs-LC13" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">GameObject</span>
                        <span class="pl-s1">thirdPortrait</span><span class="pl-kos">,</span>
                        <span class="pl-s1">fourthPortrait</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L14"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="14"
                      ></td>
                      <td
                        id="file-puzzles-cs-LC14"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L15"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="15"
                      ></td>
                      <td id="file-puzzles-cs-LC15" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Header<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>Hands<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L16"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="16"
                      ></td>
                      <td id="file-puzzles-cs-LC16" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The left hand mesh Renderer<span
                              class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L17"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="17"
                      ></td>
                      <td id="file-puzzles-cs-LC17" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">Renderer</span>
                        <span class="pl-s1">leftHand</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L18"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="18"
                      ></td>
                      <td id="file-puzzles-cs-LC18" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The right hand mesh Renderer<span
                              class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L19"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="19"
                      ></td>
                      <td id="file-puzzles-cs-LC19" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">Renderer</span>
                        <span class="pl-s1">rightHand</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L20"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="20"
                      ></td>
                      <td id="file-puzzles-cs-LC20" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The materials for the second, third, and
                            fourth hands<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L21"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="21"
                      ></td>
                      <td id="file-puzzles-cs-LC21" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">Material</span>
                        <span class="pl-s1">hand2</span><span class="pl-kos">,</span>
                        <span class="pl-s1">hand3</span><span class="pl-kos">,</span>
                        <span class="pl-s1">hand4</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L22"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="22"
                      ></td>
                      <td
                        id="file-puzzles-cs-LC22"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L23"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="23"
                      ></td>
                      <td id="file-puzzles-cs-LC23" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Header<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>Clock<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L24"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="24"
                      ></td>
                      <td id="file-puzzles-cs-LC24" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The clock's animator<span class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L25"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="25"
                      ></td>
                      <td id="file-puzzles-cs-LC25" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">Animator</span>
                        <span class="pl-s1">clockAnim</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L26"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="26"
                      ></td>
                      <td id="file-puzzles-cs-LC26" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The clock's audio source<span class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L27"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="27"
                      ></td>
                      <td id="file-puzzles-cs-LC27" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">AudioSource</span>
                        <span class="pl-s1">clockChime</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L28"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="28"
                      ></td>
                      <td
                        id="file-puzzles-cs-LC28"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L29"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="29"
                      ></td>
                      <td id="file-puzzles-cs-LC29" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span>
                        <span class="pl-k"><span class="pl-k">static</span></span>
                        <span class="pl-smi">bool</span> <span class="pl-s1">candles</span
                        ><span class="pl-kos">,</span> <span class="pl-s1">ouija</span
                        ><span class="pl-kos">,</span> <span class="pl-s1">tile</span
                        ><span class="pl-kos">,</span> <span class="pl-s1">book</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L30"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="30"
                      ></td>
                      <td id="file-puzzles-cs-LC30" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">bool</span> <span class="pl-s1">isOuijaSwitched</span
                        ><span class="pl-kos">,</span> <span class="pl-s1">isTileSwitched</span
                        ><span class="pl-kos">,</span> <span class="pl-s1">isBookSwitched</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L31"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="31"
                      ></td>
                      <td id="file-puzzles-cs-LC31" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">int</span> <span class="pl-s1">stateIndex</span>
                        <span class="pl-c1">=</span> <span class="pl-c1">0</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L32"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="32"
                      ></td>
                      <td
                        id="file-puzzles-cs-LC32"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L33"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="33"
                      ></td>
                      <td id="file-puzzles-cs-LC33" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">void</span> <span class="pl-en">Update</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L34"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="34"
                      ></td>
                      <td id="file-puzzles-cs-LC34" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L35"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="35"
                      ></td>
                      <td id="file-puzzles-cs-LC35" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// State Changes</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L36"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="36"
                      ></td>
                      <td id="file-puzzles-cs-LC36" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-s1">ouija</span> <span class="pl-c1">&amp;&amp;</span>
                        <span class="pl-c1">!</span><span class="pl-s1">isOuijaSwitched</span
                        ><span class="pl-kos">)</span>
                        <span class="pl-c">// Ouija board complete</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L37"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="37"
                      ></td>
                      <td id="file-puzzles-cs-LC37" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L38"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="38"
                      ></td>
                      <td id="file-puzzles-cs-LC38" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">isOuijaSwitched</span> <span class="pl-c1">=</span>
                        <span class="pl-c1">true</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L39"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="39"
                      ></td>
                      <td id="file-puzzles-cs-LC39" class="blob-code blob-code-inner js-file-line">
                        StateChange<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L40"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="40"
                      ></td>
                      <td id="file-puzzles-cs-LC40" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span> <span class="pl-k">else</span>
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-s1">tile</span> <span class="pl-c1">&amp;&amp;</span>
                        <span class="pl-c1">!</span><span class="pl-s1">isTileSwitched</span
                        ><span class="pl-kos">)</span>
                        <span class="pl-c">// Ankh tiles complete</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L41"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="41"
                      ></td>
                      <td id="file-puzzles-cs-LC41" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L42"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="42"
                      ></td>
                      <td id="file-puzzles-cs-LC42" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">isTileSwitched</span> <span class="pl-c1">=</span>
                        <span class="pl-c1">true</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L43"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="43"
                      ></td>
                      <td id="file-puzzles-cs-LC43" class="blob-code blob-code-inner js-file-line">
                        StateChange<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L44"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="44"
                      ></td>
                      <td id="file-puzzles-cs-LC44" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span> <span class="pl-k">else</span>
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-s1">book</span> <span class="pl-c1">&amp;&amp;</span>
                        <span class="pl-c1">!</span><span class="pl-s1">isBookSwitched</span
                        ><span class="pl-kos">)</span> <span class="pl-c">// Book complete</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L45"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="45"
                      ></td>
                      <td id="file-puzzles-cs-LC45" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L46"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="46"
                      ></td>
                      <td id="file-puzzles-cs-LC46" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">isBookSwitched</span> <span class="pl-c1">=</span>
                        <span class="pl-c1">true</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L47"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="47"
                      ></td>
                      <td id="file-puzzles-cs-LC47" class="blob-code blob-code-inner js-file-line">
                        StateChange<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L48"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="48"
                      ></td>
                      <td id="file-puzzles-cs-LC48" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L49"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="49"
                      ></td>
                      <td id="file-puzzles-cs-LC49" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L50"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="50"
                      ></td>
                      <td
                        id="file-puzzles-cs-LC50"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L51"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="51"
                      ></td>
                      <td id="file-puzzles-cs-LC51" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">void</span> <span class="pl-en">StateChange</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L52"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="52"
                      ></td>
                      <td id="file-puzzles-cs-LC52" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L53"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="53"
                      ></td>
                      <td id="file-puzzles-cs-LC53" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">/*</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L54"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="54"
                      ></td>
                      <td id="file-puzzles-cs-LC54" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c"> * Increments the current state of the game</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L55"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="55"
                      ></td>
                      <td id="file-puzzles-cs-LC55" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">
                          * Allows state changes if puzzles are completed out of order</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L56"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="56"
                      ></td>
                      <td id="file-puzzles-cs-LC56" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c"> */</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L57"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="57"
                      ></td>
                      <td
                        id="file-puzzles-cs-LC57"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L58"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="58"
                      ></td>
                      <td id="file-puzzles-cs-LC58" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">stateIndex</span><span class="pl-c1">++</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L59"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="59"
                      ></td>
                      <td
                        id="file-puzzles-cs-LC59"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L60"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="60"
                      ></td>
                      <td id="file-puzzles-cs-LC60" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-s1">stateIndex</span> <span class="pl-c1">&gt;</span>
                        <span class="pl-c1">3</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L61"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="61"
                      ></td>
                      <td id="file-puzzles-cs-LC61" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">return</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L62"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="62"
                      ></td>
                      <td
                        id="file-puzzles-cs-LC62"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L63"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="63"
                      ></td>
                      <td id="file-puzzles-cs-LC63" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-s1">stateIndex</span> <span class="pl-c1">==</span>
                        <span class="pl-c1">1</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L64"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="64"
                      ></td>
                      <td id="file-puzzles-cs-LC64" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L65"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="65"
                      ></td>
                      <td id="file-puzzles-cs-LC65" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Changes to young portrait, ages hands slightly</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L66"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="66"
                      ></td>
                      <td id="file-puzzles-cs-LC66" class="blob-code blob-code-inner js-file-line">
                        portraitRenderer<span class="pl-kos">.</span>material
                        <span class="pl-c1">=</span> <span class="pl-s1">secondPortrait</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L67"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="67"
                      ></td>
                      <td id="file-puzzles-cs-LC67" class="blob-code blob-code-inner js-file-line">
                        leftHand<span class="pl-kos">.</span>material <span class="pl-c1">=</span>
                        <span class="pl-s1">hand2</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L68"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="68"
                      ></td>
                      <td id="file-puzzles-cs-LC68" class="blob-code blob-code-inner js-file-line">
                        rightHand<span class="pl-kos">.</span>material <span class="pl-c1">=</span>
                        <span class="pl-s1">hand2</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L69"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="69"
                      ></td>
                      <td id="file-puzzles-cs-LC69" class="blob-code blob-code-inner js-file-line">
                        clockAnim<span class="pl-kos">.</span><span class="pl-en">Play</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>Clock_1115<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L70"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="70"
                      ></td>
                      <td id="file-puzzles-cs-LC70" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span> <span class="pl-k">else</span>
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-s1">stateIndex</span> <span class="pl-c1">==</span>
                        <span class="pl-c1">2</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L71"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="71"
                      ></td>
                      <td id="file-puzzles-cs-LC71" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L72"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="72"
                      ></td>
                      <td id="file-puzzles-cs-LC72" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Changes to glitchy portrait, ages hands further</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L73"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="73"
                      ></td>
                      <td id="file-puzzles-cs-LC73" class="blob-code blob-code-inner js-file-line">
                        portraitRenderer<span class="pl-kos">.</span>gameObject<span class="pl-kos"
                          >.</span
                        ><span class="pl-en">SetActive</span><span class="pl-kos">(</span
                        ><span class="pl-c1">false</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L74"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="74"
                      ></td>
                      <td id="file-puzzles-cs-LC74" class="blob-code blob-code-inner js-file-line">
                        thirdPortrait<span class="pl-kos">.</span
                        ><span class="pl-en">SetActive</span><span class="pl-kos">(</span
                        ><span class="pl-c1">true</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L75"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="75"
                      ></td>
                      <td id="file-puzzles-cs-LC75" class="blob-code blob-code-inner js-file-line">
                        leftHand<span class="pl-kos">.</span>material <span class="pl-c1">=</span>
                        <span class="pl-s1">hand3</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L76"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="76"
                      ></td>
                      <td id="file-puzzles-cs-LC76" class="blob-code blob-code-inner js-file-line">
                        rightHand<span class="pl-kos">.</span>material <span class="pl-c1">=</span>
                        <span class="pl-s1">hand3</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L77"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="77"
                      ></td>
                      <td id="file-puzzles-cs-LC77" class="blob-code blob-code-inner js-file-line">
                        clockAnim<span class="pl-kos">.</span><span class="pl-en">Play</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>Clock_1130<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L78"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="78"
                      ></td>
                      <td id="file-puzzles-cs-LC78" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span> <span class="pl-k">else</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L79"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="79"
                      ></td>
                      <td id="file-puzzles-cs-LC79" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L80"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="80"
                      ></td>
                      <td id="file-puzzles-cs-LC80" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Changes to scary portrait, hands fully aged</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L81"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="81"
                      ></td>
                      <td id="file-puzzles-cs-LC81" class="blob-code blob-code-inner js-file-line">
                        thirdPortrait<span class="pl-kos">.</span
                        ><span class="pl-en">SetActive</span><span class="pl-kos">(</span
                        ><span class="pl-c1">false</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L82"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="82"
                      ></td>
                      <td id="file-puzzles-cs-LC82" class="blob-code blob-code-inner js-file-line">
                        fourthPortrait<span class="pl-kos">.</span
                        ><span class="pl-en">SetActive</span><span class="pl-kos">(</span
                        ><span class="pl-c1">true</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L83"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="83"
                      ></td>
                      <td id="file-puzzles-cs-LC83" class="blob-code blob-code-inner js-file-line">
                        leftHand<span class="pl-kos">.</span>material <span class="pl-c1">=</span>
                        <span class="pl-s1">hand4</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L84"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="84"
                      ></td>
                      <td id="file-puzzles-cs-LC84" class="blob-code blob-code-inner js-file-line">
                        rightHand<span class="pl-kos">.</span>material <span class="pl-c1">=</span>
                        <span class="pl-s1">hand4</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L85"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="85"
                      ></td>
                      <td id="file-puzzles-cs-LC85" class="blob-code blob-code-inner js-file-line">
                        clockAnim<span class="pl-kos">.</span><span class="pl-en">Play</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>Clock_1145<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L86"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="86"
                      ></td>
                      <td id="file-puzzles-cs-LC86" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L87"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="87"
                      ></td>
                      <td
                        id="file-puzzles-cs-LC87"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L88"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="88"
                      ></td>
                      <td id="file-puzzles-cs-LC88" class="blob-code blob-code-inner js-file-line">
                        clockChime<span class="pl-kos">.</span><span class="pl-en">PlayOneShot</span
                        ><span class="pl-kos">(</span>clockChime<span class="pl-kos">.</span
                        >clip<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L89"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="89"
                      ></td>
                      <td id="file-puzzles-cs-LC89" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-puzzles-cs-L90"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="90"
                      ></td>
                      <td id="file-puzzles-cs-LC90" class="blob-code blob-code-inner js-file-line">
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
          href="https://gist.github.com/sadiecrawford/88374b827cf696a9f5c884409cbc4e71/raw/67ab5118b90a305f4ae6df6a82f56efd8e4b9805/Puzzles.cs"
          style="float: right"
          class="Link--inTextBlock"
          >view raw</a
        >
        <a
          href="https://gist.github.com/sadiecrawford/88374b827cf696a9f5c884409cbc4e71#file-puzzles-cs"
          class="Link--inTextBlock"
        >
          Puzzles.cs
        </a>
        hosted with ❤ by <a class="Link--inTextBlock" href="https://github.com">GitHub</a>
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
  name: 'GistPuzzles'
}
</script>
