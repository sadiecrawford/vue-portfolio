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
          <div id="file-whiteboard-cs" class="file my-2">
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
                  data-tagsearch-path="Whiteboard.cs"
                >
                  <tbody>
                    <tr>
                      <td
                        id="file-whiteboard-cs-L1"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="1"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC1"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">using</span> System<span class="pl-kos">.</span
                        >Collections<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-whiteboard-cs-L2"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="2"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC2"
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
                        id="file-whiteboard-cs-L3"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="3"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC3"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">using</span> UnityEngine<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-whiteboard-cs-L4"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="4"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC4"
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
                        id="file-whiteboard-cs-L5"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="5"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC5"
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
                        id="file-whiteboard-cs-L6"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="6"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC6"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-whiteboard-cs-L7"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="7"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC7"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-k">class</span>
                        <span class="pl-smi">Whiteboard</span> <span class="pl-c1">:</span>
                        <span class="pl-smi">MonoBehaviourPun</span><span class="pl-kos">,</span>
                        <span class="pl-smi">IPunObservable</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-whiteboard-cs-L8"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="8"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC8"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-whiteboard-cs-L9"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="9"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC9"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        ..<span class="pl-kos">.</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-whiteboard-cs-L10"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="10"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC10"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-whiteboard-cs-L11"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="11"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC11"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">void</span>
                        <span class="pl-en">OnPhotonSerializeView</span><span class="pl-kos">(</span
                        ><span class="pl-smi">PhotonStream</span> <span class="pl-s1">stream</span
                        ><span class="pl-kos">,</span>
                        <span class="pl-smi">PhotonMessageInfo</span> <span class="pl-s1">info</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-whiteboard-cs-L12"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="12"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC12"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-whiteboard-cs-L13"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="13"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC13"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>stream<span
                          class="pl-kos"
                          >.</span
                        >IsWriting<span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-whiteboard-cs-L14"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="14"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC14"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-whiteboard-cs-L15"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="15"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC15"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        stream<span class="pl-kos">.</span><span class="pl-en">SendNext</span
                        ><span class="pl-kos">(</span>transform<span class="pl-kos">.</span
                        >position<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-whiteboard-cs-L16"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="16"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC16"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        stream<span class="pl-kos">.</span><span class="pl-en">SendNext</span
                        ><span class="pl-kos">(</span>transform<span class="pl-kos">.</span
                        >rotation<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-whiteboard-cs-L17"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="17"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC17"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span> <span class="pl-k">else</span>
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>stream<span
                          class="pl-kos"
                          >.</span
                        >IsReading<span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-whiteboard-cs-L18"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="18"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC18"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-whiteboard-cs-L19"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="19"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC19"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        transform<span class="pl-kos">.</span>position <span class="pl-c1">=</span>
                        <span class="pl-kos">(</span>Vector3<span class="pl-kos">)</span>stream<span
                          class="pl-kos"
                          >.</span
                        ><span class="pl-en">ReceiveNext</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-whiteboard-cs-L20"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="20"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC20"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        transform<span class="pl-kos">.</span>rotation <span class="pl-c1">=</span>
                        <span class="pl-kos">(</span>Quaternion<span class="pl-kos">)</span
                        >stream<span class="pl-kos">.</span><span class="pl-en">ReceiveNext</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-whiteboard-cs-L21"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="21"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC21"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-whiteboard-cs-L22"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="22"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC22"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-whiteboard-cs-L23"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="23"
                      ></td>
                      <td
                        id="file-whiteboard-cs-LC23"
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
          href="https://gist.github.com/sadiecrawford/dd5ae014e1c859203f8c5bc629c453d9/raw/c1d845260f3d6b00a471c177f52c16944ed0be94/Whiteboard.cs"
          style="float: right"
          class="Link--inTextBlock"
          >view raw</a
        >
        <a
          href="https://gist.github.com/sadiecrawford/dd5ae014e1c859203f8c5bc629c453d9#file-whiteboard-cs"
          class="Link--inTextBlock"
        >
          Whiteboard.cs
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
  name: 'GistWhiteboard'
}
</script>
