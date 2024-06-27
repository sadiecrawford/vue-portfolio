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
          <div id="file-toexamroom-cs" class="file my-2">
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
                  data-tagsearch-path="ToExamRoom.cs"
                >
                  <tbody>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L1"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="1"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC1"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">using</span> System<span class="pl-kos">.</span
                        >Collections<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L2"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="2"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC2"
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
                        id="file-toexamroom-cs-L3"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="3"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC3"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">using</span> UnityEngine<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L4"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="4"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC4"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">using</span> UnityEngine<span class="pl-kos">.</span
                        >SceneManagement<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L5"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="5"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC5"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L6"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="6"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC6"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-k">class</span>
                        <span class="pl-smi">ToExamRoom</span> <span class="pl-c1">:</span>
                        <span class="pl-smi">MonoBehaviour</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L7"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="7"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC7"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L8"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="8"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC8"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Header<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>Scene<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L9"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="9"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC9"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The scene to navigate to<span class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L10"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="10"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC10"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">string</span>
                        <span class="pl-s1">scene</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L11"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="11"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC11"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L12"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="12"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC12"
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
                        id="file-toexamroom-cs-L13"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="13"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC13"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Tooltip<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>The haptics to be played the doorknob is
                            grabbed<span class="pl-s">"</span></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L14"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="14"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC14"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">AudioClip</span>
                        <span class="pl-s1">hapticAudio</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L15"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="15"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC15"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L16"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="16"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC16"
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
                        id="file-toexamroom-cs-L17"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="17"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC17"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L18"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="18"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC18"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>other<span
                          class="pl-kos"
                          >.</span
                        >gameObject<span class="pl-kos">.</span>tag <span class="pl-c1">==</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>IndexRig<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L19"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="19"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC19"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L20"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="20"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC20"
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
                        id="file-toexamroom-cs-L21"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="21"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC21"
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
                        id="file-toexamroom-cs-L22"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="22"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC22"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L23"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="23"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC23"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        OnKnobGrab<span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L24"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="24"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC24"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L25"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="25"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC25"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L26"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="26"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC26"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L27"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="27"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC27"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">OnKnobGrab</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L28"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="28"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC28"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L29"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="29"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC29"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        SceneManager<span class="pl-kos">.</span><span class="pl-en">LoadScene</span
                        ><span class="pl-kos">(</span>scene<span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L30"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="30"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC30"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-toexamroom-cs-L31"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="31"
                      ></td>
                      <td
                        id="file-toexamroom-cs-LC31"
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
          href="https://gist.github.com/sadiecrawford/6919c1fdb2d078d88ff51731ad34c28e/raw/c37eab997140aece19d05b373ffe095c084dda27/ToExamRoom.cs"
          style="float: right"
          class="Link--inTextBlock"
          >view raw</a
        >
        <a
          href="https://gist.github.com/sadiecrawford/6919c1fdb2d078d88ff51731ad34c28e#file-toexamroom-cs"
          class="Link--inTextBlock"
        >
          ToExamRoom.cs
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
