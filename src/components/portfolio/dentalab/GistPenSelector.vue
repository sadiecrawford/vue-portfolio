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
          <div id="file-pencolorselector-cs" class="file my-2">
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
                  data-tagsearch-path="PenColorSelector.cs"
                >
                  <tbody>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L1"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="1"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC1"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">using</span> System<span class="pl-kos">.</span
                        >Collections<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L2"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="2"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC2"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">using</span> System<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L3"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="3"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC3"
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
                        id="file-pencolorselector-cs-L4"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="4"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC4"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">using</span> UnityEngine<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L5"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="5"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC5"
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
                        id="file-pencolorselector-cs-L6"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="6"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC6"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L7"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="7"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC7"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-k">enum</span>
                        <span class="pl-smi">PenColor</span> <span class="pl-kos">{</span>
                        <span class="pl-c1">Blue</span><span class="pl-kos">,</span>
                        <span class="pl-c1">Red</span><span class="pl-kos">,</span>
                        <span class="pl-c1">Black</span> <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L8"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="8"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC8"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-k">class</span>
                        <span class="pl-smi">PenColorSelector</span> <span class="pl-c1">:</span>
                        <span class="pl-smi">MonoBehaviourPun</span><span class="pl-kos">,</span>
                        <span class="pl-smi">IPunObservable</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L9"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="9"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC9"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L10"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="10"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC10"
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
                        id="file-pencolorselector-cs-L11"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="11"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC11"
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
                        id="file-pencolorselector-cs-L12"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="12"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC12"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">PenColor</span>
                        <span class="pl-s1">buttonType</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L13"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="13"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC13"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Header<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>Haptic<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L14"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="14"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC14"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The audio to be played with haptic
                            feedback<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L15"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="15"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC15"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">AudioClip</span>
                        <span class="pl-s1">hapticAudio</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L16"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="16"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC16"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Header<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>Marker<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L17"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="17"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC17"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">GameObject</span>
                        <span class="pl-s1">marker</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L18"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="18"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC18"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L19"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="19"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC19"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        ..<span class="pl-kos">.</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L20"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="20"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC20"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L21"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="21"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC21"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">ButtonOnClick</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L22"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="22"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC22"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L23"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="23"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC23"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">switch</span> <span class="pl-kos">(</span
                        ><span class="pl-s1">buttonType</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L24"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="24"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC24"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L25"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="25"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC25"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">case</span> PenColor<span class="pl-kos">.</span
                        >Blue<span class="pl-c1">:</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L26"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="26"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC26"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_ChangePenColor<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">,</span> <span class="pl-c1">0</span
                        ><span class="pl-kos">,</span> <span class="pl-c1">0</span
                        ><span class="pl-kos">,</span> <span class="pl-c1">255</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L27"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="27"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC27"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">break</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L28"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="28"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC28"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">case</span> PenColor<span class="pl-kos">.</span>Red<span
                          class="pl-c1"
                          >:</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L29"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="29"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC29"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_ChangePenColor<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">,</span> <span class="pl-c1">255</span
                        ><span class="pl-kos">,</span> <span class="pl-c1">0</span
                        ><span class="pl-kos">,</span> <span class="pl-c1">0</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L30"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="30"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC30"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">break</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L31"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="31"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC31"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">case</span> PenColor<span class="pl-kos">.</span
                        >Black<span class="pl-c1">:</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L32"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="32"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC32"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_ChangePenColor<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">,</span> <span class="pl-c1">0</span
                        ><span class="pl-kos">,</span> <span class="pl-c1">0</span
                        ><span class="pl-kos">,</span> <span class="pl-c1">0</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L33"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="33"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC33"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">break</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L34"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="34"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC34"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L35"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="35"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC35"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L36"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="36"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC36"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L37"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="37"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC37"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span><span class="pl-c1">PunRPC</span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L38"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="38"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC38"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span>
                        <span class="pl-en">RPC_ChangePenColor</span><span class="pl-kos">(</span
                        ><span class="pl-smi">int</span> <span class="pl-s1">r</span
                        ><span class="pl-kos">,</span> <span class="pl-smi">int</span>
                        <span class="pl-s1">g</span><span class="pl-kos">,</span>
                        <span class="pl-smi">int</span> <span class="pl-s1">b</span
                        ><span class="pl-kos">,</span>
                        <span class="pl-smi">PhotonMessageInfo</span> <span class="pl-s1">info</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L39"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="39"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC39"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L40"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="40"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC40"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">WhiteboardPen</span> <span class="pl-s1">pen</span>
                        <span class="pl-c1">=</span> marker<span class="pl-kos">.</span
                        ><span class="pl-smi">GetComponent</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">WhiteboardPen</span><span class="pl-c1">&gt;</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L41"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="41"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC41"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        pen<span class="pl-kos">.</span>penTip<span class="pl-kos">.</span
                        ><span class="pl-smi">GetComponent</span><span class="pl-c1">&lt;</span
                        ><span class="pl-smi">Renderer</span><span class="pl-c1">&gt;</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">.</span>material<span class="pl-kos">.</span>color
                        <span class="pl-c1">=</span> <span class="pl-k">new</span> Color<span
                          class="pl-kos"
                          >(</span
                        >r<span class="pl-kos">,</span> g<span class="pl-kos">,</span> b<span
                          class="pl-kos"
                          >)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L42"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="42"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC42"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        pen<span class="pl-kos">.</span>ColorPicker <span class="pl-c1">=</span>
                        <span class="pl-k">new</span> Color<span class="pl-kos">(</span>r<span
                          class="pl-kos"
                          >,</span
                        >
                        g<span class="pl-kos">,</span> b<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L43"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="43"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC43"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L44"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="44"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC44"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L45"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="45"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC45"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        ..<span class="pl-kos">.</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-pencolorselector-cs-L46"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="46"
                      ></td>
                      <td
                        id="file-pencolorselector-cs-LC46"
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
          href="https://gist.github.com/sadiecrawford/708626f3c687e37270cccb028c096662/raw/4c69175864f710cc20b38cdaff1159c2caaa664b/PenColorSelector.cs"
          style="float: right"
          class="Link--inTextBlock"
          >view raw</a
        >
        <a
          href="https://gist.github.com/sadiecrawford/708626f3c687e37270cccb028c096662#file-pencolorselector-cs"
          class="Link--inTextBlock"
        >
          PenColorSelector.cs
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
