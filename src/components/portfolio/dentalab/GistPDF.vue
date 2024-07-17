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
          <div id="file-pdf-cs" class="file my-2">
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
                  data-tagsearch-path="PDF.cs"
                >
                  <tbody>
                    <tr>
                      <td
                        id="file-pdf-cs-L1"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="1"
                      ></td>
                      <td id="file-pdf-cs-LC1" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">using</span> System<span class="pl-kos">.</span>IO<span
                          class="pl-kos"
                          >;</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L2"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="2"
                      ></td>
                      <td id="file-pdf-cs-LC2" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">using</span> UnityEngine<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L3"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="3"
                      ></td>
                      <td id="file-pdf-cs-LC3" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">using</span> UnityEngine<span class="pl-kos">.</span
                        >UI<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L4"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="4"
                      ></td>
                      <td id="file-pdf-cs-LC4" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">using</span> Image
                        <span class="pl-c1">=</span> UnityEngine<span class="pl-kos">.</span>UI<span
                          class="pl-kos"
                          >.</span
                        >Image<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L5"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="5"
                      ></td>
                      <td id="file-pdf-cs-LC5" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">using</span> System<span class="pl-kos">.</span
                        >Collections<span class="pl-kos">.</span>Generic<span class="pl-kos"
                          >;</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L6"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="6"
                      ></td>
                      <td id="file-pdf-cs-LC6" class="blob-code blob-code-inner js-file-line"></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L7"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="7"
                      ></td>
                      <td id="file-pdf-cs-LC7" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-k">class</span>
                        <span class="pl-smi">PDF</span> <span class="pl-c1">:</span>
                        <span class="pl-smi">MonoBehaviour</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L8"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="8"
                      ></td>
                      <td id="file-pdf-cs-LC8" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L9"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="9"
                      ></td>
                      <td id="file-pdf-cs-LC9" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Header<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>Browsing List<span class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L10"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="10"
                      ></td>
                      <td id="file-pdf-cs-LC10" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The parent GameObject holding all list
                            objects<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L11"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="11"
                      ></td>
                      <td id="file-pdf-cs-LC11" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">GameObject</span>
                        <span class="pl-s1">list</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L12"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="12"
                      ></td>
                      <td id="file-pdf-cs-LC12" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The parent GameObjects of the 3 list
                            displays<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L13"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="13"
                      ></td>
                      <td id="file-pdf-cs-LC13" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">GameObject</span>
                        <span class="pl-s1">topManager</span><span class="pl-kos">,</span>
                        <span class="pl-s1">middleManager</span><span class="pl-kos">,</span>
                        <span class="pl-s1">bottomManager</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L14"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="14"
                      ></td>
                      <td id="file-pdf-cs-LC14" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">Image</span> <span class="pl-s1">topImg</span
                        ><span class="pl-kos">,</span> <span class="pl-s1">middleImg</span
                        ><span class="pl-kos">,</span> <span class="pl-s1">bottomImg</span
                        ><span class="pl-kos">;</span>
                        <span class="pl-c">// Preview images in each of the list displays</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L15"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="15"
                      ></td>
                      <td id="file-pdf-cs-LC15" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">Text</span> <span class="pl-s1">topTxt</span
                        ><span class="pl-kos">,</span> <span class="pl-s1">middleTxt</span
                        ><span class="pl-kos">,</span> <span class="pl-s1">bottomTxt</span
                        ><span class="pl-kos">;</span>
                        <span class="pl-c">// Titles in each of the list displays</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L16"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="16"
                      ></td>
                      <td id="file-pdf-cs-LC16" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">int</span> <span class="pl-s1">listIndex</span>
                        <span class="pl-c1">=</span> <span class="pl-c1">0</span
                        ><span class="pl-kos">;</span>
                        <span class="pl-c">// Tracks browsing index</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L17"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="17"
                      ></td>
                      <td id="file-pdf-cs-LC17" class="blob-code blob-code-inner js-file-line"></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L18"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="18"
                      ></td>
                      <td id="file-pdf-cs-LC18" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Header<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>Scrolling Display<span class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L19"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="19"
                      ></td>
                      <td id="file-pdf-cs-LC19" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The parent GameObject holding all display
                            objects<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L20"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="20"
                      ></td>
                      <td id="file-pdf-cs-LC20" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">GameObject</span>
                        <span class="pl-s1">display</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L21"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="21"
                      ></td>
                      <td id="file-pdf-cs-LC21" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The Image that holds the current page being
                            displayed<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L22"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="22"
                      ></td>
                      <td id="file-pdf-cs-LC22" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">Image</span>
                        <span class="pl-s1">image</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L23"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="23"
                      ></td>
                      <td id="file-pdf-cs-LC23" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The Text for the current document title<span
                              class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L24"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="24"
                      ></td>
                      <td id="file-pdf-cs-LC24" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">Text</span>
                        <span class="pl-s1">title</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L25"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="25"
                      ></td>
                      <td id="file-pdf-cs-LC25" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The position of the forward direction of the
                            owning player<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L26"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="26"
                      ></td>
                      <td id="file-pdf-cs-LC26" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">Transform</span>
                        <span class="pl-s1">playerForwardDir</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L27"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="27"
                      ></td>
                      <td id="file-pdf-cs-LC27" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The position of the owning player<span
                              class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L28"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="28"
                      ></td>
                      <td id="file-pdf-cs-LC28" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">Transform</span>
                        <span class="pl-s1">player</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L29"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="29"
                      ></td>
                      <td id="file-pdf-cs-LC29" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">int</span> <span class="pl-s1">currentPage</span
                        ><span class="pl-kos">;</span>
                        <span class="pl-c">// The index of the current document</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L30"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="30"
                      ></td>
                      <td id="file-pdf-cs-LC30" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">string</span> <span class="pl-s1">selectedPdf</span
                        ><span class="pl-kos">;</span>
                        <span class="pl-c">// The selected document title</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L31"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="31"
                      ></td>
                      <td id="file-pdf-cs-LC31" class="blob-code blob-code-inner js-file-line"></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L32"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="32"
                      ></td>
                      <td id="file-pdf-cs-LC32" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">Dictionary</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">string</span><span class="pl-kos">,</span>
                        <span class="pl-smi">int</span><span class="pl-c1">&gt;</span>
                        <span class="pl-s1">maxPages</span><span class="pl-kos">;</span>
                        <span class="pl-c"
                          >// The dictionary containing max page numbers for all documents</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L33"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="33"
                      ></td>
                      <td id="file-pdf-cs-LC33" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">List</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">string</span><span class="pl-c1">&gt;</span>
                        <span class="pl-s1">pdfs</span><span class="pl-kos">;</span>
                        <span class="pl-c">// The list of document names</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L34"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="34"
                      ></td>
                      <td id="file-pdf-cs-LC34" class="blob-code blob-code-inner js-file-line"></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L35"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="35"
                      ></td>
                      <td id="file-pdf-cs-LC35" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">void</span> <span class="pl-en">Awake</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L36"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="36"
                      ></td>
                      <td id="file-pdf-cs-LC36" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L37"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="37"
                      ></td>
                      <td id="file-pdf-cs-LC37" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Gets list of PDF files in Assets/PDF</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L38"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="38"
                      ></td>
                      <td id="file-pdf-cs-LC38" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">string</span><span class="pl-kos">[</span
                        ><span class="pl-kos">]</span> <span class="pl-s1">pdfsFile</span>
                        <span class="pl-c1">=</span> Directory<span class="pl-kos">.</span
                        ><span class="pl-en">GetFiles</span
                        ><span class="pl-kos">(</span>Directory<span class="pl-kos">.</span
                        ><span class="pl-en">GetCurrentDirectory</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span> <span class="pl-c1">+</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>/Assets/Assets/PDF/<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">,</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>*.pdf<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L39"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="39"
                      ></td>
                      <td id="file-pdf-cs-LC39" class="blob-code blob-code-inner js-file-line"></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L40"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="40"
                      ></td>
                      <td id="file-pdf-cs-LC40" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">pdfs</span> <span class="pl-c1">=</span>
                        <span class="pl-k">new</span> <span class="pl-smi">List</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">string</span
                        ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L41"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="41"
                      ></td>
                      <td id="file-pdf-cs-LC41" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">maxPages</span> <span class="pl-c1">=</span>
                        <span class="pl-k">new</span> <span class="pl-smi">Dictionary</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">string</span
                        ><span class="pl-kos">,</span> <span class="pl-smi">int</span
                        ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L42"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="42"
                      ></td>
                      <td id="file-pdf-cs-LC42" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">foreach</span> <span class="pl-kos">(</span
                        ><span class="pl-smi">string</span> pdf
                        <span class="pl-k">in</span> pdfsFile<span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L43"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="43"
                      ></td>
                      <td id="file-pdf-cs-LC43" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L44"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="44"
                      ></td>
                      <td id="file-pdf-cs-LC44" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">string</span> <span class="pl-s1">inputPdfPath</span>
                        <span class="pl-c1">=</span> Path<span class="pl-kos">.</span
                        ><span class="pl-en">Combine</span
                        ><span class="pl-kos">(</span>Directory<span class="pl-kos">.</span
                        ><span class="pl-en">GetCurrentDirectory</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span> <span class="pl-c1">+</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>/Assets/Assets/PDF/<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">,</span> pdf<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L45"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="45"
                      ></td>
                      <td id="file-pdf-cs-LC45" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">string</span> <span class="pl-s1">pdfName</span>
                        <span class="pl-c1">=</span> pdf<span class="pl-kos">.</span
                        ><span class="pl-en">Substring</span><span class="pl-kos">(</span
                        ><span class="pl-c1">0</span><span class="pl-kos">,</span> pdf<span
                          class="pl-kos"
                          >.</span
                        >Length <span class="pl-c1">-</span> <span class="pl-c1">4</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L46"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="46"
                      ></td>
                      <td id="file-pdf-cs-LC46" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">string</span> <span class="pl-s1">outputPath</span>
                        <span class="pl-c1">=</span> Path<span class="pl-kos">.</span
                        ><span class="pl-en">Combine</span
                        ><span class="pl-kos">(</span>Directory<span class="pl-kos">.</span
                        ><span class="pl-en">GetCurrentDirectory</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span> <span class="pl-c1">+</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>/Assets/Assets/PDF/<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">,</span> pdfName<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L47"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="47"
                      ></td>
                      <td id="file-pdf-cs-LC47" class="blob-code blob-code-inner js-file-line">
                        pdfs<span class="pl-kos">.</span><span class="pl-en">Add</span
                        ><span class="pl-kos">(</span>pdf<span class="pl-kos">.</span
                        ><span class="pl-en">Substring</span><span class="pl-kos">(</span
                        ><span class="pl-c1">0</span><span class="pl-kos">,</span> pdf<span
                          class="pl-kos"
                          >.</span
                        >Length <span class="pl-c1">-</span> <span class="pl-c1">4</span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L48"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="48"
                      ></td>
                      <td id="file-pdf-cs-LC48" class="blob-code blob-code-inner js-file-line">
                        maxPages<span class="pl-kos">.</span><span class="pl-en">Add</span
                        ><span class="pl-kos">(</span>pdfName<span class="pl-kos">,</span>
                        Directory<span class="pl-kos">.</span><span class="pl-en">GetFiles</span
                        ><span class="pl-kos">(</span>outputPath<span class="pl-kos">,</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>*<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">.</span>Length<span
                          class="pl-kos"
                          >)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L49"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="49"
                      ></td>
                      <td id="file-pdf-cs-LC49" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L50"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="50"
                      ></td>
                      <td id="file-pdf-cs-LC50" class="blob-code blob-code-inner js-file-line"></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L51"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="51"
                      ></td>
                      <td id="file-pdf-cs-LC51" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Gets preview images</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L52"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="52"
                      ></td>
                      <td id="file-pdf-cs-LC52" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">topImg</span>
                        <span class="pl-c1">=</span> topManager<span class="pl-kos">.</span
                        >transform<span class="pl-kos">.</span><span class="pl-en">GetChild</span
                        ><span class="pl-kos">(</span><span class="pl-c1">1</span
                        ><span class="pl-kos">)</span><span class="pl-kos">.</span
                        ><span class="pl-smi">GetComponent</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">Image</span><span class="pl-c1">&gt;</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L53"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="53"
                      ></td>
                      <td id="file-pdf-cs-LC53" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">middleImg</span>
                        <span class="pl-c1">=</span> middleManager<span class="pl-kos">.</span
                        >transform<span class="pl-kos">.</span><span class="pl-en">GetChild</span
                        ><span class="pl-kos">(</span><span class="pl-c1">1</span
                        ><span class="pl-kos">)</span><span class="pl-kos">.</span
                        ><span class="pl-smi">GetComponent</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">Image</span><span class="pl-c1">&gt;</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L54"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="54"
                      ></td>
                      <td id="file-pdf-cs-LC54" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">bottomImg</span>
                        <span class="pl-c1">=</span> bottomManager<span class="pl-kos">.</span
                        >transform<span class="pl-kos">.</span><span class="pl-en">GetChild</span
                        ><span class="pl-kos">(</span><span class="pl-c1">1</span
                        ><span class="pl-kos">)</span><span class="pl-kos">.</span
                        ><span class="pl-smi">GetComponent</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">Image</span><span class="pl-c1">&gt;</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L55"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="55"
                      ></td>
                      <td id="file-pdf-cs-LC55" class="blob-code blob-code-inner js-file-line"></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L56"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="56"
                      ></td>
                      <td id="file-pdf-cs-LC56" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Gets preview text</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L57"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="57"
                      ></td>
                      <td id="file-pdf-cs-LC57" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">topTxt</span>
                        <span class="pl-c1">=</span> topManager<span class="pl-kos">.</span
                        >transform<span class="pl-kos">.</span><span class="pl-en">GetChild</span
                        ><span class="pl-kos">(</span><span class="pl-c1">0</span
                        ><span class="pl-kos">)</span><span class="pl-kos">.</span
                        ><span class="pl-smi">GetComponent</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">Text</span><span class="pl-c1">&gt;</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L58"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="58"
                      ></td>
                      <td id="file-pdf-cs-LC58" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">middleTxt</span>
                        <span class="pl-c1">=</span> middleManager<span class="pl-kos">.</span
                        >transform<span class="pl-kos">.</span><span class="pl-en">GetChild</span
                        ><span class="pl-kos">(</span><span class="pl-c1">0</span
                        ><span class="pl-kos">)</span><span class="pl-kos">.</span
                        ><span class="pl-smi">GetComponent</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">Text</span><span class="pl-c1">&gt;</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L59"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="59"
                      ></td>
                      <td id="file-pdf-cs-LC59" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">bottomTxt</span>
                        <span class="pl-c1">=</span> bottomManager<span class="pl-kos">.</span
                        >transform<span class="pl-kos">.</span><span class="pl-en">GetChild</span
                        ><span class="pl-kos">(</span><span class="pl-c1">0</span
                        ><span class="pl-kos">)</span><span class="pl-kos">.</span
                        ><span class="pl-smi">GetComponent</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">Text</span><span class="pl-c1">&gt;</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L60"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="60"
                      ></td>
                      <td id="file-pdf-cs-LC60" class="blob-code blob-code-inner js-file-line"></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L61"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="61"
                      ></td>
                      <td id="file-pdf-cs-LC61" class="blob-code blob-code-inner js-file-line">
                        LoadList<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L62"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="62"
                      ></td>
                      <td id="file-pdf-cs-LC62" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L63"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="63"
                      ></td>
                      <td id="file-pdf-cs-LC63" class="blob-code blob-code-inner js-file-line"></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L64"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="64"
                      ></td>
                      <td id="file-pdf-cs-LC64" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">private</span> <span class="pl-smi">void</span>
                        <span class="pl-en">OnEnable</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L65"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="65"
                      ></td>
                      <td id="file-pdf-cs-LC65" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L66"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="66"
                      ></td>
                      <td id="file-pdf-cs-LC66" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Puts PDF 1m in front of player</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L67"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="67"
                      ></td>
                      <td id="file-pdf-cs-LC67" class="blob-code blob-code-inner js-file-line">
                        transform<span class="pl-kos">.</span>position
                        <span class="pl-c1">=</span> playerForwardDir<span class="pl-kos">.</span
                        >position <span class="pl-c1">+</span> playerForwardDir<span class="pl-kos"
                          >.</span
                        >forward<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L68"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="68"
                      ></td>
                      <td id="file-pdf-cs-LC68" class="blob-code blob-code-inner js-file-line"></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L69"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="69"
                      ></td>
                      <td id="file-pdf-cs-LC69" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">Quaternion</span>
                        <span class="pl-s1">newRotation</span>
                        <span class="pl-c1">=</span> Quaternion<span class="pl-kos">.</span
                        ><span class="pl-en">LookRotation</span
                        ><span class="pl-kos">(</span>player<span class="pl-kos">.</span>position
                        <span class="pl-c1">-</span> transform<span class="pl-kos">.</span
                        >position<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L70"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="70"
                      ></td>
                      <td id="file-pdf-cs-LC70" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">Vector3</span>
                        <span class="pl-s1">eulerRotation</span>
                        <span class="pl-c1">=</span> newRotation<span class="pl-kos">.</span
                        >eulerAngles<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L71"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="71"
                      ></td>
                      <td id="file-pdf-cs-LC71" class="blob-code blob-code-inner js-file-line">
                        eulerRotation<span class="pl-kos">.</span>x <span class="pl-c1">=</span>
                        <span class="pl-c1">0f</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L72"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="72"
                      ></td>
                      <td id="file-pdf-cs-LC72" class="blob-code blob-code-inner js-file-line">
                        eulerRotation<span class="pl-kos">.</span>y <span class="pl-c1">+=</span>
                        <span class="pl-c1">180f</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L73"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="73"
                      ></td>
                      <td id="file-pdf-cs-LC73" class="blob-code blob-code-inner js-file-line">
                        transform<span class="pl-kos">.</span>eulerAngles
                        <span class="pl-c1">=</span> <span class="pl-s1">eulerRotation</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L74"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="74"
                      ></td>
                      <td id="file-pdf-cs-LC74" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L75"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="75"
                      ></td>
                      <td id="file-pdf-cs-LC75" class="blob-code blob-code-inner js-file-line"></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L76"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="76"
                      ></td>
                      <td id="file-pdf-cs-LC76" class="blob-code blob-code-inner js-file-line">
                        Sprite <span class="pl-en">GetPage</span><span class="pl-kos">(</span
                        ><span class="pl-smi">string</span> <span class="pl-s1">pdf</span
                        ><span class="pl-kos">,</span> <span class="pl-smi">int</span>
                        <span class="pl-s1">page</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L77"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="77"
                      ></td>
                      <td id="file-pdf-cs-LC77" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L78"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="78"
                      ></td>
                      <td id="file-pdf-cs-LC78" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Sets title</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L79"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="79"
                      ></td>
                      <td id="file-pdf-cs-LC79" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">string</span><span class="pl-kos">[</span
                        ><span class="pl-kos">]</span> <span class="pl-s1">split</span>
                        <span class="pl-c1">=</span> pdf<span class="pl-kos">.</span
                        ><span class="pl-en">Split</span><span class="pl-kos">(</span
                        ><span class="pl-s">'/'</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L80"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="80"
                      ></td>
                      <td id="file-pdf-cs-LC80" class="blob-code blob-code-inner js-file-line">
                        title<span class="pl-kos">.</span>text
                        <span class="pl-c1">=</span> split<span class="pl-kos">[</span>split<span
                          class="pl-kos"
                          >.</span
                        >Length <span class="pl-c1">-</span> <span class="pl-c1">1</span
                        ><span class="pl-kos">]</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L81"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="81"
                      ></td>
                      <td id="file-pdf-cs-LC81" class="blob-code blob-code-inner js-file-line"></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L82"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="82"
                      ></td>
                      <td id="file-pdf-cs-LC82" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Create sprite texture</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L83"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="83"
                      ></td>
                      <td id="file-pdf-cs-LC83" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">Texture2D</span> <span class="pl-s1">pdfTexture</span>
                        <span class="pl-c1">=</span> <span class="pl-k">new</span> Texture2D<span
                          class="pl-kos"
                          >(</span
                        ><span class="pl-c1">1</span><span class="pl-kos">,</span>
                        <span class="pl-c1">1</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L84"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="84"
                      ></td>
                      <td id="file-pdf-cs-LC84" class="blob-code blob-code-inner js-file-line"></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L85"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="85"
                      ></td>
                      <td id="file-pdf-cs-LC85" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Loads image from path</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L86"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="86"
                      ></td>
                      <td id="file-pdf-cs-LC86" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">string</span> <span class="pl-s1">path</span>
                        <span class="pl-c1">=</span> <span class="pl-s1">pdf</span>
                        <span class="pl-c1">+</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>/<span class="pl-s">"</span></span
                        >
                        <span class="pl-c1">+</span> page<span class="pl-kos">.</span
                        ><span class="pl-en">ToString</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span> <span class="pl-c1">+</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>.png<span class="pl-s">"</span></span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L87"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="87"
                      ></td>
                      <td id="file-pdf-cs-LC87" class="blob-code blob-code-inner js-file-line">
                        pdfTexture<span class="pl-kos">.</span><span class="pl-en">LoadImage</span
                        ><span class="pl-kos">(</span>System<span class="pl-kos">.</span>IO<span
                          class="pl-kos"
                          >.</span
                        >File<span class="pl-kos">.</span><span class="pl-en">ReadAllBytes</span
                        ><span class="pl-kos">(</span>path<span class="pl-kos">)</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L88"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="88"
                      ></td>
                      <td id="file-pdf-cs-LC88" class="blob-code blob-code-inner js-file-line"></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L89"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="89"
                      ></td>
                      <td id="file-pdf-cs-LC89" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Returns image as sprite</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L90"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="90"
                      ></td>
                      <td id="file-pdf-cs-LC90" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">return</span> Sprite<span class="pl-kos">.</span
                        ><span class="pl-en">Create</span
                        ><span class="pl-kos">(</span>pdfTexture<span class="pl-kos">,</span>
                        <span class="pl-k">new</span> Rect<span class="pl-kos">(</span
                        ><span class="pl-c1">0</span><span class="pl-kos">,</span>
                        <span class="pl-c1">0</span><span class="pl-kos">,</span> pdfTexture<span
                          class="pl-kos"
                          >.</span
                        >width<span class="pl-kos">,</span> pdfTexture<span class="pl-kos">.</span
                        >height<span class="pl-kos">)</span><span class="pl-kos">,</span>
                        <span class="pl-k">new</span> Vector2<span class="pl-kos">(</span
                        ><span class="pl-c1">0.5f</span><span class="pl-kos">,</span>
                        <span class="pl-c1">0.5f</span><span class="pl-kos">)</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L91"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="91"
                      ></td>
                      <td id="file-pdf-cs-LC91" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L92"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="92"
                      ></td>
                      <td id="file-pdf-cs-LC92" class="blob-code blob-code-inner js-file-line"></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L93"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="93"
                      ></td>
                      <td id="file-pdf-cs-LC93" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">void</span>
                        <span class="pl-en">OnLeftClick</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L94"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="94"
                      ></td>
                      <td id="file-pdf-cs-LC94" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L95"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="95"
                      ></td>
                      <td id="file-pdf-cs-LC95" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-s1">currentPage</span> <span class="pl-c1">&gt;</span>
                        <span class="pl-c1">0</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L96"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="96"
                      ></td>
                      <td id="file-pdf-cs-LC96" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">currentPage</span><span class="pl-c1">--</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L97"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="97"
                      ></td>
                      <td id="file-pdf-cs-LC97" class="blob-code blob-code-inner js-file-line"></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L98"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="98"
                      ></td>
                      <td id="file-pdf-cs-LC98" class="blob-code blob-code-inner js-file-line">
                        image<span class="pl-kos">.</span><span class="pl-smi">GetComponent</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">Image</span
                        ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">.</span>sprite
                        <span class="pl-c1">=</span> GetPage<span class="pl-kos">(</span
                        >selectedPdf<span class="pl-kos">,</span> currentPage<span class="pl-kos"
                          >)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L99"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="99"
                      ></td>
                      <td id="file-pdf-cs-LC99" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L100"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="100"
                      ></td>
                      <td
                        id="file-pdf-cs-LC100"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L101"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="101"
                      ></td>
                      <td id="file-pdf-cs-LC101" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">void</span>
                        <span class="pl-en">OnRightClick</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L102"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="102"
                      ></td>
                      <td id="file-pdf-cs-LC102" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L103"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="103"
                      ></td>
                      <td id="file-pdf-cs-LC103" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-s1">currentPage</span>
                        <span class="pl-c1">&lt;</span> maxPages<span class="pl-kos">[</span
                        >selectedPdf<span class="pl-kos">]</span><span class="pl-c1">-</span
                        ><span class="pl-c1">1</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L104"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="104"
                      ></td>
                      <td id="file-pdf-cs-LC104" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">currentPage</span><span class="pl-c1">++</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L105"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="105"
                      ></td>
                      <td
                        id="file-pdf-cs-LC105"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L106"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="106"
                      ></td>
                      <td id="file-pdf-cs-LC106" class="blob-code blob-code-inner js-file-line">
                        image<span class="pl-kos">.</span><span class="pl-smi">GetComponent</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">Image</span
                        ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">.</span>sprite
                        <span class="pl-c1">=</span> GetPage<span class="pl-kos">(</span
                        >selectedPdf<span class="pl-kos">,</span> currentPage<span class="pl-kos"
                          >)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L107"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="107"
                      ></td>
                      <td id="file-pdf-cs-LC107" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L108"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="108"
                      ></td>
                      <td
                        id="file-pdf-cs-LC108"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L109"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="109"
                      ></td>
                      <td id="file-pdf-cs-LC109" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">void</span> <span class="pl-en">LoadPage</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L110"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="110"
                      ></td>
                      <td id="file-pdf-cs-LC110" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L111"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="111"
                      ></td>
                      <td id="file-pdf-cs-LC111" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Hides List</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L112"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="112"
                      ></td>
                      <td id="file-pdf-cs-LC112" class="blob-code blob-code-inner js-file-line">
                        list<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">false</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L113"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="113"
                      ></td>
                      <td
                        id="file-pdf-cs-LC113"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L114"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="114"
                      ></td>
                      <td id="file-pdf-cs-LC114" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Unhides Display</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L115"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="115"
                      ></td>
                      <td id="file-pdf-cs-LC115" class="blob-code blob-code-inner js-file-line">
                        display<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">true</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L116"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="116"
                      ></td>
                      <td
                        id="file-pdf-cs-LC116"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L117"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="117"
                      ></td>
                      <td id="file-pdf-cs-LC117" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Replaces sprite with first PDF</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L118"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="118"
                      ></td>
                      <td id="file-pdf-cs-LC118" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">currentPage</span> <span class="pl-c1">=</span>
                        <span class="pl-c1">0</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L119"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="119"
                      ></td>
                      <td id="file-pdf-cs-LC119" class="blob-code blob-code-inner js-file-line">
                        image<span class="pl-kos">.</span>sprite
                        <span class="pl-c1">=</span> GetPage<span class="pl-kos">(</span
                        >selectedPdf<span class="pl-kos">,</span> <span class="pl-c1">0</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L120"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="120"
                      ></td>
                      <td id="file-pdf-cs-LC120" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L121"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="121"
                      ></td>
                      <td
                        id="file-pdf-cs-LC121"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L122"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="122"
                      ></td>
                      <td id="file-pdf-cs-LC122" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">void</span> <span class="pl-en">LoadList</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L123"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="123"
                      ></td>
                      <td id="file-pdf-cs-LC123" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L124"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="124"
                      ></td>
                      <td id="file-pdf-cs-LC124" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">/*</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L125"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="125"
                      ></td>
                      <td id="file-pdf-cs-LC125" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c"> * Loads the browsing list</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L126"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="126"
                      ></td>
                      <td id="file-pdf-cs-LC126" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c"> */</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L127"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="127"
                      ></td>
                      <td
                        id="file-pdf-cs-LC127"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L128"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="128"
                      ></td>
                      <td id="file-pdf-cs-LC128" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">string</span> <span class="pl-s1">top</span>
                        <span class="pl-c1">=</span> pdfs<span class="pl-kos">[</span>listIndex<span
                          class="pl-kos"
                          >]</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L129"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="129"
                      ></td>
                      <td id="file-pdf-cs-LC129" class="blob-code blob-code-inner js-file-line">
                        topImg<span class="pl-kos">.</span>sprite
                        <span class="pl-c1">=</span> GetPage<span class="pl-kos">(</span>top<span
                          class="pl-kos"
                          >,</span
                        >
                        <span class="pl-c1">0</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L130"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="130"
                      ></td>
                      <td id="file-pdf-cs-LC130" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">string</span><span class="pl-kos">[</span
                        ><span class="pl-kos">]</span> <span class="pl-s1">topSplit</span>
                        <span class="pl-c1">=</span> top<span class="pl-kos">.</span
                        ><span class="pl-en">Split</span><span class="pl-kos">(</span
                        ><span class="pl-s">'/'</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L131"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="131"
                      ></td>
                      <td id="file-pdf-cs-LC131" class="blob-code blob-code-inner js-file-line">
                        topTxt<span class="pl-kos">.</span>text
                        <span class="pl-c1">=</span> topSplit<span class="pl-kos">[</span
                        >topSplit<span class="pl-kos">.</span>Length <span class="pl-c1">-</span>
                        <span class="pl-c1">1</span><span class="pl-kos">]</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L132"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="132"
                      ></td>
                      <td
                        id="file-pdf-cs-LC132"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L133"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="133"
                      ></td>
                      <td id="file-pdf-cs-LC133" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">string</span> <span class="pl-s1">middle</span>
                        <span class="pl-c1">=</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span><span class="pl-s">"</span></span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L134"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="134"
                      ></td>
                      <td id="file-pdf-cs-LC134" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">string</span> <span class="pl-s1">bottom</span>
                        <span class="pl-c1">=</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span><span class="pl-s">"</span></span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L135"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="135"
                      ></td>
                      <td id="file-pdf-cs-LC135" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>pdfs<span
                          class="pl-kos"
                          >.</span
                        >Count <span class="pl-c1">&gt;</span> <span class="pl-c1">1</span>
                        <span class="pl-c1">+</span> <span class="pl-s1">listIndex</span
                        ><span class="pl-kos">)</span> <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L136"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="136"
                      ></td>
                      <td id="file-pdf-cs-LC136" class="blob-code blob-code-inner js-file-line">
                        middleManager<span class="pl-kos">.</span
                        ><span class="pl-en">SetActive</span><span class="pl-kos">(</span
                        ><span class="pl-c1">true</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L137"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="137"
                      ></td>
                      <td id="file-pdf-cs-LC137" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">middle</span> <span class="pl-c1">=</span> pdfs<span
                          class="pl-kos"
                          >[</span
                        ><span class="pl-s1">listIndex</span> <span class="pl-c1">+</span>
                        <span class="pl-c1">1</span><span class="pl-kos">]</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L138"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="138"
                      ></td>
                      <td id="file-pdf-cs-LC138" class="blob-code blob-code-inner js-file-line">
                        middleImg<span class="pl-kos">.</span>sprite
                        <span class="pl-c1">=</span> GetPage<span class="pl-kos">(</span>middle<span
                          class="pl-kos"
                          >,</span
                        >
                        <span class="pl-c1">0</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L139"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="139"
                      ></td>
                      <td id="file-pdf-cs-LC139" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">string</span><span class="pl-kos">[</span
                        ><span class="pl-kos">]</span> <span class="pl-s1">middleSplit</span>
                        <span class="pl-c1">=</span> middle<span class="pl-kos">.</span
                        ><span class="pl-en">Split</span><span class="pl-kos">(</span
                        ><span class="pl-s">'/'</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L140"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="140"
                      ></td>
                      <td id="file-pdf-cs-LC140" class="blob-code blob-code-inner js-file-line">
                        middleTxt<span class="pl-kos">.</span>text
                        <span class="pl-c1">=</span> middleSplit<span class="pl-kos">[</span
                        >middleSplit<span class="pl-kos">.</span>Length
                        <span class="pl-c1">-</span> <span class="pl-c1">1</span
                        ><span class="pl-kos">]</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L141"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="141"
                      ></td>
                      <td id="file-pdf-cs-LC141" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span> <span class="pl-k">else</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L142"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="142"
                      ></td>
                      <td id="file-pdf-cs-LC142" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L143"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="143"
                      ></td>
                      <td id="file-pdf-cs-LC143" class="blob-code blob-code-inner js-file-line">
                        middleManager<span class="pl-kos">.</span
                        ><span class="pl-en">SetActive</span><span class="pl-kos">(</span
                        ><span class="pl-c1">false</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L144"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="144"
                      ></td>
                      <td id="file-pdf-cs-LC144" class="blob-code blob-code-inner js-file-line">
                        middleImg<span class="pl-kos">.</span>sprite <span class="pl-c1">=</span>
                        <span class="pl-c1">null</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L145"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="145"
                      ></td>
                      <td id="file-pdf-cs-LC145" class="blob-code blob-code-inner js-file-line">
                        middleTxt<span class="pl-kos">.</span>text <span class="pl-c1">=</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span><span class="pl-s">"</span></span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L146"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="146"
                      ></td>
                      <td id="file-pdf-cs-LC146" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L147"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="147"
                      ></td>
                      <td
                        id="file-pdf-cs-LC147"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L148"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="148"
                      ></td>
                      <td id="file-pdf-cs-LC148" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>pdfs<span
                          class="pl-kos"
                          >.</span
                        >Count <span class="pl-c1">&gt;</span> <span class="pl-c1">2</span>
                        <span class="pl-c1">+</span> <span class="pl-s1">listIndex</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L149"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="149"
                      ></td>
                      <td id="file-pdf-cs-LC149" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L150"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="150"
                      ></td>
                      <td id="file-pdf-cs-LC150" class="blob-code blob-code-inner js-file-line">
                        bottomManager<span class="pl-kos">.</span
                        ><span class="pl-en">SetActive</span><span class="pl-kos">(</span
                        ><span class="pl-c1">true</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L151"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="151"
                      ></td>
                      <td id="file-pdf-cs-LC151" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">bottom</span> <span class="pl-c1">=</span> pdfs<span
                          class="pl-kos"
                          >[</span
                        ><span class="pl-s1">listIndex</span> <span class="pl-c1">+</span>
                        <span class="pl-c1">2</span><span class="pl-kos">]</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L152"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="152"
                      ></td>
                      <td id="file-pdf-cs-LC152" class="blob-code blob-code-inner js-file-line">
                        bottomImg<span class="pl-kos">.</span>sprite
                        <span class="pl-c1">=</span> GetPage<span class="pl-kos">(</span>bottom<span
                          class="pl-kos"
                          >,</span
                        >
                        <span class="pl-c1">0</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L153"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="153"
                      ></td>
                      <td id="file-pdf-cs-LC153" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-smi">string</span><span class="pl-kos">[</span
                        ><span class="pl-kos">]</span> <span class="pl-s1">bottomSplit</span>
                        <span class="pl-c1">=</span> bottom<span class="pl-kos">.</span
                        ><span class="pl-en">Split</span><span class="pl-kos">(</span
                        ><span class="pl-s">'/'</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L154"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="154"
                      ></td>
                      <td id="file-pdf-cs-LC154" class="blob-code blob-code-inner js-file-line">
                        bottomTxt<span class="pl-kos">.</span>text
                        <span class="pl-c1">=</span> bottomSplit<span class="pl-kos">[</span
                        >bottomSplit<span class="pl-kos">.</span>Length
                        <span class="pl-c1">-</span> <span class="pl-c1">1</span
                        ><span class="pl-kos">]</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L155"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="155"
                      ></td>
                      <td id="file-pdf-cs-LC155" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span> <span class="pl-k">else</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L156"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="156"
                      ></td>
                      <td id="file-pdf-cs-LC156" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L157"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="157"
                      ></td>
                      <td id="file-pdf-cs-LC157" class="blob-code blob-code-inner js-file-line">
                        bottomManager<span class="pl-kos">.</span
                        ><span class="pl-en">SetActive</span><span class="pl-kos">(</span
                        ><span class="pl-c1">false</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L158"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="158"
                      ></td>
                      <td id="file-pdf-cs-LC158" class="blob-code blob-code-inner js-file-line">
                        bottomImg<span class="pl-kos">.</span>sprite <span class="pl-c1">=</span>
                        <span class="pl-c1">null</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L159"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="159"
                      ></td>
                      <td id="file-pdf-cs-LC159" class="blob-code blob-code-inner js-file-line">
                        bottomTxt<span class="pl-kos">.</span>text <span class="pl-c1">=</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span><span class="pl-s">"</span></span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L160"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="160"
                      ></td>
                      <td id="file-pdf-cs-LC160" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L161"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="161"
                      ></td>
                      <td id="file-pdf-cs-LC161" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L162"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="162"
                      ></td>
                      <td
                        id="file-pdf-cs-LC162"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L163"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="163"
                      ></td>
                      <td id="file-pdf-cs-LC163" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">void</span>
                        <span class="pl-en">TopPage</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L164"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="164"
                      ></td>
                      <td id="file-pdf-cs-LC164" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L165"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="165"
                      ></td>
                      <td id="file-pdf-cs-LC165" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">selectedPdf</span>
                        <span class="pl-c1">=</span> pdfs<span class="pl-kos">[</span>listIndex<span
                          class="pl-kos"
                          >]</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L166"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="166"
                      ></td>
                      <td id="file-pdf-cs-LC166" class="blob-code blob-code-inner js-file-line">
                        LoadPage<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L167"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="167"
                      ></td>
                      <td id="file-pdf-cs-LC167" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">listIndex</span> <span class="pl-c1">+=</span>
                        <span class="pl-c1">3</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L168"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="168"
                      ></td>
                      <td id="file-pdf-cs-LC168" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L169"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="169"
                      ></td>
                      <td
                        id="file-pdf-cs-LC169"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L170"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="170"
                      ></td>
                      <td id="file-pdf-cs-LC170" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">void</span>
                        <span class="pl-en">MiddlePage</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L171"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="171"
                      ></td>
                      <td id="file-pdf-cs-LC171" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L172"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="172"
                      ></td>
                      <td id="file-pdf-cs-LC172" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">selectedPdf</span>
                        <span class="pl-c1">=</span> pdfs<span class="pl-kos">[</span
                        ><span class="pl-s1">listIndex</span> <span class="pl-c1">+</span>
                        <span class="pl-c1">1</span><span class="pl-kos">]</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L173"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="173"
                      ></td>
                      <td id="file-pdf-cs-LC173" class="blob-code blob-code-inner js-file-line">
                        LoadPage<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L174"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="174"
                      ></td>
                      <td id="file-pdf-cs-LC174" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">listIndex</span> <span class="pl-c1">+=</span>
                        <span class="pl-c1">3</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L175"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="175"
                      ></td>
                      <td id="file-pdf-cs-LC175" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L176"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="176"
                      ></td>
                      <td
                        id="file-pdf-cs-LC176"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L177"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="177"
                      ></td>
                      <td id="file-pdf-cs-LC177" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">void</span>
                        <span class="pl-en">BottomPage</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L178"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="178"
                      ></td>
                      <td id="file-pdf-cs-LC178" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L179"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="179"
                      ></td>
                      <td id="file-pdf-cs-LC179" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">selectedPdf</span>
                        <span class="pl-c1">=</span> pdfs<span class="pl-kos">[</span
                        ><span class="pl-s1">listIndex</span> <span class="pl-c1">+</span>
                        <span class="pl-c1">2</span><span class="pl-kos">]</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L180"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="180"
                      ></td>
                      <td id="file-pdf-cs-LC180" class="blob-code blob-code-inner js-file-line">
                        LoadPage<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L181"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="181"
                      ></td>
                      <td id="file-pdf-cs-LC181" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">listIndex</span> <span class="pl-c1">+=</span>
                        <span class="pl-c1">3</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L182"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="182"
                      ></td>
                      <td id="file-pdf-cs-LC182" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L183"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="183"
                      ></td>
                      <td
                        id="file-pdf-cs-LC183"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L184"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="184"
                      ></td>
                      <td id="file-pdf-cs-LC184" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">void</span>
                        <span class="pl-en">ScrollUp</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L185"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="185"
                      ></td>
                      <td id="file-pdf-cs-LC185" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L186"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="186"
                      ></td>
                      <td id="file-pdf-cs-LC186" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-s1">listIndex</span> &gt;= <span class="pl-c1">3</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L187"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="187"
                      ></td>
                      <td id="file-pdf-cs-LC187" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L188"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="188"
                      ></td>
                      <td id="file-pdf-cs-LC188" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">listIndex</span> <span class="pl-c1">-=</span>
                        <span class="pl-c1">3</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L189"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="189"
                      ></td>
                      <td id="file-pdf-cs-LC189" class="blob-code blob-code-inner js-file-line">
                        LoadList<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L190"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="190"
                      ></td>
                      <td id="file-pdf-cs-LC190" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L191"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="191"
                      ></td>
                      <td id="file-pdf-cs-LC191" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L192"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="192"
                      ></td>
                      <td
                        id="file-pdf-cs-LC192"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L193"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="193"
                      ></td>
                      <td id="file-pdf-cs-LC193" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">void</span>
                        <span class="pl-en">ScrollDown</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L194"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="194"
                      ></td>
                      <td id="file-pdf-cs-LC194" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L195"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="195"
                      ></td>
                      <td id="file-pdf-cs-LC195" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-s1">listIndex</span> &lt;= pdfs<span class="pl-kos">.</span
                        >Count<span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L196"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="196"
                      ></td>
                      <td id="file-pdf-cs-LC196" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L197"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="197"
                      ></td>
                      <td id="file-pdf-cs-LC197" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">listIndex</span> <span class="pl-c1">+=</span>
                        <span class="pl-c1">3</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L198"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="198"
                      ></td>
                      <td id="file-pdf-cs-LC198" class="blob-code blob-code-inner js-file-line">
                        LoadList<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L199"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="199"
                      ></td>
                      <td id="file-pdf-cs-LC199" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L200"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="200"
                      ></td>
                      <td id="file-pdf-cs-LC200" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L201"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="201"
                      ></td>
                      <td
                        id="file-pdf-cs-LC201"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L202"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="202"
                      ></td>
                      <td id="file-pdf-cs-LC202" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-k">public</span> <span class="pl-smi">void</span>
                        <span class="pl-en">Back</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L203"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="203"
                      ></td>
                      <td id="file-pdf-cs-LC203" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L204"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="204"
                      ></td>
                      <td id="file-pdf-cs-LC204" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Unhides List</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L205"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="205"
                      ></td>
                      <td id="file-pdf-cs-LC205" class="blob-code blob-code-inner js-file-line">
                        list<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">true</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L206"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="206"
                      ></td>
                      <td
                        id="file-pdf-cs-LC206"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L207"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="207"
                      ></td>
                      <td id="file-pdf-cs-LC207" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-c">// Hides Display</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L208"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="208"
                      ></td>
                      <td id="file-pdf-cs-LC208" class="blob-code blob-code-inner js-file-line">
                        display<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">false</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L209"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="209"
                      ></td>
                      <td
                        id="file-pdf-cs-LC209"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L210"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="210"
                      ></td>
                      <td id="file-pdf-cs-LC210" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-s1">listIndex</span> <span class="pl-c1">=</span>
                        <span class="pl-c1">0</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L211"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="211"
                      ></td>
                      <td id="file-pdf-cs-LC211" class="blob-code blob-code-inner js-file-line">
                        LoadList<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L212"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="212"
                      ></td>
                      <td id="file-pdf-cs-LC212" class="blob-code blob-code-inner js-file-line">
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pdf-cs-L213"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="213"
                      ></td>
                      <td id="file-pdf-cs-LC213" class="blob-code blob-code-inner js-file-line">
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
          href="https://gist.github.com/sadiecrawford/0187399da7d5d41cfeb8aea62ab90124/raw/9ac7f3a1bf14e1e45bd27ef5b8704233148c8b2d/PDF.cs"
          style="float: right"
          class="Link--inTextBlock"
          >view raw</a
        >
        <a
          href="https://gist.github.com/sadiecrawford/0187399da7d5d41cfeb8aea62ab90124#file-pdf-cs"
          class="Link--inTextBlock"
        >
          PDF.cs
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
  name: 'GistPDF'
}
</script>
