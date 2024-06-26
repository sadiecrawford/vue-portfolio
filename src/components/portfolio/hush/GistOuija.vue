<script setup lang="ts"></script>

<template>
  <div class="gist">
    <div
      class="gist-file"
      translate="no"
      data-color-mode="color-scheme"
      data-light-theme="color-scheme"
    >
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container">
          <div id="file-ouija-cs" class="file my-2">
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
                  data-tagsearch-path="Ouija.cs"
                >
                  <tbody>
                    <tr>
                      <td
                        id="file-ouija-cs-L1"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="1"
                      ></td>
                      <td id="file-ouija-cs-LC1" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">using</span> System<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L2"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="2"
                      ></td>
                      <td id="file-ouija-cs-LC2" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">using</span> System<span class="pl-kos">.</span
                        >Collections<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L3"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="3"
                      ></td>
                      <td id="file-ouija-cs-LC3" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">using</span> System<span class="pl-kos">.</span
                        >Collections<span class="pl-kos">.</span>Generic<span class="pl-kos"
                          >;</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L4"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="4"
                      ></td>
                      <td id="file-ouija-cs-LC4" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">using</span> UnityEngine<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L5"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="5"
                      ></td>
                      <td id="file-ouija-cs-LC5" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">using</span> UnityEngine<span class="pl-kos">.</span
                        >XR<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L6"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="6"
                      ></td>
                      <td
                        id="file-ouija-cs-LC6"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L7"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="7"
                      ></td>
                      <td id="file-ouija-cs-LC7" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-k">class</span>
                        <span class="pl-smi">Ouija</span> <span class="pl-c1">:</span>
                        <span class="pl-smi">MonoBehaviour</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L8"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="8"
                      ></td>
                      <td id="file-ouija-cs-LC8" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L9"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="9"
                      ></td>
                      <td id="file-ouija-cs-LC9" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The planchette's glass eye to calculate
                            distance to letters<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L10"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="10"
                      ></td>
                      <td id="file-ouija-cs-LC10" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">GameObject</span>
                        <span class="pl-s1">planchette</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L11"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="11"
                      ></td>
                      <td id="file-ouija-cs-LC11" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The list containing each of the letter's
                            triggers<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L12"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="12"
                      ></td>
                      <td id="file-ouija-cs-LC12" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">GameObject</span>
                        <span class="pl-s1">letterParent</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L13"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="13"
                      ></td>
                      <td id="file-ouija-cs-LC13" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>List of chalkboard writing audio clips for
                            letter animations<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L14"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="14"
                      ></td>
                      <td id="file-ouija-cs-LC14" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">List</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">AudioClip</span
                        ><span class="pl-c1">&gt;</span> <span class="pl-s1">audio</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L15"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="15"
                      ></td>
                      <td id="file-ouija-cs-LC15" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The audio clip for chalkboard erasing<span
                              class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L16"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="16"
                      ></td>
                      <td id="file-ouija-cs-LC16" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">AudioClip</span>
                        <span class="pl-s1">eraseAudio</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L17"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="17"
                      ></td>
                      <td id="file-ouija-cs-LC17" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The chalkboard's AudioSource<span
                              class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L18"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="18"
                      ></td>
                      <td id="file-ouija-cs-LC18" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">AudioSource</span>
                        <span class="pl-s1">audioSource</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L19"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="19"
                      ></td>
                      <td id="file-ouija-cs-LC19" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The parents containing the animated letters
                            that form their respective phrases<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L20"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="20"
                      ></td>
                      <td id="file-ouija-cs-LC20" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">GameObject</span>
                        <span class="pl-s1">dangerParent</span><span class="pl-kos">,</span>
                        <span class="pl-s1">hungryParent</span><span class="pl-kos">,</span>
                        <span class="pl-s1">notesParent</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L21"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="21"
                      ></td>
                      <td id="file-ouija-cs-LC21" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The animator which opens the note
                            drawer<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L22"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="22"
                      ></td>
                      <td id="file-ouija-cs-LC22" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">Animator</span>
                        <span class="pl-s1">drawerAnimator</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L23"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="23"
                      ></td>
                      <td
                        id="file-ouija-cs-LC23"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L24"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="24"
                      ></td>
                      <td id="file-ouija-cs-LC24" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">float</span> <span class="pl-s1">distToCurrent</span
                        ><span class="pl-kos">;</span>
                        <span class="pl-c"
                          >// Distance from Planchettes glass to the next letters collider</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L25"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="25"
                      ></td>
                      <td id="file-ouija-cs-LC25" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">List</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">Vector3</span><span class="pl-c1">&gt;</span>
                        <span class="pl-s1">lettersPos</span><span class="pl-kos">;</span>
                        <span class="pl-c">// Positions of each letters collider</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L26"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="26"
                      ></td>
                      <td
                        id="file-ouija-cs-LC26"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L27"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="27"
                      ></td>
                      <td id="file-ouija-cs-LC27" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">bool</span> <span class="pl-s1">animatingLetter</span
                        ><span class="pl-kos">,</span> <span class="pl-s1">waiting</span
                        ><span class="pl-kos">;</span>
                        <span class="pl-c"
                          >// Tracks if animation playing / board waiting to be erased</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L28"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="28"
                      ></td>
                      <td id="file-ouija-cs-LC28" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">List</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">GameObject</span><span class="pl-c1">&gt;</span>
                        <span class="pl-s1">danger</span><span class="pl-kos">,</span>
                        <span class="pl-s1">hungry</span><span class="pl-kos">,</span>
                        <span class="pl-s1">notes</span><span class="pl-kos">;</span>
                        <span class="pl-c">// The animated letter GameObjects for each word</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L29"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="29"
                      ></td>
                      <td id="file-ouija-cs-LC29" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">Animator</span> <span class="pl-s1">currAnimator</span
                        ><span class="pl-kos">;</span>
                        <span class="pl-c"
                          >// The current animator (to track if animation still playing)</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L30"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="30"
                      ></td>
                      <td
                        id="file-ouija-cs-LC30"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L31"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="31"
                      ></td>
                      <td id="file-ouija-cs-LC31" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Word tracking variables</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L32"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="32"
                      ></td>
                      <td id="file-ouija-cs-LC32" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">List</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">string</span><span class="pl-c1">&gt;</span>
                        <span class="pl-s1">words</span> <span class="pl-c1">=</span>
                        <span class="pl-k">new</span> <span class="pl-smi">List</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">string</span
                        ><span class="pl-c1">&gt;</span> <span class="pl-kos">{</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>DANGER<span class="pl-s">"</span></span
                        ><span class="pl-kos">,</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>HEISHUNGRY<span class="pl-s">"</span></span
                        ><span class="pl-kos">,</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>FINDNOTES<span class="pl-s">"</span></span
                        >
                        <span class="pl-kos">}</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L33"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="33"
                      ></td>
                      <td id="file-ouija-cs-LC33" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">string</span> <span class="pl-s1">word</span>
                        <span class="pl-c1">=</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>DANGER<span class="pl-s">"</span></span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L34"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="34"
                      ></td>
                      <td id="file-ouija-cs-LC34" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">int</span> <span class="pl-s1">lettersIndex</span>
                        <span class="pl-c1">=</span> <span class="pl-c1">0</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L35"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="35"
                      ></td>
                      <td id="file-ouija-cs-LC35" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">int</span> <span class="pl-s1">wordIndex</span>
                        <span class="pl-c1">=</span> <span class="pl-c1">0</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L36"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="36"
                      ></td>
                      <td
                        id="file-ouija-cs-LC36"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L37"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="37"
                      ></td>
                      <td id="file-ouija-cs-LC37" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">InputDevice</span> <span class="pl-s1">hand</span
                        ><span class="pl-kos">;</span>
                        <span class="pl-c">// Hand holding the Planchette</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L38"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="38"
                      ></td>
                      <td id="file-ouija-cs-LC38" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">bool</span> <span class="pl-s1">puzzleComplete</span
                        ><span class="pl-kos">;</span>
                        <span class="pl-c">// Tracks puzzle completion</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L39"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="39"
                      ></td>
                      <td
                        id="file-ouija-cs-LC39"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L40"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="40"
                      ></td>
                      <td id="file-ouija-cs-LC40" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">private</span> <span class="pl-smi">void</span>
                        <span class="pl-en">Start</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L41"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="41"
                      ></td>
                      <td id="file-ouija-cs-LC41" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L42"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="42"
                      ></td>
                      <td id="file-ouija-cs-LC42" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c"
                          >// Gets the positions of the letter cubes in Letters</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L43"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="43"
                      ></td>
                      <td id="file-ouija-cs-LC43" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">lettersPos</span> <span class="pl-c1">=</span>
                        <span class="pl-k">new</span> <span class="pl-smi">List</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">Vector3</span
                        ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L44"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="44"
                      ></td>
                      <td id="file-ouija-cs-LC44" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">foreach</span> <span class="pl-kos">(</span>Transform
                        letter <span class="pl-k">in</span> letterParent<span class="pl-kos">.</span
                        >transform<span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L45"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="45"
                      ></td>
                      <td id="file-ouija-cs-LC45" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L46"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="46"
                      ></td>
                      <td id="file-ouija-cs-LC46" class="blob-code blob-code-inner js-file-line">
                        lettersPos<span class="pl-kos">.</span><span class="pl-en">Add</span
                        ><span class="pl-kos">(</span>letter<span class="pl-kos">.</span
                        >gameObject<span class="pl-kos">.</span>transform<span class="pl-kos"
                          >.</span
                        >position<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L47"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="47"
                      ></td>
                      <td id="file-ouija-cs-LC47" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L48"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="48"
                      ></td>
                      <td
                        id="file-ouija-cs-LC48"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L49"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="49"
                      ></td>
                      <td id="file-ouija-cs-LC49" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Gets the letters in each phrase</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L50"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="50"
                      ></td>
                      <td id="file-ouija-cs-LC50" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">danger</span>
                        <span class="pl-c1">=</span> GetChildren<span class="pl-kos">(</span
                        >dangerParent<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L51"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="51"
                      ></td>
                      <td id="file-ouija-cs-LC51" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">hungry</span>
                        <span class="pl-c1">=</span> GetChildren<span class="pl-kos">(</span
                        >hungryParent<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L52"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="52"
                      ></td>
                      <td id="file-ouija-cs-LC52" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">notes</span>
                        <span class="pl-c1">=</span> GetChildren<span class="pl-kos">(</span
                        >notesParent<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L53"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="53"
                      ></td>
                      <td id="file-ouija-cs-LC53" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L54"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="54"
                      ></td>
                      <td
                        id="file-ouija-cs-LC54"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L55"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="55"
                      ></td>
                      <td id="file-ouija-cs-LC55" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">private</span> <span class="pl-smi">void</span>
                        <span class="pl-en">Update</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L56"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="56"
                      ></td>
                      <td id="file-ouija-cs-LC56" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L57"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="57"
                      ></td>
                      <td id="file-ouija-cs-LC57" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span>
                        <span class="pl-kos">(</span>animatingLetter<span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L58"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="58"
                      ></td>
                      <td id="file-ouija-cs-LC58" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L59"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="59"
                      ></td>
                      <td id="file-ouija-cs-LC59" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// If done animating letter...</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L60"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="60"
                      ></td>
                      <td id="file-ouija-cs-LC60" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>currAnimator<span
                          class="pl-kos"
                          >.</span
                        ><span class="pl-en">GetCurrentAnimatorStateInfo</span
                        ><span class="pl-kos">(</span><span class="pl-c1">0</span
                        ><span class="pl-kos">)</span><span class="pl-kos">.</span>normalizedTime
                        <span class="pl-c1">&gt;</span> <span class="pl-c1">1</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L61"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="61"
                      ></td>
                      <td id="file-ouija-cs-LC61" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L62"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="62"
                      ></td>
                      <td id="file-ouija-cs-LC62" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">animatingLetter</span> <span class="pl-c1">=</span>
                        <span class="pl-c1">false</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L63"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="63"
                      ></td>
                      <td
                        id="file-ouija-cs-LC63"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L64"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="64"
                      ></td>
                      <td id="file-ouija-cs-LC64" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-s1">lettersIndex</span> &gt;= word<span class="pl-kos"
                          >.</span
                        >Length<span class="pl-kos">)</span>
                        <span class="pl-c">// Word complete</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L65"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="65"
                      ></td>
                      <td id="file-ouija-cs-LC65" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L66"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="66"
                      ></td>
                      <td id="file-ouija-cs-LC66" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-s1">word</span> <span class="pl-c1">==</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>FINDNOTES<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span>
                        <span class="pl-c">// Finished last word</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L67"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="67"
                      ></td>
                      <td id="file-ouija-cs-LC67" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L68"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="68"
                      ></td>
                      <td id="file-ouija-cs-LC68" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Open drawer, set Ouija puzzle as complete</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L69"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="69"
                      ></td>
                      <td id="file-ouija-cs-LC69" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">puzzleComplete</span> <span class="pl-c1">=</span>
                        <span class="pl-c1">true</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L70"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="70"
                      ></td>
                      <td id="file-ouija-cs-LC70" class="blob-code blob-code-inner js-file-line">
                        drawerAnimator<span class="pl-kos">.</span><span class="pl-en">SetBool</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>Open<span class="pl-s">"</span></span
                        ><span class="pl-kos">,</span> <span class="pl-c1">true</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L71"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="71"
                      ></td>
                      <td id="file-ouija-cs-LC71" class="blob-code blob-code-inner js-file-line">
                        Puzzles<span class="pl-kos">.</span>ouija <span class="pl-c1">=</span>
                        <span class="pl-c1">true</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L72"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="72"
                      ></td>
                      <td id="file-ouija-cs-LC72" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L73"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="73"
                      ></td>
                      <td id="file-ouija-cs-LC73" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">else</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L74"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="74"
                      ></td>
                      <td id="file-ouija-cs-LC74" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L75"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="75"
                      ></td>
                      <td id="file-ouija-cs-LC75" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Increment to next word, erase current word</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L76"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="76"
                      ></td>
                      <td id="file-ouija-cs-LC76" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">wordIndex</span><span class="pl-c1">++</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L77"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="77"
                      ></td>
                      <td id="file-ouija-cs-LC77" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">word</span> <span class="pl-c1">=</span> words<span
                          class="pl-kos"
                          >[</span
                        >wordIndex<span class="pl-kos">]</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L78"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="78"
                      ></td>
                      <td id="file-ouija-cs-LC78" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">lettersIndex</span> <span class="pl-c1">=</span>
                        <span class="pl-c1">0</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L79"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="79"
                      ></td>
                      <td id="file-ouija-cs-LC79" class="blob-code blob-code-inner js-file-line">
                        Erase<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L80"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="80"
                      ></td>
                      <td id="file-ouija-cs-LC80" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L81"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="81"
                      ></td>
                      <td id="file-ouija-cs-LC81" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L82"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="82"
                      ></td>
                      <td id="file-ouija-cs-LC82" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L83"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="83"
                      ></td>
                      <td
                        id="file-ouija-cs-LC83"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L84"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="84"
                      ></td>
                      <td id="file-ouija-cs-LC84" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">HapticCapabilities</span> <span class="pl-s1">cap</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L85"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="85"
                      ></td>
                      <td id="file-ouija-cs-LC85" class="blob-code blob-code-inner js-file-line">
                        SetHand<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L86"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="86"
                      ></td>
                      <td id="file-ouija-cs-LC86" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>IsHolding<span
                          class="pl-kos"
                          >(</span
                        ><span class="pl-kos">)</span>
                        <span class="pl-c1">&amp;&amp;</span> hand<span class="pl-kos">.</span
                        ><span class="pl-en">TryGetHapticCapabilities</span
                        ><span class="pl-kos">(</span><span class="pl-k">out</span> cap<span
                          class="pl-kos"
                          >)</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L87"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="87"
                      ></td>
                      <td id="file-ouija-cs-LC87" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L88"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="88"
                      ></td>
                      <td id="file-ouija-cs-LC88" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>cap<span
                          class="pl-kos"
                          >.</span
                        >supportsImpulse<span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L89"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="89"
                      ></td>
                      <td id="file-ouija-cs-LC89" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L90"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="90"
                      ></td>
                      <td id="file-ouija-cs-LC90" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c"
                          >// Decreases haptic feedback through course of animation</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L91"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="91"
                      ></td>
                      <td id="file-ouija-cs-LC91" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">float</span> <span class="pl-s1">strength</span>
                        <span class="pl-c1">=</span> Mathf<span class="pl-kos">.</span
                        ><span class="pl-en">Clamp</span><span class="pl-kos">(</span
                        ><span class="pl-c1">1.0f</span>
                        <span class="pl-c1">-</span> currAnimator<span class="pl-kos">.</span
                        ><span class="pl-en">GetCurrentAnimatorStateInfo</span
                        ><span class="pl-kos">(</span><span class="pl-c1">0</span
                        ><span class="pl-kos">)</span
                        ><span class="pl-kos">.</span>normalizedTime<span class="pl-kos">,</span>
                        <span class="pl-c1">0</span><span class="pl-kos">,</span>
                        <span class="pl-c1">1</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L92"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="92"
                      ></td>
                      <td id="file-ouija-cs-LC92" class="blob-code blob-code-inner js-file-line">
                        hand<span class="pl-kos">.</span><span class="pl-en">SendHapticImpulse</span
                        ><span class="pl-kos">(</span><span class="pl-c1">0</span
                        ><span class="pl-kos">,</span> strength<span class="pl-kos">,</span>
                        <span class="pl-c1">0.1f</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L93"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="93"
                      ></td>
                      <td id="file-ouija-cs-LC93" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L94"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="94"
                      ></td>
                      <td id="file-ouija-cs-LC94" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L95"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="95"
                      ></td>
                      <td id="file-ouija-cs-LC95" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L96"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="96"
                      ></td>
                      <td id="file-ouija-cs-LC96" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">else</span> <span class="pl-k">if</span>
                        <span class="pl-kos">(</span><span class="pl-c1">!</span
                        ><span class="pl-s1">puzzleComplete</span>
                        <span class="pl-c1">&amp;&amp;</span> <span class="pl-c1">!</span
                        ><span class="pl-s1">waiting</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L97"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="97"
                      ></td>
                      <td id="file-ouija-cs-LC97" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L98"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="98"
                      ></td>
                      <td id="file-ouija-cs-LC98" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Distance to the current, correct letter</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L99"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="99"
                      ></td>
                      <td id="file-ouija-cs-LC99" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">distToCurrent</span>
                        <span class="pl-c1">=</span> Vector3<span class="pl-kos">.</span
                        ><span class="pl-en">Distance</span
                        ><span class="pl-kos">(</span>planchette<span class="pl-kos">.</span
                        >transform<span class="pl-kos">.</span>position<span class="pl-kos">,</span>
                        lettersPos<span class="pl-kos">[</span>GetAlphabetIndex<span class="pl-kos"
                          >(</span
                        >word<span class="pl-kos">[</span>lettersIndex<span class="pl-kos">]</span
                        ><span class="pl-kos">)</span><span class="pl-kos">]</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L100"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="100"
                      ></td>
                      <td
                        id="file-ouija-cs-LC100"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L101"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="101"
                      ></td>
                      <td id="file-ouija-cs-LC101" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c"
                          >// Sets hand to right or left controller devices (or null if not holding
                          planchette)</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L102"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="102"
                      ></td>
                      <td id="file-ouija-cs-LC102" class="blob-code blob-code-inner js-file-line">
                        SetHand<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L103"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="103"
                      ></td>
                      <td
                        id="file-ouija-cs-LC103"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L104"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="104"
                      ></td>
                      <td id="file-ouija-cs-LC104" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c"
                          >// Sets haptic feedback strength based on distance to correct
                          letter</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L105"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="105"
                      ></td>
                      <td id="file-ouija-cs-LC105" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">HapticCapabilities</span> <span class="pl-s1">cap</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L106"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="106"
                      ></td>
                      <td id="file-ouija-cs-LC106" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>IsHolding<span
                          class="pl-kos"
                          >(</span
                        ><span class="pl-kos">)</span>
                        <span class="pl-c1">&amp;&amp;</span> hand<span class="pl-kos">.</span
                        ><span class="pl-en">TryGetHapticCapabilities</span
                        ><span class="pl-kos">(</span><span class="pl-k">out</span> cap<span
                          class="pl-kos"
                          >)</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L107"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="107"
                      ></td>
                      <td id="file-ouija-cs-LC107" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L108"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="108"
                      ></td>
                      <td id="file-ouija-cs-LC108" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>cap<span
                          class="pl-kos"
                          >.</span
                        >supportsImpulse<span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L109"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="109"
                      ></td>
                      <td id="file-ouija-cs-LC109" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L110"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="110"
                      ></td>
                      <td id="file-ouija-cs-LC110" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">float</span> <span class="pl-s1">strength</span>
                        <span class="pl-c1">=</span> Mathf<span class="pl-kos">.</span
                        ><span class="pl-en">Clamp</span><span class="pl-kos">(</span
                        ><span class="pl-c1">1.0f</span> <span class="pl-c1">-</span>
                        <span class="pl-s1">distToCurrent</span><span class="pl-kos">,</span>
                        <span class="pl-c1">0f</span><span class="pl-kos">,</span>
                        <span class="pl-c1">1.0f</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L111"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="111"
                      ></td>
                      <td id="file-ouija-cs-LC111" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-s1">strength</span> <span class="pl-c1">&lt;</span>
                        <span class="pl-c1">0.8</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L112"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="112"
                      ></td>
                      <td id="file-ouija-cs-LC112" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L113"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="113"
                      ></td>
                      <td id="file-ouija-cs-LC113" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">strength</span> *= <span class="pl-c1">0.5f</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L114"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="114"
                      ></td>
                      <td id="file-ouija-cs-LC114" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span> <span class="pl-k">else</span>
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-s1">strength</span> <span class="pl-c1">&lt;</span>
                        <span class="pl-c1">0.9</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L115"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="115"
                      ></td>
                      <td id="file-ouija-cs-LC115" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L116"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="116"
                      ></td>
                      <td id="file-ouija-cs-LC116" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">strength</span> *= <span class="pl-c1">0.8f</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L117"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="117"
                      ></td>
                      <td id="file-ouija-cs-LC117" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span> <span class="pl-k">else</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L118"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="118"
                      ></td>
                      <td id="file-ouija-cs-LC118" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L119"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="119"
                      ></td>
                      <td id="file-ouija-cs-LC119" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">strength</span> <span class="pl-c1">=</span>
                        <span class="pl-c1">1.0f</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L120"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="120"
                      ></td>
                      <td id="file-ouija-cs-LC120" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L121"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="121"
                      ></td>
                      <td
                        id="file-ouija-cs-LC121"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L122"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="122"
                      ></td>
                      <td id="file-ouija-cs-LC122" class="blob-code blob-code-inner js-file-line">
                        hand<span class="pl-kos">.</span><span class="pl-en">SendHapticImpulse</span
                        ><span class="pl-kos">(</span><span class="pl-c1">0</span
                        ><span class="pl-kos">,</span> strength<span class="pl-kos">,</span>
                        <span class="pl-c1">0.1f</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L123"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="123"
                      ></td>
                      <td id="file-ouija-cs-LC123" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L124"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="124"
                      ></td>
                      <td id="file-ouija-cs-LC124" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L125"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="125"
                      ></td>
                      <td
                        id="file-ouija-cs-LC125"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L126"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="126"
                      ></td>
                      <td id="file-ouija-cs-LC126" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Animates letter if hovering over current letter</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L127"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="127"
                      ></td>
                      <td id="file-ouija-cs-LC127" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-s1">distToCurrent</span> <span class="pl-c1">&lt;</span>
                        <span class="pl-c1">0.06f</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L128"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="128"
                      ></td>
                      <td id="file-ouija-cs-LC128" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L129"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="129"
                      ></td>
                      <td id="file-ouija-cs-LC129" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-s1">word</span> <span class="pl-c1">==</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>DANGER<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L130"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="130"
                      ></td>
                      <td id="file-ouija-cs-LC130" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L131"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="131"
                      ></td>
                      <td id="file-ouija-cs-LC131" class="blob-code blob-code-inner js-file-line">
                        AnimateLetter<span class="pl-kos">(</span>danger<span class="pl-kos"
                          >,</span
                        >
                        lettersIndex<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L132"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="132"
                      ></td>
                      <td id="file-ouija-cs-LC132" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span> <span class="pl-k">else</span>
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-s1">word</span> <span class="pl-c1">==</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>HEISHUNGRY<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L133"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="133"
                      ></td>
                      <td id="file-ouija-cs-LC133" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L134"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="134"
                      ></td>
                      <td id="file-ouija-cs-LC134" class="blob-code blob-code-inner js-file-line">
                        AnimateLetter<span class="pl-kos">(</span>hungry<span class="pl-kos"
                          >,</span
                        >
                        lettersIndex<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L135"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="135"
                      ></td>
                      <td id="file-ouija-cs-LC135" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span> <span class="pl-k">else</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L136"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="136"
                      ></td>
                      <td id="file-ouija-cs-LC136" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L137"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="137"
                      ></td>
                      <td id="file-ouija-cs-LC137" class="blob-code blob-code-inner js-file-line">
                        AnimateLetter<span class="pl-kos">(</span>notes<span class="pl-kos">,</span>
                        lettersIndex<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L138"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="138"
                      ></td>
                      <td id="file-ouija-cs-LC138" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L139"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="139"
                      ></td>
                      <td id="file-ouija-cs-LC139" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">lettersIndex</span><span class="pl-c1">++</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L140"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="140"
                      ></td>
                      <td id="file-ouija-cs-LC140" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L141"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="141"
                      ></td>
                      <td id="file-ouija-cs-LC141" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L142"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="142"
                      ></td>
                      <td id="file-ouija-cs-LC142" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L143"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="143"
                      ></td>
                      <td
                        id="file-ouija-cs-LC143"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L144"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="144"
                      ></td>
                      <td id="file-ouija-cs-LC144" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">void</span>
                        <span class="pl-en">AnimateLetter</span><span class="pl-kos">(</span
                        ><span class="pl-smi">List</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">GameObject</span><span class="pl-c1">&gt;</span>
                        <span class="pl-s1">letters</span><span class="pl-kos">,</span>
                        <span class="pl-smi">int</span> <span class="pl-s1">chalkIndex</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L145"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="145"
                      ></td>
                      <td id="file-ouija-cs-LC145" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L146"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="146"
                      ></td>
                      <td id="file-ouija-cs-LC146" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// DANGER, HE IS HUNGRY, FIND NOTES</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L147"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="147"
                      ></td>
                      <td id="file-ouija-cs-LC147" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">GameObject</span>
                        <span class="pl-s1">chalkLetter</span>
                        <span class="pl-c1">=</span> letters<span class="pl-kos">[</span
                        >chalkIndex<span class="pl-kos">]</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L148"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="148"
                      ></td>
                      <td id="file-ouija-cs-LC148" class="blob-code blob-code-inner js-file-line">
                        chalkLetter<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">true</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                        <span class="pl-c">// Enables object</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L149"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="149"
                      ></td>
                      <td
                        id="file-ouija-cs-LC149"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L150"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="150"
                      ></td>
                      <td id="file-ouija-cs-LC150" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">animatingLetter</span> <span class="pl-c1">=</span>
                        <span class="pl-c1">true</span><span class="pl-kos">;</span>
                        <span class="pl-c">// Tracks that animation is playing</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L151"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="151"
                      ></td>
                      <td id="file-ouija-cs-LC151" class="blob-code blob-code-inner js-file-line">
                        chalkLetter<span class="pl-kos">.</span
                        ><span class="pl-smi">GetComponent</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">Animator</span><span class="pl-c1">&gt;</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">.</span><span class="pl-en">Play</span
                        ><span class="pl-kos">(</span>chalkLetter<span class="pl-kos">.</span
                        >name<span class="pl-kos">)</span><span class="pl-kos">;</span>
                        <span class="pl-c">// Plays letter animation</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L152"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="152"
                      ></td>
                      <td
                        id="file-ouija-cs-LC152"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L153"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="153"
                      ></td>
                      <td id="file-ouija-cs-LC153" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Plays random chalkboard writing audio</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L154"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="154"
                      ></td>
                      <td id="file-ouija-cs-LC154" class="blob-code blob-code-inner js-file-line">
                        System<span class="pl-kos">.</span>Random <span class="pl-s1">rnd</span>
                        <span class="pl-c1">=</span> <span class="pl-k">new</span> System<span
                          class="pl-kos"
                          >.</span
                        >Random<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L155"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="155"
                      ></td>
                      <td id="file-ouija-cs-LC155" class="blob-code blob-code-inner js-file-line">
                        audioSource<span class="pl-kos">.</span>clip
                        <span class="pl-c1">=</span> audio<span class="pl-kos">[</span>rnd<span
                          class="pl-kos"
                          >.</span
                        ><span class="pl-en">Next</span><span class="pl-kos">(</span
                        ><span class="pl-c1">0</span><span class="pl-kos">,</span> audio<span
                          class="pl-kos"
                          >.</span
                        >Count<span class="pl-c1">-</span><span class="pl-c1">1</span
                        ><span class="pl-kos">)</span><span class="pl-kos">]</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L156"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="156"
                      ></td>
                      <td id="file-ouija-cs-LC156" class="blob-code blob-code-inner js-file-line">
                        audioSource<span class="pl-kos">.</span><span class="pl-en">Play</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L157"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="157"
                      ></td>
                      <td
                        id="file-ouija-cs-LC157"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L158"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="158"
                      ></td>
                      <td id="file-ouija-cs-LC158" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">currAnimator</span>
                        <span class="pl-c1">=</span> chalkLetter<span class="pl-kos">.</span
                        ><span class="pl-smi">GetComponent</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">Animator</span><span class="pl-c1">&gt;</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                        <span class="pl-c">// Sets current animator as letters animator</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L159"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="159"
                      ></td>
                      <td id="file-ouija-cs-LC159" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L160"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="160"
                      ></td>
                      <td
                        id="file-ouija-cs-LC160"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L161"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="161"
                      ></td>
                      <td id="file-ouija-cs-LC161" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">private</span> <span class="pl-smi">int</span>
                        <span class="pl-en">GetAlphabetIndex</span><span class="pl-kos">(</span
                        ><span class="pl-smi">char</span> <span class="pl-s1">letter</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L162"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="162"
                      ></td>
                      <td id="file-ouija-cs-LC162" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L163"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="163"
                      ></td>
                      <td id="file-ouija-cs-LC163" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">/*</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L164"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="164"
                      ></td>
                      <td id="file-ouija-cs-LC164" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">
                          * Given a letter, returns its index in the alphabet</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L165"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="165"
                      ></td>
                      <td id="file-ouija-cs-LC165" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c"> */</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L166"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="166"
                      ></td>
                      <td
                        id="file-ouija-cs-LC166"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L167"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="167"
                      ></td>
                      <td id="file-ouija-cs-LC167" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">string</span> <span class="pl-s1">alphabet</span>
                        <span class="pl-c1">=</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>ABCDEFGHIJKLMNOPQRSTUVWXYZ<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L168"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="168"
                      ></td>
                      <td id="file-ouija-cs-LC168" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">return</span> alphabet<span class="pl-kos">.</span
                        ><span class="pl-en">IndexOf</span><span class="pl-kos">(</span>letter<span
                          class="pl-kos"
                          >)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L169"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="169"
                      ></td>
                      <td id="file-ouija-cs-LC169" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L170"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="170"
                      ></td>
                      <td
                        id="file-ouija-cs-LC170"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L171"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="171"
                      ></td>
                      <td id="file-ouija-cs-LC171" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">private</span> <span class="pl-smi">bool</span>
                        <span class="pl-en">IsHolding</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L172"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="172"
                      ></td>
                      <td id="file-ouija-cs-LC172" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L173"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="173"
                      ></td>
                      <td id="file-ouija-cs-LC173" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">/*</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L174"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="174"
                      ></td>
                      <td id="file-ouija-cs-LC174" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">
                          * Returns true if either hand is holding the Planchette. Otherwise,
                          returns false.</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L175"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="175"
                      ></td>
                      <td id="file-ouija-cs-LC175" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c"> */</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L176"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="176"
                      ></td>
                      <td
                        id="file-ouija-cs-LC176"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L177"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="177"
                      ></td>
                      <td id="file-ouija-cs-LC177" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span>
                        <span class="pl-kos">(</span>PlanchetteInteraction<span class="pl-kos"
                          >.</span
                        >heldBy<span class="pl-kos">.</span><span class="pl-en">Equals</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>left<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span>
                        <span class="pl-c1">||</span> PlanchetteInteraction<span class="pl-kos"
                          >.</span
                        >heldBy<span class="pl-kos">.</span><span class="pl-en">Equals</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>right<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L178"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="178"
                      ></td>
                      <td id="file-ouija-cs-LC178" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">return</span> <span class="pl-c1">true</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L179"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="179"
                      ></td>
                      <td id="file-ouija-cs-LC179" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">else</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L180"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="180"
                      ></td>
                      <td id="file-ouija-cs-LC180" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L181"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="181"
                      ></td>
                      <td id="file-ouija-cs-LC181" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">return</span> <span class="pl-c1">false</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L182"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="182"
                      ></td>
                      <td id="file-ouija-cs-LC182" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L183"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="183"
                      ></td>
                      <td id="file-ouija-cs-LC183" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L184"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="184"
                      ></td>
                      <td
                        id="file-ouija-cs-LC184"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L185"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="185"
                      ></td>
                      <td id="file-ouija-cs-LC185" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">private</span> <span class="pl-smi">void</span>
                        <span class="pl-en">SetHand</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L186"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="186"
                      ></td>
                      <td id="file-ouija-cs-LC186" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L187"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="187"
                      ></td>
                      <td id="file-ouija-cs-LC187" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">/*</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L188"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="188"
                      ></td>
                      <td id="file-ouija-cs-LC188" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">
                          * Sets the hand to the hand holding the Planchette (left or right
                          controller)</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L189"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="189"
                      ></td>
                      <td id="file-ouija-cs-LC189" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c"> */</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L190"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="190"
                      ></td>
                      <td
                        id="file-ouija-cs-LC190"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L191"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="191"
                      ></td>
                      <td id="file-ouija-cs-LC191" class="blob-code blob-code-inner js-file-line">
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
                        id="file-ouija-cs-L192"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="192"
                      ></td>
                      <td id="file-ouija-cs-LC192" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">InputDeviceCharacteristics</span>
                        <span class="pl-s1">deviceChars</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L193"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="193"
                      ></td>
                      <td id="file-ouija-cs-LC193" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span>
                        <span class="pl-kos">(</span>PlanchetteInteraction<span class="pl-kos"
                          >.</span
                        >heldBy<span class="pl-kos">.</span><span class="pl-en">Equals</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>left<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L194"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="194"
                      ></td>
                      <td id="file-ouija-cs-LC194" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L195"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="195"
                      ></td>
                      <td id="file-ouija-cs-LC195" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">deviceChars</span>
                        <span class="pl-c1">=</span> InputDeviceCharacteristics<span class="pl-kos"
                          >.</span
                        >Left<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L196"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="196"
                      ></td>
                      <td id="file-ouija-cs-LC196" class="blob-code blob-code-inner js-file-line">
                        InputDevices<span class="pl-kos">.</span
                        ><span class="pl-en">GetDevicesWithCharacteristics</span
                        ><span class="pl-kos">(</span>deviceChars<span class="pl-kos">,</span>
                        devices<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L197"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="197"
                      ></td>
                      <td id="file-ouija-cs-LC197" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>devices<span
                          class="pl-kos"
                          >.</span
                        >Count <span class="pl-c1">&gt;</span> <span class="pl-c1">0</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L198"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="198"
                      ></td>
                      <td id="file-ouija-cs-LC198" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L199"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="199"
                      ></td>
                      <td id="file-ouija-cs-LC199" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">hand</span> <span class="pl-c1">=</span> devices<span
                          class="pl-kos"
                          >[</span
                        ><span class="pl-c1">0</span><span class="pl-kos">]</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L200"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="200"
                      ></td>
                      <td id="file-ouija-cs-LC200" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L201"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="201"
                      ></td>
                      <td id="file-ouija-cs-LC201" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L202"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="202"
                      ></td>
                      <td id="file-ouija-cs-LC202" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">else</span> <span class="pl-k">if</span>
                        <span class="pl-kos">(</span>PlanchetteInteraction<span class="pl-kos"
                          >.</span
                        >heldBy<span class="pl-kos">.</span><span class="pl-en">Equals</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>right<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L203"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="203"
                      ></td>
                      <td id="file-ouija-cs-LC203" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L204"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="204"
                      ></td>
                      <td id="file-ouija-cs-LC204" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">deviceChars</span>
                        <span class="pl-c1">=</span> InputDeviceCharacteristics<span class="pl-kos"
                          >.</span
                        >Right<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L205"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="205"
                      ></td>
                      <td id="file-ouija-cs-LC205" class="blob-code blob-code-inner js-file-line">
                        InputDevices<span class="pl-kos">.</span
                        ><span class="pl-en">GetDevicesWithCharacteristics</span
                        ><span class="pl-kos">(</span>deviceChars<span class="pl-kos">,</span>
                        devices<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L206"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="206"
                      ></td>
                      <td id="file-ouija-cs-LC206" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>devices<span
                          class="pl-kos"
                          >.</span
                        >Count <span class="pl-c1">&gt;</span> <span class="pl-c1">0</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L207"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="207"
                      ></td>
                      <td id="file-ouija-cs-LC207" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L208"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="208"
                      ></td>
                      <td id="file-ouija-cs-LC208" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">hand</span> <span class="pl-c1">=</span> devices<span
                          class="pl-kos"
                          >[</span
                        ><span class="pl-c1">0</span><span class="pl-kos">]</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L209"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="209"
                      ></td>
                      <td id="file-ouija-cs-LC209" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L210"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="210"
                      ></td>
                      <td id="file-ouija-cs-LC210" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L211"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="211"
                      ></td>
                      <td id="file-ouija-cs-LC211" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L212"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="212"
                      ></td>
                      <td
                        id="file-ouija-cs-LC212"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L213"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="213"
                      ></td>
                      <td id="file-ouija-cs-LC213" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">private</span> <span class="pl-smi">List</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">GameObject</span
                        ><span class="pl-c1">&gt;</span> <span class="pl-en">GetChildren</span
                        ><span class="pl-kos">(</span><span class="pl-smi">GameObject</span>
                        <span class="pl-s1">parent</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L214"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="214"
                      ></td>
                      <td id="file-ouija-cs-LC214" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L215"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="215"
                      ></td>
                      <td id="file-ouija-cs-LC215" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">/*</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L216"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="216"
                      ></td>
                      <td id="file-ouija-cs-LC216" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">
                          * Returns a list of GameObjects that are children of parent</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L217"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="217"
                      ></td>
                      <td id="file-ouija-cs-LC217" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c"> */</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L218"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="218"
                      ></td>
                      <td
                        id="file-ouija-cs-LC218"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L219"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="219"
                      ></td>
                      <td id="file-ouija-cs-LC219" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">List</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">GameObject</span><span class="pl-c1">&gt;</span>
                        <span class="pl-s1">list</span> <span class="pl-c1">=</span>
                        <span class="pl-k">new</span> <span class="pl-smi">List</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">GameObject</span
                        ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L220"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="220"
                      ></td>
                      <td id="file-ouija-cs-LC220" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">foreach</span> <span class="pl-kos">(</span>Transform
                        child <span class="pl-k">in</span> parent<span class="pl-kos">.</span
                        >transform<span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L221"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="221"
                      ></td>
                      <td id="file-ouija-cs-LC221" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L222"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="222"
                      ></td>
                      <td id="file-ouija-cs-LC222" class="blob-code blob-code-inner js-file-line">
                        list<span class="pl-kos">.</span><span class="pl-en">Add</span
                        ><span class="pl-kos">(</span>child<span class="pl-kos">.</span
                        >transform<span class="pl-kos">.</span>gameObject<span class="pl-kos"
                          >)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L223"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="223"
                      ></td>
                      <td id="file-ouija-cs-LC223" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L224"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="224"
                      ></td>
                      <td id="file-ouija-cs-LC224" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">return</span> <span class="pl-s1">list</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L225"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="225"
                      ></td>
                      <td id="file-ouija-cs-LC225" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L226"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="226"
                      ></td>
                      <td
                        id="file-ouija-cs-LC226"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L227"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="227"
                      ></td>
                      <td id="file-ouija-cs-LC227" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">private</span> <span class="pl-smi">void</span>
                        <span class="pl-en">DisableChildren</span><span class="pl-kos">(</span
                        ><span class="pl-smi">List</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">GameObject</span><span class="pl-c1">&gt;</span>
                        <span class="pl-s1">list</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L228"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="228"
                      ></td>
                      <td id="file-ouija-cs-LC228" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L229"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="229"
                      ></td>
                      <td id="file-ouija-cs-LC229" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">/*</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L230"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="230"
                      ></td>
                      <td id="file-ouija-cs-LC230" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c"> * Disables the children in the list</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L231"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="231"
                      ></td>
                      <td id="file-ouija-cs-LC231" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c"> */</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L232"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="232"
                      ></td>
                      <td
                        id="file-ouija-cs-LC232"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L233"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="233"
                      ></td>
                      <td id="file-ouija-cs-LC233" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">foreach</span> <span class="pl-kos">(</span>GameObject
                        child <span class="pl-k">in</span> list<span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L234"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="234"
                      ></td>
                      <td id="file-ouija-cs-LC234" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L235"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="235"
                      ></td>
                      <td id="file-ouija-cs-LC235" class="blob-code blob-code-inner js-file-line">
                        child<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">false</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L236"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="236"
                      ></td>
                      <td id="file-ouija-cs-LC236" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L237"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="237"
                      ></td>
                      <td id="file-ouija-cs-LC237" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L238"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="238"
                      ></td>
                      <td
                        id="file-ouija-cs-LC238"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L239"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="239"
                      ></td>
                      <td id="file-ouija-cs-LC239" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">private</span> IEnumerator
                        <span class="pl-en">EraseHelper</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L240"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="240"
                      ></td>
                      <td id="file-ouija-cs-LC240" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L241"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="241"
                      ></td>
                      <td id="file-ouija-cs-LC241" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">/*</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L242"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="242"
                      ></td>
                      <td id="file-ouija-cs-LC242" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c"> * Erases the chalkboard</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L243"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="243"
                      ></td>
                      <td id="file-ouija-cs-LC243" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c"> */</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L244"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="244"
                      ></td>
                      <td
                        id="file-ouija-cs-LC244"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L245"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="245"
                      ></td>
                      <td id="file-ouija-cs-LC245" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">waiting</span> <span class="pl-c1">=</span>
                        <span class="pl-c1">true</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L246"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="246"
                      ></td>
                      <td id="file-ouija-cs-LC246" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">yield</span> <span class="pl-k">return</span>
                        <span class="pl-k">new</span> WaitForSeconds<span class="pl-kos">(</span
                        ><span class="pl-c1">1</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L247"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="247"
                      ></td>
                      <td id="file-ouija-cs-LC247" class="blob-code blob-code-inner js-file-line">
                        audioSource<span class="pl-kos">.</span
                        ><span class="pl-en">PlayOneShot</span
                        ><span class="pl-kos">(</span>eraseAudio<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L248"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="248"
                      ></td>
                      <td id="file-ouija-cs-LC248" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">yield</span> <span class="pl-k">return</span>
                        <span class="pl-k">new</span> WaitForSeconds<span class="pl-kos">(</span
                        ><span class="pl-c1">3</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L249"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="249"
                      ></td>
                      <td id="file-ouija-cs-LC249" class="blob-code blob-code-inner js-file-line">
                        DisableChildren<span class="pl-kos">(</span>danger<span class="pl-kos"
                          >)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L250"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="250"
                      ></td>
                      <td id="file-ouija-cs-LC250" class="blob-code blob-code-inner js-file-line">
                        DisableChildren<span class="pl-kos">(</span>hungry<span class="pl-kos"
                          >)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L251"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="251"
                      ></td>
                      <td id="file-ouija-cs-LC251" class="blob-code blob-code-inner js-file-line">
                        DisableChildren<span class="pl-kos">(</span>notes<span class="pl-kos"
                          >)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L252"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="252"
                      ></td>
                      <td id="file-ouija-cs-LC252" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">waiting</span> <span class="pl-c1">=</span>
                        <span class="pl-c1">false</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L253"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="253"
                      ></td>
                      <td id="file-ouija-cs-LC253" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L254"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="254"
                      ></td>
                      <td
                        id="file-ouija-cs-LC254"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L255"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="255"
                      ></td>
                      <td id="file-ouija-cs-LC255" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">private</span> <span class="pl-smi">void</span>
                        <span class="pl-en">Erase</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L256"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="256"
                      ></td>
                      <td id="file-ouija-cs-LC256" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L257"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="257"
                      ></td>
                      <td id="file-ouija-cs-LC257" class="blob-code blob-code-inner js-file-line">
                        StartCoroutine<span class="pl-kos">(</span>EraseHelper<span class="pl-kos"
                          >(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L258"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="258"
                      ></td>
                      <td id="file-ouija-cs-LC258" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-ouija-cs-L259"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="259"
                      ></td>
                      <td id="file-ouija-cs-LC259" class="blob-code blob-code-inner js-file-line">
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
          href="https://gist.github.com/sadiecrawford/d45951ec870e7508c1e84c28a74322ce/raw/d3b3d543722cda0fb4c4cb6056f333bc2babf69f/Ouija.cs"
          style="float: right"
          class="Link--inTextBlock"
          >view raw</a
        >
        <a
          href="https://gist.github.com/sadiecrawford/d45951ec870e7508c1e84c28a74322ce#file-ouija-cs"
          class="Link--inTextBlock"
        >
          Ouija.cs
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
  name: 'GistOuija'
}
</script>
