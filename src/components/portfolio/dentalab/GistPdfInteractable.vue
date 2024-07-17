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
          <div id="file-pdfinteractable-cs" class="file my-2">
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
                  data-tagsearch-path="PdfInteractable.cs"
                >
                  <tbody>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L1"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="1"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC1"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">using</span> Photon<span class="pl-kos">.</span>Pun<span
                          class="pl-kos"
                          >;</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L2"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="2"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC2"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">using</span> System<span class="pl-kos">.</span
                        >Collections<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L3"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="3"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC3"
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
                        id="file-pdfinteractable-cs-L4"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="4"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC4"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">using</span> UnityEngine<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L5"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="5"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC5"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L6"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="6"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC6"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-k">enum</span>
                        <span class="pl-smi">PdfButtonName</span> <span class="pl-kos">{</span>
                        <span class="pl-c1">UpButton</span><span class="pl-kos">,</span>
                        <span class="pl-c1">DownButton</span><span class="pl-kos">,</span>
                        <span class="pl-c1">Top</span><span class="pl-kos">,</span>
                        <span class="pl-c1">Middle</span><span class="pl-kos">,</span>
                        <span class="pl-c1">Bottom</span><span class="pl-kos">,</span>
                        <span class="pl-c1">LeftButton</span><span class="pl-kos">,</span>
                        <span class="pl-c1">RightButton</span><span class="pl-kos">,</span>
                        <span class="pl-c1">BackButton</span> <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L7"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="7"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC7"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-k">class</span>
                        <span class="pl-smi">PdfInteractable</span> <span class="pl-c1">:</span>
                        <span class="pl-smi">MonoBehaviourPun</span><span class="pl-kos">,</span>
                        <span class="pl-smi">IPunObservable</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L8"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="8"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC8"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L9"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="9"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC9"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Header<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>Button<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L10"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="10"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC10"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The button this script is representing<span
                              class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L11"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="11"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC11"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">PdfButtonName</span>
                        <span class="pl-s1">buttonType</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L12"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="12"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC12"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The parent GameObject that holds the Up and
                            Down buttons<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L13"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="13"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC13"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">GameObject</span>
                        <span class="pl-s1">listNavigation</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L14"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="14"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC14"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The parent GameObject that holds the Left,
                            Right, and Back buttons<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L15"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="15"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC15"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">GameObject</span>
                        <span class="pl-s1">pdfNavigation</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L16"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="16"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC16"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L17"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="17"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC17"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Header<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>PDF<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L18"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="18"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC18"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The interactable PDF itself<span
                              class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L19"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="19"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC19"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">GameObject</span>
                        <span class="pl-s1">pdf</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L20"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="20"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC20"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L21"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="21"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC21"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Header<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>Haptics<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L22"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="22"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC22"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The audio to be played when a button is
                            pressed<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L23"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="23"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC23"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">AudioClip</span>
                        <span class="pl-s1">hapticAudio</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L24"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="24"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC24"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L25"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="25"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC25"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">PDF</span> <span class="pl-s1">pdfScript</span
                        ><span class="pl-kos">;</span>
                        <span class="pl-c">// The PDF.cs script attached to pdf</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L26"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="26"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC26"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">bool</span> <span class="pl-s1">isPressed</span
                        ><span class="pl-kos">;</span>
                        <span class="pl-c">// Whether the button has been pressed or not</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L27"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="27"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC27"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L28"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="28"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC28"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L29"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="29"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC29"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">Start</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L30"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="30"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC30"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L31"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="31"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC31"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">pdfScript</span> <span class="pl-c1">=</span> pdf<span
                          class="pl-kos"
                          >.</span
                        ><span class="pl-smi">GetComponentInChildren</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">PDF</span
                        ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L32"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="32"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC32"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L33"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="33"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC33"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L34"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="34"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC34"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">private</span> <span class="pl-smi">void</span>
                        <span class="pl-en">OnTriggerEnter</span><span class="pl-kos">(</span
                        ><span class="pl-smi">Collider</span> <span class="pl-s1">other</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L35"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="35"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC35"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L36"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="36"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC36"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>other<span
                          class="pl-kos"
                          >.</span
                        >gameObject<span class="pl-kos">.</span>tag <span class="pl-c1">==</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>IndexR<span class="pl-s">"</span></span
                        >
                        <span class="pl-c1">&amp;&amp;</span> <span class="pl-c1">!</span
                        ><span class="pl-s1">isPressed</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L37"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="37"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC37"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L38"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="38"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC38"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">isPressed</span> <span class="pl-c1">=</span>
                        <span class="pl-c1">true</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L39"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="39"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC39"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L40"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="40"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC40"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">OVRHapticsClip</span>
                        <span class="pl-s1">hapticsClip</span> <span class="pl-c1">=</span>
                        <span class="pl-k">new</span> OVRHapticsClip<span class="pl-kos">(</span
                        >hapticAudio<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L41"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="41"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC41"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        OVRHaptics<span class="pl-kos">.</span>RightChannel<span class="pl-kos"
                          >.</span
                        ><span class="pl-en">Preempt</span
                        ><span class="pl-kos">(</span>hapticsClip<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L42"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="42"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC42"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L43"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="43"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC43"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        ButtonOnClick<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L44"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="44"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC44"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L45"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="45"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC45"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">else</span> <span class="pl-k">if</span>
                        <span class="pl-kos">(</span>other<span class="pl-kos">.</span
                        >gameObject<span class="pl-kos">.</span>tag <span class="pl-c1">==</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>IndexR<span class="pl-s">"</span></span
                        >
                        <span class="pl-c1">&amp;&amp;</span> <span class="pl-s1">isPressed</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L46"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="46"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC46"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L47"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="47"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC47"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">isPressed</span> <span class="pl-c1">=</span>
                        <span class="pl-c1">false</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L48"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="48"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC48"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L49"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="49"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC49"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">OVRHapticsClip</span>
                        <span class="pl-s1">hapticsClip</span> <span class="pl-c1">=</span>
                        <span class="pl-k">new</span> OVRHapticsClip<span class="pl-kos">(</span
                        >hapticAudio<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L50"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="50"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC50"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        OVRHaptics<span class="pl-kos">.</span>RightChannel<span class="pl-kos"
                          >.</span
                        ><span class="pl-en">Preempt</span
                        ><span class="pl-kos">(</span>hapticsClip<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L51"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="51"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC51"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L52"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="52"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC52"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        ButtonOnClick<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L53"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="53"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC53"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L54"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="54"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC54"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L55"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="55"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC55"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L56"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="56"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC56"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">ButtonOnClick</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L57"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="57"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC57"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L58"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="58"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC58"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">switch</span> <span class="pl-kos">(</span
                        ><span class="pl-s1">buttonType</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L59"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="59"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC59"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L60"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="60"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC60"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">case</span> PdfButtonName<span class="pl-kos">.</span
                        >UpButton<span class="pl-c1">:</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L61"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="61"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC61"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>photonView<span
                          class="pl-kos"
                          >.</span
                        >IsMine<span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L62"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="62"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC62"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L63"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="63"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC63"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_PdfScrollUp<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L64"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="64"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC64"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L65"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="65"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC65"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">break</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L66"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="66"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC66"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">case</span> PdfButtonName<span class="pl-kos">.</span
                        >DownButton<span class="pl-c1">:</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L67"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="67"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC67"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>photonView<span
                          class="pl-kos"
                          >.</span
                        >IsMine<span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L68"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="68"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC68"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L69"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="69"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC69"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_PdfScrollDown<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L70"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="70"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC70"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L71"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="71"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC71"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">break</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L72"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="72"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC72"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">case</span> PdfButtonName<span class="pl-kos">.</span
                        >Top<span class="pl-c1">:</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L73"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="73"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC73"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>photonView<span
                          class="pl-kos"
                          >.</span
                        >IsMine<span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L74"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="74"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC74"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L75"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="75"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC75"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_PdfTop<span class="pl-s">"</span></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L76"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="76"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC76"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L77"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="77"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC77"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">break</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L78"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="78"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC78"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">case</span> PdfButtonName<span class="pl-kos">.</span
                        >Middle<span class="pl-c1">:</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L79"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="79"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC79"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>photonView<span
                          class="pl-kos"
                          >.</span
                        >IsMine<span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L80"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="80"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC80"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L81"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="81"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC81"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_PdfMiddle<span class="pl-s">"</span></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L82"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="82"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC82"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L83"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="83"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC83"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">break</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L84"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="84"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC84"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">case</span> PdfButtonName<span class="pl-kos">.</span
                        >Bottom<span class="pl-c1">:</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L85"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="85"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC85"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>photonView<span
                          class="pl-kos"
                          >.</span
                        >IsMine<span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L86"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="86"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC86"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L87"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="87"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC87"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_PdfBottom<span class="pl-s">"</span></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L88"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="88"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC88"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L89"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="89"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC89"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">break</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L90"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="90"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC90"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">case</span> PdfButtonName<span class="pl-kos">.</span
                        >LeftButton<span class="pl-c1">:</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L91"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="91"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC91"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>photonView<span
                          class="pl-kos"
                          >.</span
                        >IsMine<span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L92"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="92"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC92"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L93"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="93"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC93"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_PdfLeft<span class="pl-s">"</span></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L94"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="94"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC94"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L95"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="95"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC95"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">break</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L96"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="96"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC96"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">case</span> PdfButtonName<span class="pl-kos">.</span
                        >RightButton<span class="pl-c1">:</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L97"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="97"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC97"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>photonView<span
                          class="pl-kos"
                          >.</span
                        >IsMine<span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L98"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="98"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC98"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L99"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="99"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC99"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_PdfRight<span class="pl-s">"</span></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L100"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="100"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC100"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L101"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="101"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC101"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">break</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L102"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="102"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC102"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">case</span> PdfButtonName<span class="pl-kos">.</span
                        >BackButton<span class="pl-c1">:</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L103"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="103"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC103"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>photonView<span
                          class="pl-kos"
                          >.</span
                        >IsMine<span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L104"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="104"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC104"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L105"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="105"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC105"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_PdfBack<span class="pl-s">"</span></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L106"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="106"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC106"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L107"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="107"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC107"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">break</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L108"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="108"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC108"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L109"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="109"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC109"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L110"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="110"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC110"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L111"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="111"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC111"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span><span class="pl-c1">PunRPC</span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L112"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="112"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC112"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">RPC_PdfScrollUp</span
                        ><span class="pl-kos">(</span><span class="pl-smi">PhotonMessageInfo</span>
                        <span class="pl-s1">info</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L113"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="113"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC113"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L114"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="114"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC114"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        pdfScript<span class="pl-kos">.</span><span class="pl-en">ScrollUp</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L115"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="115"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC115"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L116"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="116"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC116"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L117"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="117"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC117"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span><span class="pl-c1">PunRPC</span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L118"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="118"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC118"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">RPC_PdfScrollDown</span
                        ><span class="pl-kos">(</span><span class="pl-smi">PhotonMessageInfo</span>
                        <span class="pl-s1">info</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L119"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="119"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC119"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L120"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="120"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC120"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        pdfScript<span class="pl-kos">.</span><span class="pl-en">ScrollDown</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L121"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="121"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC121"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L122"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="122"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC122"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L123"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="123"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC123"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span><span class="pl-c1">PunRPC</span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L124"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="124"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC124"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">RPC_PdfTop</span
                        ><span class="pl-kos">(</span><span class="pl-smi">PhotonMessageInfo</span>
                        <span class="pl-s1">info</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L125"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="125"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC125"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L126"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="126"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC126"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        pdfScript<span class="pl-kos">.</span><span class="pl-en">TopPage</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L127"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="127"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC127"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        StartCoroutine<span class="pl-kos">(</span>ToggleNavigation<span
                          class="pl-kos"
                          >(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L128"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="128"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC128"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L129"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="129"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC129"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L130"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="130"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC130"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span><span class="pl-c1">PunRPC</span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L131"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="131"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC131"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">RPC_PdfMiddle</span
                        ><span class="pl-kos">(</span><span class="pl-smi">PhotonMessageInfo</span>
                        <span class="pl-s1">info</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L132"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="132"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC132"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L133"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="133"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC133"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        pdfScript<span class="pl-kos">.</span><span class="pl-en">MiddlePage</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L134"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="134"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC134"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        StartCoroutine<span class="pl-kos">(</span>ToggleNavigation<span
                          class="pl-kos"
                          >(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L135"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="135"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC135"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L136"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="136"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC136"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L137"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="137"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC137"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span><span class="pl-c1">PunRPC</span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L138"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="138"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC138"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">RPC_PdfBottom</span
                        ><span class="pl-kos">(</span><span class="pl-smi">PhotonMessageInfo</span>
                        <span class="pl-s1">info</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L139"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="139"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC139"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L140"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="140"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC140"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        pdfScript<span class="pl-kos">.</span><span class="pl-en">BottomPage</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L141"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="141"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC141"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        StartCoroutine<span class="pl-kos">(</span>ToggleNavigation<span
                          class="pl-kos"
                          >(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L142"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="142"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC142"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L143"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="143"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC143"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L144"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="144"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC144"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span><span class="pl-c1">PunRPC</span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L145"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="145"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC145"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">RPC_PdfLeft</span
                        ><span class="pl-kos">(</span><span class="pl-smi">PhotonMessageInfo</span>
                        <span class="pl-s1">info</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L146"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="146"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC146"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L147"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="147"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC147"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        pdfScript<span class="pl-kos">.</span><span class="pl-en">OnLeftClick</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L148"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="148"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC148"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L149"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="149"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC149"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L150"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="150"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC150"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span><span class="pl-c1">PunRPC</span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L151"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="151"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC151"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">RPC_PdfRight</span
                        ><span class="pl-kos">(</span><span class="pl-smi">PhotonMessageInfo</span>
                        <span class="pl-s1">info</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L152"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="152"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC152"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L153"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="153"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC153"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        pdfScript<span class="pl-kos">.</span><span class="pl-en">OnRightClick</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L154"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="154"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC154"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L155"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="155"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC155"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L156"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="156"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC156"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span><span class="pl-c1">PunRPC</span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L157"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="157"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC157"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">RPC_PdfBack</span
                        ><span class="pl-kos">(</span><span class="pl-smi">PhotonMessageInfo</span>
                        <span class="pl-s1">info</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L158"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="158"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC158"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L159"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="159"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC159"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        pdfScript<span class="pl-kos">.</span><span class="pl-en">Back</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L160"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="160"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC160"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        StartCoroutine<span class="pl-kos">(</span>ToggleNavigation<span
                          class="pl-kos"
                          >(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L161"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="161"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC161"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L162"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="162"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC162"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L163"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="163"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC163"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        IEnumerator <span class="pl-en">ToggleNavigation</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L164"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="164"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC164"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L165"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="165"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC165"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">yield</span> <span class="pl-k">return</span>
                        <span class="pl-k">new</span> WaitForSeconds<span class="pl-kos">(</span
                        ><span class="pl-c1">0.5f</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L166"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="166"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC166"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">isPressed</span> <span class="pl-c1">=</span>
                        <span class="pl-c1">false</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L167"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="167"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC167"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        listNavigation<span class="pl-kos">.</span
                        ><span class="pl-en">SetActive</span><span class="pl-kos">(</span
                        ><span class="pl-c1">!</span>listNavigation<span class="pl-kos">.</span
                        >activeSelf<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L168"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="168"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC168"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        pdfNavigation<span class="pl-kos">.</span
                        ><span class="pl-en">SetActive</span><span class="pl-kos">(</span
                        ><span class="pl-c1">!</span>pdfNavigation<span class="pl-kos">.</span
                        >activeSelf<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L169"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="169"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC169"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L170"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="170"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC170"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L171"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="171"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC171"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        ..<span class="pl-kos">.</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdfinteractable-cs-L172"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="172"
                      ></td>
                      <td
                        id="file-pdfinteractable-cs-LC172"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span><span class="pl-kos"></span>
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
          href="https://gist.github.com/sadiecrawford/bac7b9a698d0720128a4f3021975f282/raw/386f7022ad3c6edeabb30ad3502efc63e448c4b8/PdfInteractable.cs"
          style="float: right"
          class="Link--inTextBlock"
          >view raw</a
        >
        <a
          href="https://gist.github.com/sadiecrawford/bac7b9a698d0720128a4f3021975f282#file-pdfinteractable-cs"
          class="Link--inTextBlock"
        >
          PdfInteractable.cs
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
  name: 'GistPdfInteractable'
}
</script>
