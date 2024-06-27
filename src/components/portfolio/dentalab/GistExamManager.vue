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
          <div id="file-exammanager-cs" class="file my-2">
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
                  data-tagsearch-path="ExamManager.cs"
                >
                  <tbody>
                    <tr>
                      <td
                        id="file-exammanager-cs-L1"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="1"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC1"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">using</span> System<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L2"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="2"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC2"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">using</span> System<span class="pl-kos">.</span
                        >Collections<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L3"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="3"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC3"
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
                        id="file-exammanager-cs-L4"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="4"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC4"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">using</span> System<span class="pl-kos">.</span>IO<span
                          class="pl-kos"
                          >;</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L5"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="5"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC5"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">using</span> System<span class="pl-kos">.</span>Linq<span
                          class="pl-kos"
                          >;</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L6"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="6"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC6"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">using</span> UnityEngine<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L7"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="7"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC7"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">using</span> UnityEngine<span class="pl-kos">.</span
                        >UI<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L8"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="8"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC8"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L9"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="9"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC9"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-k">class</span>
                        <span class="pl-smi">ExamManager</span> <span class="pl-c1">:</span>
                        <span class="pl-smi">MonoBehaviour</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L10"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="10"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC10"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L11"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="11"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC11"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The Text for the question display<span
                              class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L12"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="12"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC12"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">Text</span>
                        <span class="pl-s1">question</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L13"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="13"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC13"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The Text for the automatic evaluation
                            display<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L14"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="14"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC14"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">Text</span>
                        <span class="pl-s1">evaluation</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L15"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="15"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC15"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The parents of the GameObjects containing
                            each choice<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L16"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="16"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC16"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">GameObject</span>
                        <span class="pl-s1">a</span><span class="pl-kos">,</span>
                        <span class="pl-s1">b</span><span class="pl-kos">,</span>
                        <span class="pl-s1">c</span><span class="pl-kos">,</span>
                        <span class="pl-s1">d</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L17"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="17"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC17"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The Text for each choice<span class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L18"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="18"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC18"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">Text</span>
                        <span class="pl-s1">aText</span><span class="pl-kos">,</span>
                        <span class="pl-s1">bText</span><span class="pl-kos">,</span>
                        <span class="pl-s1">cText</span><span class="pl-kos">,</span>
                        <span class="pl-s1">dText</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L19"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="19"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC19"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The navigation Buttons<span class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L20"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="20"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC20"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">Button</span>
                        <span class="pl-s1">back</span><span class="pl-kos">,</span>
                        <span class="pl-s1">next</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L21"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="21"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC21"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The Sprites with backgrounds corresponding
                            to selection and choice correctness<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L22"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="22"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC22"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">Sprite</span>
                        <span class="pl-s1">defaultImg</span><span class="pl-kos">,</span>
                        <span class="pl-s1">selectedImg</span><span class="pl-kos">,</span>
                        <span class="pl-s1">wrongImg</span><span class="pl-kos">,</span>
                        <span class="pl-s1">rightImg</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L23"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="23"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC23"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The parent GameObjects holding the Next
                            Button and Submit Button respectively<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L24"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="24"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC24"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">GameObject</span>
                        <span class="pl-s1">nextObj</span><span class="pl-kos">,</span>
                        <span class="pl-s1">submit</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L25"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="25"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC25"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L26"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="26"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC26"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">bool</span> <span class="pl-s1">submitted</span
                        ><span class="pl-kos">;</span>
                        <span class="pl-c">// Tracks if the user has submnitted the exam</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L27"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="27"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC27"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">string</span> <span class="pl-s1">examFileName</span>
                        <span class="pl-c1">=</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>Exam1<span class="pl-s">"</span></span
                        ><span class="pl-kos">;</span>
                        <span class="pl-c">// The name of the .txt file</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L28"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="28"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC28"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">int</span> <span class="pl-s1">index</span
                        ><span class="pl-kos">;</span>
                        <span class="pl-c">// Current question index</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L29"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="29"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC29"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">string</span> <span class="pl-s1">title</span
                        ><span class="pl-kos">;</span> <span class="pl-c">// The exams title</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L30"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="30"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC30"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c"
                          >// Question data: Question, A-D multiple choice questions, and correct
                          answer</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L31"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="31"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC31"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">List</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">Tuple</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">string</span><span class="pl-kos">,</span>
                        <span class="pl-smi">string</span><span class="pl-kos">,</span>
                        <span class="pl-smi">string</span><span class="pl-kos">,</span>
                        <span class="pl-smi">string</span><span class="pl-kos">,</span>
                        <span class="pl-smi">string</span><span class="pl-kos">,</span>
                        <span class="pl-smi">string</span><span class="pl-c1">&gt;</span
                        ><span class="pl-c1">&gt;</span> <span class="pl-s1">questions</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L32"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="32"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC32"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">List</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">string</span><span class="pl-c1">&gt;</span>
                        <span class="pl-s1">answers</span><span class="pl-kos">;</span>
                        <span class="pl-c">// The students answers</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L33"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="33"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC33"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">Button</span> <span class="pl-s1">aBtn</span
                        ><span class="pl-kos">,</span> <span class="pl-s1">bBtn</span
                        ><span class="pl-kos">,</span> <span class="pl-s1">cBtn</span
                        ><span class="pl-kos">,</span> <span class="pl-s1">dBtn</span
                        ><span class="pl-kos">;</span>
                        <span class="pl-c">// Buttons A, B, C, D</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L34"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="34"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC34"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L35"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="35"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC35"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L36"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="36"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC36"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">private</span> <span class="pl-smi">void</span>
                        <span class="pl-en">Start</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L37"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="37"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC37"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L38"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="38"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC38"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Gets buttons</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L39"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="39"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC39"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">aBtn</span> <span class="pl-c1">=</span> a<span
                          class="pl-kos"
                          >.</span
                        ><span class="pl-smi">GetComponentInChildren</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">Button</span
                        ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L40"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="40"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC40"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">bBtn</span> <span class="pl-c1">=</span> b<span
                          class="pl-kos"
                          >.</span
                        ><span class="pl-smi">GetComponentInChildren</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">Button</span
                        ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L41"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="41"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC41"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">cBtn</span> <span class="pl-c1">=</span> c<span
                          class="pl-kos"
                          >.</span
                        ><span class="pl-smi">GetComponentInChildren</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">Button</span
                        ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L42"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="42"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC42"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">dBtn</span> <span class="pl-c1">=</span> d<span
                          class="pl-kos"
                          >.</span
                        ><span class="pl-smi">GetComponentInChildren</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">Button</span
                        ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L43"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="43"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC43"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L44"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="44"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC44"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Adds button listeners</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L45"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="45"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC45"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        back<span class="pl-kos">.</span>onClick<span class="pl-kos">.</span
                        ><span class="pl-en">AddListener</span
                        ><span class="pl-kos">(</span>OnBack<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L46"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="46"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC46"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        next<span class="pl-kos">.</span>onClick<span class="pl-kos">.</span
                        ><span class="pl-en">AddListener</span
                        ><span class="pl-kos">(</span>OnNext<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L47"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="47"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC47"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        aBtn<span class="pl-kos">.</span>onClick<span class="pl-kos">.</span
                        ><span class="pl-en">AddListener</span
                        ><span class="pl-kos">(</span>OnSelectA<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L48"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="48"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC48"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        bBtn<span class="pl-kos">.</span>onClick<span class="pl-kos">.</span
                        ><span class="pl-en">AddListener</span
                        ><span class="pl-kos">(</span>OnSelectB<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L49"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="49"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC49"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        cBtn<span class="pl-kos">.</span>onClick<span class="pl-kos">.</span
                        ><span class="pl-en">AddListener</span
                        ><span class="pl-kos">(</span>OnSelectC<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L50"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="50"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC50"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        dBtn<span class="pl-kos">.</span>onClick<span class="pl-kos">.</span
                        ><span class="pl-en">AddListener</span
                        ><span class="pl-kos">(</span>OnSelectD<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L51"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="51"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC51"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        submit<span class="pl-kos">.</span><span class="pl-smi">GetComponent</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">Button</span
                        ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">.</span>onClick<span
                          class="pl-kos"
                          >.</span
                        ><span class="pl-en">AddListener</span
                        ><span class="pl-kos">(</span>OnSubmit<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L52"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="52"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC52"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L53"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="53"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC53"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        LoadExam<span class="pl-kos">(</span>examFileName<span class="pl-kos"
                          >)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L54"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="54"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC54"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L55"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="55"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC55"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L56"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="56"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC56"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">LoadExam</span
                        ><span class="pl-kos">(</span><span class="pl-smi">string</span>
                        <span class="pl-s1">examFileName</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L57"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="57"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC57"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L58"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="58"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC58"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">/*</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L59"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="59"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC59"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">
                          * Loads given exam from Assets/Assets/Exams directory</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L60"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="60"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC60"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c"> */</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L61"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="61"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC61"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L62"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="62"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC62"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">questions</span> <span class="pl-c1">=</span>
                        <span class="pl-k">new</span> <span class="pl-smi">List</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">Tuple</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">string</span
                        ><span class="pl-kos">,</span> <span class="pl-smi">string</span
                        ><span class="pl-kos">,</span> <span class="pl-smi">string</span
                        ><span class="pl-kos">,</span> <span class="pl-smi">string</span
                        ><span class="pl-kos">,</span> <span class="pl-smi">string</span
                        ><span class="pl-kos">,</span> <span class="pl-smi">string</span
                        ><span class="pl-c1">&gt;</span><span class="pl-c1">&gt;</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L63"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="63"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC63"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">index</span> <span class="pl-c1">=</span>
                        <span class="pl-c1">0</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L64"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="64"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC64"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L65"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="65"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC65"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">string</span> <span class="pl-s1">contents</span>
                        <span class="pl-c1">=</span> Directory<span class="pl-kos">.</span
                        ><span class="pl-en">GetCurrentDirectory</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span> <span class="pl-c1">+</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>/Assets/Assets/Exams/<span class="pl-s"
                            >"</span
                          ></span
                        >
                        <span class="pl-c1">+</span> <span class="pl-s1">examFileName</span>
                        <span class="pl-c1">+</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>.txt<span class="pl-s">"</span></span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L66"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="66"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC66"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L67"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="67"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC67"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">List</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">string</span><span class="pl-c1">&gt;</span>
                        <span class="pl-s1">lines</span> <span class="pl-c1">=</span> File<span
                          class="pl-kos"
                          >.</span
                        ><span class="pl-en">ReadAllLines</span
                        ><span class="pl-kos">(</span>contents<span class="pl-kos">)</span
                        ><span class="pl-kos">.</span><span class="pl-en">ToList</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L68"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="68"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC68"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">title</span> <span class="pl-c1">=</span> lines<span
                          class="pl-kos"
                          >[</span
                        ><span class="pl-c1">0</span><span class="pl-kos">]</span
                        ><span class="pl-kos">;</span> <span class="pl-c">// Stores title</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L69"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="69"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC69"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L70"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="70"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC70"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Stores question, its choices, and answer</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L71"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="71"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC71"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">for</span> <span class="pl-kos">(</span
                        ><span class="pl-smi">int</span> <span class="pl-s1">i</span>
                        <span class="pl-c1">=</span> <span class="pl-c1">2</span
                        ><span class="pl-kos">;</span> <span class="pl-s1">i</span>
                        <span class="pl-c1">&lt;</span> lines<span class="pl-kos">.</span>Count<span
                          class="pl-kos"
                          >;</span
                        >
                        <span class="pl-s1">i</span> <span class="pl-c1">+=</span>
                        <span class="pl-c1">8</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L72"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="72"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC72"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L73"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="73"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC73"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">Tuple</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">string</span><span class="pl-kos">,</span>
                        <span class="pl-smi">string</span><span class="pl-kos">,</span>
                        <span class="pl-smi">string</span><span class="pl-kos">,</span>
                        <span class="pl-smi">string</span><span class="pl-kos">,</span>
                        <span class="pl-smi">string</span><span class="pl-kos">,</span>
                        <span class="pl-smi">string</span><span class="pl-c1">&gt;</span>
                        <span class="pl-s1">question</span> <span class="pl-c1">=</span>
                        <span class="pl-k">new</span> <span class="pl-smi">Tuple</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">string</span
                        ><span class="pl-kos">,</span> <span class="pl-smi">string</span
                        ><span class="pl-kos">,</span> <span class="pl-smi">string</span
                        ><span class="pl-kos">,</span> <span class="pl-smi">string</span
                        ><span class="pl-kos">,</span> <span class="pl-smi">string</span
                        ><span class="pl-kos">,</span> <span class="pl-smi">string</span
                        ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L74"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="74"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC74"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        lines<span class="pl-kos">[</span>i<span class="pl-kos">]</span>
                        <span class="pl-c1">+</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span> <span class="pl-s">"</span></span
                        >
                        <span class="pl-c1">+</span> lines<span class="pl-kos">[</span
                        ><span class="pl-s1">i</span><span class="pl-c1">+</span
                        ><span class="pl-c1">1</span><span class="pl-kos">]</span
                        ><span class="pl-kos">,</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L75"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="75"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC75"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        lines<span class="pl-kos">[</span><span class="pl-s1">i</span
                        ><span class="pl-c1">+</span><span class="pl-c1">2</span
                        ><span class="pl-kos">]</span><span class="pl-kos">,</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L76"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="76"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC76"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        lines<span class="pl-kos">[</span><span class="pl-s1">i</span
                        ><span class="pl-c1">+</span><span class="pl-c1">3</span
                        ><span class="pl-kos">]</span><span class="pl-kos">,</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L77"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="77"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC77"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        lines<span class="pl-kos">[</span><span class="pl-s1">i</span
                        ><span class="pl-c1">+</span><span class="pl-c1">4</span
                        ><span class="pl-kos">]</span><span class="pl-kos">,</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L78"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="78"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC78"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        lines<span class="pl-kos">[</span><span class="pl-s1">i</span
                        ><span class="pl-c1">+</span><span class="pl-c1">5</span
                        ><span class="pl-kos">]</span><span class="pl-kos">,</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L79"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="79"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC79"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        lines<span class="pl-kos">[</span><span class="pl-s1">i</span
                        ><span class="pl-c1">+</span><span class="pl-c1">6</span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L80"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="80"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC80"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L81"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="81"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC81"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        questions<span class="pl-kos">.</span><span class="pl-en">Add</span
                        ><span class="pl-kos">(</span>question<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L82"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="82"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC82"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L83"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="83"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC83"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L84"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="84"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC84"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Fills current answers as blank</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L85"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="85"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC85"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">answers</span> <span class="pl-c1">=</span>
                        <span class="pl-k">new</span> <span class="pl-smi">List</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">string</span
                        ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span>questions<span
                          class="pl-kos"
                          >.</span
                        >Count<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L86"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="86"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC86"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">for</span> <span class="pl-kos">(</span
                        ><span class="pl-smi">int</span> <span class="pl-s1">i</span>
                        <span class="pl-c1">=</span> <span class="pl-c1">0</span
                        ><span class="pl-kos">;</span> <span class="pl-s1">i</span>
                        <span class="pl-c1">&lt;</span> questions<span class="pl-kos">.</span
                        >Count<span class="pl-kos">;</span> <span class="pl-s1">i</span
                        ><span class="pl-c1">++</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L87"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="87"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC87"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        answers<span class="pl-kos">.</span><span class="pl-en">Add</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span><span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L88"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="88"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC88"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L89"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="89"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC89"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        LoadQuestion<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L90"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="90"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC90"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L91"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="91"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC91"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L92"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="92"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC92"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">LoadQuestion</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L93"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="93"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC93"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L94"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="94"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC94"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">/*</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L95"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="95"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC95"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c"> * Loads question onto Canvas</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L96"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="96"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC96"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c"> */</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L97"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="97"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC97"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L98"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="98"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC98"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Displays question of current index</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L99"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="99"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC99"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">Tuple</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">string</span><span class="pl-kos">,</span>
                        <span class="pl-smi">string</span><span class="pl-kos">,</span>
                        <span class="pl-smi">string</span><span class="pl-kos">,</span>
                        <span class="pl-smi">string</span><span class="pl-kos">,</span>
                        <span class="pl-smi">string</span><span class="pl-kos">,</span>
                        <span class="pl-smi">string</span><span class="pl-c1">&gt;</span>
                        <span class="pl-s1">q</span> <span class="pl-c1">=</span> questions<span
                          class="pl-kos"
                          >[</span
                        >index<span class="pl-kos">]</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L100"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="100"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC100"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        question<span class="pl-kos">.</span>text
                        <span class="pl-c1">=</span> q<span class="pl-kos">.</span>Item1<span
                          class="pl-kos"
                          >;</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L101"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="101"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC101"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        aText<span class="pl-kos">.</span>text <span class="pl-c1">=</span> q<span
                          class="pl-kos"
                          >.</span
                        >Item2<span class="pl-kos">.</span><span class="pl-en">Substring</span
                        ><span class="pl-kos">(</span><span class="pl-c1">3</span
                        ><span class="pl-kos">,</span> q<span class="pl-kos">.</span>Item2<span
                          class="pl-kos"
                          >.</span
                        ><span class="pl-en">Count</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-c1">-</span
                        ><span class="pl-c1">3</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L102"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="102"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC102"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        bText<span class="pl-kos">.</span>text <span class="pl-c1">=</span> q<span
                          class="pl-kos"
                          >.</span
                        >Item3<span class="pl-kos">.</span><span class="pl-en">Substring</span
                        ><span class="pl-kos">(</span><span class="pl-c1">3</span
                        ><span class="pl-kos">,</span> q<span class="pl-kos">.</span>Item3<span
                          class="pl-kos"
                          >.</span
                        ><span class="pl-en">Count</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-c1">-</span
                        ><span class="pl-c1">3</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L103"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="103"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC103"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        cText<span class="pl-kos">.</span>text <span class="pl-c1">=</span> q<span
                          class="pl-kos"
                          >.</span
                        >Item4<span class="pl-kos">.</span><span class="pl-en">Substring</span
                        ><span class="pl-kos">(</span><span class="pl-c1">3</span
                        ><span class="pl-kos">,</span> q<span class="pl-kos">.</span>Item4<span
                          class="pl-kos"
                          >.</span
                        ><span class="pl-en">Count</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-c1">-</span
                        ><span class="pl-c1">3</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L104"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="104"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC104"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        dText<span class="pl-kos">.</span>text <span class="pl-c1">=</span> q<span
                          class="pl-kos"
                          >.</span
                        >Item5<span class="pl-kos">.</span><span class="pl-en">Substring</span
                        ><span class="pl-kos">(</span><span class="pl-c1">3</span
                        ><span class="pl-kos">,</span> q<span class="pl-kos">.</span>Item5<span
                          class="pl-kos"
                          >.</span
                        ><span class="pl-en">Count</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-c1">-</span
                        ><span class="pl-c1">3</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L105"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="105"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC105"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L106"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="106"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC106"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        ResetButtonColors<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L107"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="107"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC107"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L108"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="108"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC108"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Sets button to selected color if applicable</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L109"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="109"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC109"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>answers<span
                          class="pl-kos"
                          >[</span
                        >index<span class="pl-kos">]</span><span class="pl-kos">.</span
                        ><span class="pl-en">Equals</span><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>A<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L110"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="110"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC110"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        SetAnswerButtonColors<span class="pl-kos">(</span>a<span class="pl-kos"
                          >)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L111"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="111"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC111"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">else</span> <span class="pl-k">if</span>
                        <span class="pl-kos">(</span>answers<span class="pl-kos">[</span>index<span
                          class="pl-kos"
                          >]</span
                        ><span class="pl-kos">.</span><span class="pl-en">Equals</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>B<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L112"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="112"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC112"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        SetAnswerButtonColors<span class="pl-kos">(</span>b<span class="pl-kos"
                          >)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L113"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="113"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC113"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">else</span> <span class="pl-k">if</span>
                        <span class="pl-kos">(</span>answers<span class="pl-kos">[</span>index<span
                          class="pl-kos"
                          >]</span
                        ><span class="pl-kos">.</span><span class="pl-en">Equals</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>C<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L114"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="114"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC114"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        SetAnswerButtonColors<span class="pl-kos">(</span>c<span class="pl-kos"
                          >)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L115"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="115"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC115"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">else</span> <span class="pl-k">if</span>
                        <span class="pl-kos">(</span>answers<span class="pl-kos">[</span>index<span
                          class="pl-kos"
                          >]</span
                        ><span class="pl-kos">.</span><span class="pl-en">Equals</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>D<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L116"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="116"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC116"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        SetAnswerButtonColors<span class="pl-kos">(</span>d<span class="pl-kos"
                          >)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L117"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="117"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC117"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L118"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="118"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC118"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Displays next or submit button</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L119"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="119"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC119"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-s1">index</span>
                        <span class="pl-c1">==</span> questions<span class="pl-kos">.</span>Count
                        <span class="pl-c1">-</span> <span class="pl-c1">1</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L120"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="120"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC120"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L121"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="121"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC121"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        nextObj<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">false</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L122"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="122"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC122"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        submit<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">true</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L123"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="123"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC123"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span> <span class="pl-k">else</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L124"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="124"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC124"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L125"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="125"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC125"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        nextObj<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">true</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L126"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="126"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC126"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        submit<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">false</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L127"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="127"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC127"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L128"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="128"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC128"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L129"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="129"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC129"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L130"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="130"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC130"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">ResetButtonColors</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L131"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="131"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC131"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L132"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="132"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC132"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Resets button colors back to default</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L133"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="133"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC133"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        a<span class="pl-kos">.</span
                        ><span class="pl-smi">GetComponentInChildren</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">Image</span
                        ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">.</span>sprite
                        <span class="pl-c1">=</span> <span class="pl-s1">defaultImg</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L134"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="134"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC134"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        b<span class="pl-kos">.</span
                        ><span class="pl-smi">GetComponentInChildren</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">Image</span
                        ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">.</span>sprite
                        <span class="pl-c1">=</span> <span class="pl-s1">defaultImg</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L135"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="135"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC135"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        c<span class="pl-kos">.</span
                        ><span class="pl-smi">GetComponentInChildren</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">Image</span
                        ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">.</span>sprite
                        <span class="pl-c1">=</span> <span class="pl-s1">defaultImg</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L136"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="136"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC136"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        d<span class="pl-kos">.</span
                        ><span class="pl-smi">GetComponentInChildren</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">Image</span
                        ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">.</span>sprite
                        <span class="pl-c1">=</span> <span class="pl-s1">defaultImg</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L137"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="137"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC137"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L138"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="138"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC138"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L139"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="139"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC139"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span>
                        <span class="pl-en">SetAnswerButtonColors</span><span class="pl-kos">(</span
                        ><span class="pl-smi">GameObject</span> <span class="pl-s1">multi</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L140"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="140"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC140"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L141"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="141"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC141"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Sets button color to selected</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L142"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="142"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC142"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        multi<span class="pl-kos">.</span
                        ><span class="pl-smi">GetComponentInChildren</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">Image</span
                        ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">.</span>sprite
                        <span class="pl-c1">=</span> <span class="pl-s1">selectedImg</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L143"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="143"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC143"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L144"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="144"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC144"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L145"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="145"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC145"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">OnBack</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L146"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="146"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC146"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L147"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="147"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC147"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Goes to previous question</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L148"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="148"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC148"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-s1">index</span> <span class="pl-c1">&gt;</span>
                        <span class="pl-c1">0</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L149"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="149"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC149"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">index</span><span class="pl-c1">--</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L150"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="150"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC150"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L151"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="151"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC151"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>submitted<span
                          class="pl-kos"
                          >)</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L152"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="152"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC152"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        LoadAnswer<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L153"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="153"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC153"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">else</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L154"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="154"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC154"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        LoadQuestion<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L155"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="155"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC155"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L156"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="156"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC156"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L157"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="157"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC157"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">OnNext</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L158"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="158"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC158"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L159"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="159"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC159"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Goes to next question</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L160"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="160"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC160"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-s1">index</span>
                        <span class="pl-c1">&lt;</span> questions<span class="pl-kos">.</span>Count
                        <span class="pl-c1">-</span> <span class="pl-c1">1</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L161"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="161"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC161"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">index</span><span class="pl-c1">++</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L162"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="162"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC162"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L163"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="163"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC163"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>submitted<span
                          class="pl-kos"
                          >)</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L164"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="164"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC164"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        LoadAnswer<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L165"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="165"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC165"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">else</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L166"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="166"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC166"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        LoadQuestion<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L167"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="167"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC167"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L168"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="168"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC168"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L169"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="169"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC169"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">OnSelectA</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L170"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="170"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC170"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L171"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="171"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC171"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Stores A as answer to question</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L172"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="172"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC172"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-c1">!</span><span class="pl-s1">submitted</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L173"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="173"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC173"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L174"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="174"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC174"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        answers<span class="pl-kos">[</span>index<span class="pl-kos">]</span>
                        <span class="pl-c1">=</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>A<span class="pl-s">"</span></span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L175"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="175"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC175"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        ResetButtonColors<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L176"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="176"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC176"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        SetAnswerButtonColors<span class="pl-kos">(</span>a<span class="pl-kos"
                          >)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L177"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="177"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC177"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L178"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="178"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC178"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L179"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="179"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC179"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L180"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="180"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC180"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">OnSelectB</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L181"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="181"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC181"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L182"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="182"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC182"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Stores B as answer to question</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L183"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="183"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC183"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-c1">!</span><span class="pl-s1">submitted</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L184"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="184"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC184"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L185"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="185"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC185"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        answers<span class="pl-kos">[</span>index<span class="pl-kos">]</span>
                        <span class="pl-c1">=</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>B<span class="pl-s">"</span></span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L186"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="186"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC186"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        ResetButtonColors<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L187"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="187"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC187"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        SetAnswerButtonColors<span class="pl-kos">(</span>b<span class="pl-kos"
                          >)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L188"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="188"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC188"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L189"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="189"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC189"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L190"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="190"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC190"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L191"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="191"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC191"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">OnSelectC</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L192"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="192"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC192"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L193"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="193"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC193"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Stores C as answer to question</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L194"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="194"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC194"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-c1">!</span><span class="pl-s1">submitted</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L195"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="195"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC195"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L196"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="196"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC196"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        answers<span class="pl-kos">[</span>index<span class="pl-kos">]</span>
                        <span class="pl-c1">=</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>C<span class="pl-s">"</span></span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L197"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="197"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC197"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        ResetButtonColors<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L198"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="198"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC198"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        SetAnswerButtonColors<span class="pl-kos">(</span>c<span class="pl-kos"
                          >)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L199"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="199"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC199"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L200"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="200"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC200"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L201"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="201"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC201"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L202"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="202"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC202"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">OnSelectD</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L203"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="203"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC203"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L204"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="204"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC204"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Stores D as answer to question</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L205"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="205"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC205"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-c1">!</span><span class="pl-s1">submitted</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L206"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="206"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC206"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L207"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="207"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC207"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        answers<span class="pl-kos">[</span>index<span class="pl-kos">]</span>
                        <span class="pl-c1">=</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>D<span class="pl-s">"</span></span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L208"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="208"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC208"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        ResetButtonColors<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L209"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="209"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC209"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        SetAnswerButtonColors<span class="pl-kos">(</span>d<span class="pl-kos"
                          >)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L210"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="210"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC210"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L211"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="211"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC211"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L212"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="212"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC212"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L213"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="213"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC213"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">SetRightAnswer</span
                        ><span class="pl-kos">(</span><span class="pl-smi">GameObject</span>
                        <span class="pl-s1">multi</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L214"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="214"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC214"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L215"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="215"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC215"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Sets color of button to correct (e.g. green)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L216"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="216"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC216"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        multi<span class="pl-kos">.</span
                        ><span class="pl-smi">GetComponentInChildren</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">Image</span
                        ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">.</span>sprite
                        <span class="pl-c1">=</span> <span class="pl-s1">rightImg</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L217"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="217"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC217"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L218"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="218"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC218"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L219"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="219"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC219"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">SetWrongAnswer</span
                        ><span class="pl-kos">(</span><span class="pl-smi">GameObject</span>
                        <span class="pl-s1">multi</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L220"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="220"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC220"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L221"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="221"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC221"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Sets color of button to incorrect (e.g. red)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L222"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="222"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC222"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        multi<span class="pl-kos">.</span
                        ><span class="pl-smi">GetComponentInChildren</span
                        ><span class="pl-c1">&lt;</span><span class="pl-smi">Image</span
                        ><span class="pl-c1">&gt;</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">.</span>sprite
                        <span class="pl-c1">=</span> <span class="pl-s1">wrongImg</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L223"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="223"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC223"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L224"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="224"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC224"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L225"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="225"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC225"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">LoadAnswer</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L226"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="226"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC226"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L227"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="227"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC227"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">/*</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L228"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="228"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC228"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c"> * Loads answer onto Canvas</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L229"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="229"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC229"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c"> */</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L230"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="230"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC230"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L231"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="231"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC231"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Displays question and gets correct answer</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L232"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="232"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC232"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">Tuple</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">string</span><span class="pl-kos">,</span>
                        <span class="pl-smi">string</span><span class="pl-kos">,</span>
                        <span class="pl-smi">string</span><span class="pl-kos">,</span>
                        <span class="pl-smi">string</span><span class="pl-kos">,</span>
                        <span class="pl-smi">string</span><span class="pl-kos">,</span>
                        <span class="pl-smi">string</span><span class="pl-c1">&gt;</span>
                        <span class="pl-s1">q</span> <span class="pl-c1">=</span> questions<span
                          class="pl-kos"
                          >[</span
                        >index<span class="pl-kos">]</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L233"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="233"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC233"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        question<span class="pl-kos">.</span>text
                        <span class="pl-c1">=</span> q<span class="pl-kos">.</span>Item1<span
                          class="pl-kos"
                          >;</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L234"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="234"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC234"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        aText<span class="pl-kos">.</span>text <span class="pl-c1">=</span> q<span
                          class="pl-kos"
                          >.</span
                        >Item2<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L235"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="235"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC235"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        bText<span class="pl-kos">.</span>text <span class="pl-c1">=</span> q<span
                          class="pl-kos"
                          >.</span
                        >Item3<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L236"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="236"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC236"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        cText<span class="pl-kos">.</span>text <span class="pl-c1">=</span> q<span
                          class="pl-kos"
                          >.</span
                        >Item4<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L237"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="237"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC237"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        dText<span class="pl-kos">.</span>text <span class="pl-c1">=</span> q<span
                          class="pl-kos"
                          >.</span
                        >Item5<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L238"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="238"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC238"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">string</span> <span class="pl-s1">correctChoice</span>
                        <span class="pl-c1">=</span> q<span class="pl-kos">.</span>Item6<span
                          class="pl-kos"
                          >;</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L239"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="239"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC239"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L240"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="240"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC240"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        ResetButtonColors<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L241"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="241"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC241"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L242"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="242"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC242"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L243"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="243"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC243"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>answers<span
                          class="pl-kos"
                          >[</span
                        >index<span class="pl-kos">]</span> <span class="pl-c1">==</span>
                        <span class="pl-s1">correctChoice</span><span class="pl-kos">)</span>
                        <span class="pl-c">// Correct Answer Chosen</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L244"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="244"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC244"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L245"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="245"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC245"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>answers<span
                          class="pl-kos"
                          >[</span
                        >index<span class="pl-kos">]</span><span class="pl-kos">.</span
                        ><span class="pl-en">Equals</span><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>A<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L246"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="246"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC246"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        SetRightAnswer<span class="pl-kos">(</span>a<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L247"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="247"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC247"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">else</span> <span class="pl-k">if</span>
                        <span class="pl-kos">(</span>answers<span class="pl-kos">[</span>index<span
                          class="pl-kos"
                          >]</span
                        ><span class="pl-kos">.</span><span class="pl-en">Equals</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>B<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L248"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="248"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC248"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        SetRightAnswer<span class="pl-kos">(</span>b<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L249"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="249"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC249"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">else</span> <span class="pl-k">if</span>
                        <span class="pl-kos">(</span>answers<span class="pl-kos">[</span>index<span
                          class="pl-kos"
                          >]</span
                        ><span class="pl-kos">.</span><span class="pl-en">Equals</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>C<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L250"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="250"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC250"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        SetRightAnswer<span class="pl-kos">(</span>c<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L251"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="251"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC251"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">else</span> <span class="pl-k">if</span>
                        <span class="pl-kos">(</span>answers<span class="pl-kos">[</span>index<span
                          class="pl-kos"
                          >]</span
                        ><span class="pl-kos">.</span><span class="pl-en">Equals</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>D<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L252"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="252"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC252"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        SetRightAnswer<span class="pl-kos">(</span>d<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L253"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="253"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC253"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span> <span class="pl-k">else</span>
                        <span class="pl-c">// Incorrect Answer Chosen</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L254"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="254"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC254"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L255"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="255"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC255"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Display their answer</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L256"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="256"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC256"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>answers<span
                          class="pl-kos"
                          >[</span
                        >index<span class="pl-kos">]</span><span class="pl-kos">.</span
                        ><span class="pl-en">Equals</span><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>A<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L257"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="257"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC257"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        SetWrongAnswer<span class="pl-kos">(</span>a<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L258"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="258"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC258"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">else</span> <span class="pl-k">if</span>
                        <span class="pl-kos">(</span>answers<span class="pl-kos">[</span>index<span
                          class="pl-kos"
                          >]</span
                        ><span class="pl-kos">.</span><span class="pl-en">Equals</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>B<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L259"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="259"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC259"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        SetWrongAnswer<span class="pl-kos">(</span>b<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L260"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="260"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC260"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">else</span> <span class="pl-k">if</span>
                        <span class="pl-kos">(</span>answers<span class="pl-kos">[</span>index<span
                          class="pl-kos"
                          >]</span
                        ><span class="pl-kos">.</span><span class="pl-en">Equals</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>C<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L261"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="261"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC261"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        SetWrongAnswer<span class="pl-kos">(</span>c<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L262"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="262"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC262"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">else</span> <span class="pl-k">if</span>
                        <span class="pl-kos">(</span>answers<span class="pl-kos">[</span>index<span
                          class="pl-kos"
                          >]</span
                        ><span class="pl-kos">.</span><span class="pl-en">Equals</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>D<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L263"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="263"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC263"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        SetWrongAnswer<span class="pl-kos">(</span>d<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L264"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="264"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC264"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L265"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="265"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC265"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Display correct answer</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L266"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="266"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC266"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>correctChoice<span
                          class="pl-kos"
                          >.</span
                        ><span class="pl-en">Equals</span><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>A<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L267"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="267"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC267"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        SetRightAnswer<span class="pl-kos">(</span>a<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L268"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="268"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC268"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">else</span> <span class="pl-k">if</span>
                        <span class="pl-kos">(</span>correctChoice<span class="pl-kos">.</span
                        ><span class="pl-en">Equals</span><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>B<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L269"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="269"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC269"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        SetRightAnswer<span class="pl-kos">(</span>b<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L270"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="270"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC270"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">else</span> <span class="pl-k">if</span>
                        <span class="pl-kos">(</span>correctChoice<span class="pl-kos">.</span
                        ><span class="pl-en">Equals</span><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>C<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L271"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="271"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC271"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        SetRightAnswer<span class="pl-kos">(</span>c<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L272"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="272"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC272"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">else</span> <span class="pl-k">if</span>
                        <span class="pl-kos">(</span>correctChoice<span class="pl-kos">.</span
                        ><span class="pl-en">Equals</span><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>D<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L273"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="273"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC273"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        SetRightAnswer<span class="pl-kos">(</span>d<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L274"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="274"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC274"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L275"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="275"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC275"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L276"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="276"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC276"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L277"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="277"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC277"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">OnSubmit</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L278"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="278"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC278"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L279"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="279"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC279"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">submitted</span> <span class="pl-c1">=</span>
                        <span class="pl-c1">true</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L280"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="280"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC280"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L281"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="281"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC281"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Next button is always available (not submit)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L282"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="282"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC282"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        nextObj<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">true</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L283"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="283"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC283"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        submit<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">false</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L284"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="284"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC284"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L285"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="285"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC285"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Counts correctly answered questions</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L286"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="286"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC286"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">int</span> <span class="pl-s1">correct</span>
                        <span class="pl-c1">=</span> <span class="pl-c1">0</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L287"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="287"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC287"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">for</span> <span class="pl-kos">(</span
                        ><span class="pl-smi">int</span> <span class="pl-s1">i</span>
                        <span class="pl-c1">=</span> <span class="pl-c1">0</span
                        ><span class="pl-kos">;</span> <span class="pl-s1">i</span>
                        <span class="pl-c1">&lt;</span> questions<span class="pl-kos">.</span
                        >Count<span class="pl-kos">;</span> <span class="pl-s1">i</span
                        ><span class="pl-c1">++</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L288"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="288"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC288"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L289"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="289"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC289"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>answers<span
                          class="pl-kos"
                          >[</span
                        >i<span class="pl-kos">]</span><span class="pl-kos">.</span
                        ><span class="pl-en">Equals</span
                        ><span class="pl-kos">(</span>questions<span class="pl-kos">[</span>i<span
                          class="pl-kos"
                          >]</span
                        ><span class="pl-kos">.</span>Item6<span class="pl-kos">)</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L290"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="290"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC290"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">correct</span><span class="pl-c1">++</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L291"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="291"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC291"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L292"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="292"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC292"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L293"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="293"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC293"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Gives final evaluation and shows answers</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L294"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="294"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC294"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        evaluation<span class="pl-kos">.</span>text
                        <span class="pl-c1">=</span> correct<span class="pl-kos">.</span
                        ><span class="pl-en">ToString</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span> <span class="pl-c1">+</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>/<span class="pl-s">"</span></span
                        >
                        <span class="pl-c1">+</span> questions<span class="pl-kos">.</span
                        >Count<span class="pl-kos">.</span><span class="pl-en">ToString</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L295"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="295"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC295"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">index</span> <span class="pl-c1">=</span>
                        <span class="pl-c1">0</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L296"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="296"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC296"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        LoadAnswer<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L297"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="297"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC297"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-exammanager-cs-L298"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="298"
                      ></td>
                      <td
                        id="file-exammanager-cs-LC298"
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
          href="https://gist.github.com/sadiecrawford/2cc3949f43cb38e164d12e26ed048e20/raw/0446b559c1352b4cdc37c38740a611145c5c1363/ExamManager.cs"
          style="float: right"
          class="Link--inTextBlock"
          >view raw</a
        >
        <a
          href="https://gist.github.com/sadiecrawford/2cc3949f43cb38e164d12e26ed048e20#file-exammanager-cs"
          class="Link--inTextBlock"
        >
          ExamManager.cs
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
