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
          <div id="file-multiplayercanvasmanager-cs" class="file my-2">
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
                  data-tagsearch-path="MultiplayerCanvasManager.cs"
                >
                  <tbody>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L1"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="1"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC1"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">using</span> System<span class="pl-kos">.</span
                        >Collections<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L2"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="2"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC2"
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
                        id="file-multiplayercanvasmanager-cs-L3"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="3"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC3"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">using</span> UnityEngine<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L4"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="4"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC4"
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
                        id="file-multiplayercanvasmanager-cs-L5"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="5"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC5"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L6"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="6"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC6"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-k">class</span>
                        <span class="pl-smi">MultiplayerCanvasManager</span>
                        <span class="pl-c1">:</span> <span class="pl-smi">MonoBehaviourPun</span
                        ><span class="pl-kos">,</span> <span class="pl-smi">IPunObservable</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L7"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="7"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC7"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L8"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="8"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC8"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">GameObject</span>
                        <span class="pl-s1">model</span><span class="pl-kos">,</span>
                        <span class="pl-s1">histology</span><span class="pl-kos">,</span>
                        <span class="pl-s1">video</span><span class="pl-kos">,</span>
                        <span class="pl-s1">info</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L9"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="9"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC9"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">GameObject</span>
                        <span class="pl-s1">toothModel</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L10"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="10"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC10"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">MeshRenderer</span>
                        <span class="pl-s1">left</span><span class="pl-kos">,</span>
                        <span class="pl-s1">right</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L11"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="11"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC11"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">Material</span>
                        <span class="pl-s1">unselected</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L12"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="12"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC12"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L13"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="13"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC13"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">string</span> <span class="pl-s1">lastPressed</span>
                        <span class="pl-c1">=</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span><span class="pl-s">"</span></span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L14"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="14"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC14"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L15"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="15"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC15"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">Start</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L16"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="16"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC16"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L17"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="17"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC17"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        model<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">false</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L18"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="18"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC18"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        histology<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">false</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L19"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="19"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC19"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        video<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">false</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L20"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="20"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC20"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        info<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">false</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L21"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="21"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC21"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L22"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="22"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC22"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L23"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="23"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC23"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">/*</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L24"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="24"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC24"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c"> * 3D MODEL</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L25"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="25"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC25"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c"> */</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L26"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="26"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC26"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">void</span>
                        <span class="pl-en">SetModelActive</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L27"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="27"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC27"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L28"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="28"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC28"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_SetModelActive<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L29"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="29"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC29"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L30"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="30"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC30"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L31"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="31"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC31"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span><span class="pl-c1">PunRPC</span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L32"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="32"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC32"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span>
                        <span class="pl-en">RPC_SetModelActive</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L33"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="33"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC33"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L34"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="34"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC34"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-c1">!</span><span class="pl-kos">(</span>lastPressed<span
                          class="pl-kos"
                          >.</span
                        ><span class="pl-en">Equals</span><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RootCanal<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span>
                        <span class="pl-c1">&amp;&amp;</span> model<span class="pl-kos">.</span
                        >activeSelf<span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L35"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="35"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC35"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L36"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="36"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC36"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        model<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">!</span>model<span
                          class="pl-kos"
                          >.</span
                        >activeSelf<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L37"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="37"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC37"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L38"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="38"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC38"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        toothModel<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">true</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L39"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="39"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC39"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">lastPressed</span> <span class="pl-c1">=</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>Model<span class="pl-s">"</span></span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L40"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="40"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC40"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L41"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="41"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC41"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L42"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="42"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC42"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">/*</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L43"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="43"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC43"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c"> * HISTOLOGY</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L44"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="44"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC44"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c"> */</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L45"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="45"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC45"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">void</span>
                        <span class="pl-en">SetHistologyActive</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L46"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="46"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC46"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L47"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="47"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC47"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_SetHistologyActive<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L48"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="48"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC48"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L49"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="49"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC49"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L50"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="50"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC50"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span><span class="pl-c1">PunRPC</span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L51"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="51"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC51"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span>
                        <span class="pl-en">RPC_SetHistologyActive</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L52"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="52"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC52"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L53"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="53"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC53"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        histology<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">!</span>histology<span
                          class="pl-kos"
                          >.</span
                        >activeSelf<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L54"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="54"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC54"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">lastPressed</span> <span class="pl-c1">=</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>Histology<span class="pl-s">"</span></span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L55"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="55"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC55"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L56"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="56"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC56"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L57"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="57"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC57"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">/*</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L58"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="58"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC58"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c"> * ROOT CANAL</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L59"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="59"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC59"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c"> */</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L60"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="60"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC60"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">void</span>
                        <span class="pl-en">SetRootCanalActive</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L61"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="61"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC61"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L62"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="62"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC62"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_SetRootCanalActive<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L63"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="63"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC63"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L64"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="64"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC64"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L65"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="65"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC65"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span><span class="pl-c1">PunRPC</span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L66"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="66"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC66"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span>
                        <span class="pl-en">RPC_SetRootCanalActive</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L67"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="67"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC67"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L68"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="68"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC68"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span
                        ><span class="pl-c1">!</span><span class="pl-kos">(</span>lastPressed<span
                          class="pl-kos"
                          >.</span
                        ><span class="pl-en">Equals</span><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>Model<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span>
                        <span class="pl-c1">&amp;&amp;</span> model<span class="pl-kos">.</span
                        >activeSelf<span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L69"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="69"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC69"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L70"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="70"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC70"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        model<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">!</span>model<span
                          class="pl-kos"
                          >.</span
                        >activeSelf<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L71"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="71"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC71"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L72"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="72"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC72"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        toothModel<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">false</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L73"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="73"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC73"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">lastPressed</span> <span class="pl-c1">=</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>RootCanal<span class="pl-s">"</span></span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L74"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="74"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC74"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L75"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="75"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC75"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L76"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="76"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC76"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">/*</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L77"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="77"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC77"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c"> * VIDEO</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L78"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="78"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC78"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c"> */</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L79"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="79"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC79"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">void</span>
                        <span class="pl-en">SetVideoActive</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L80"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="80"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC80"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L81"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="81"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC81"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_SetVideoActive<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L82"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="82"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC82"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L83"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="83"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC83"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L84"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="84"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC84"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span><span class="pl-c1">PunRPC</span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L85"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="85"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC85"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span>
                        <span class="pl-en">RPC_SetVideoActive</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L86"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="86"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC86"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L87"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="87"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC87"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        video<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">!</span>video<span
                          class="pl-kos"
                          >.</span
                        >activeSelf<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L88"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="88"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC88"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">lastPressed</span> <span class="pl-c1">=</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>Video<span class="pl-s">"</span></span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L89"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="89"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC89"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L90"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="90"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC90"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L91"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="91"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC91"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">/*</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L92"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="92"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC92"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c"> * INFO</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L93"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="93"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC93"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c"> */</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L94"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="94"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC94"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">void</span>
                        <span class="pl-en">SetInfoActive</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L95"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="95"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC95"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L96"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="96"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC96"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_SetInfoActive<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L97"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="97"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC97"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L98"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="98"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC98"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L99"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="99"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC99"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span><span class="pl-c1">PunRPC</span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L100"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="100"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC100"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">RPC_SetInfoActive</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L101"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="101"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC101"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L102"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="102"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC102"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        info<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">!</span>info<span
                          class="pl-kos"
                          >.</span
                        >activeSelf<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L103"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="103"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC103"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">lastPressed</span> <span class="pl-c1">=</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>Info<span class="pl-s">"</span></span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L104"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="104"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC104"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L105"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="105"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC105"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L106"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="106"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC106"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">/*</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L107"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="107"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC107"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c"> * CLOSE</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L108"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="108"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC108"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c"> */</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L109"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="109"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC109"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">void</span>
                        <span class="pl-en">CloseMenu</span><span class="pl-kos">(</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L110"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="110"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC110"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L111"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="111"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC111"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_SetMenuActive<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L112"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="112"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC112"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        left<span class="pl-kos">.</span>material <span class="pl-c1">=</span>
                        <span class="pl-s1">unselected</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L113"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="113"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC113"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        right<span class="pl-kos">.</span>material <span class="pl-c1">=</span>
                        <span class="pl-s1">unselected</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L114"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="114"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC114"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L115"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="115"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC115"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L116"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="116"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC116"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span><span class="pl-c1">PunRPC</span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L117"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="117"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC117"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">RPC_SetMenuActive</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L118"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="118"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC118"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L119"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="119"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC119"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        gameObject<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">!</span>gameObject<span
                          class="pl-kos"
                          >.</span
                        >activeSelf<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L120"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="120"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC120"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s1">lastPressed</span> <span class="pl-c1">=</span>
                        <span class="pl-s"
                          ><span class="pl-s">"</span>Close<span class="pl-s">"</span></span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L121"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="121"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC121"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L122"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="122"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC122"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L123"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="123"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC123"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        ..<span class="pl-kos">.</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayercanvasmanager-cs-L124"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="124"
                      ></td>
                      <td
                        id="file-multiplayercanvasmanager-cs-LC124"
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
          href="https://gist.github.com/sadiecrawford/f5e650b1a453148b993c1e72c5ce3b64/raw/df8a67686a04bab94f0797156241fed13af26174/MultiplayerCanvasManager.cs"
          style="float: right"
          class="Link--inTextBlock"
          >view raw</a
        >
        <a
          href="https://gist.github.com/sadiecrawford/f5e650b1a453148b993c1e72c5ce3b64#file-multiplayercanvasmanager-cs"
          class="Link--inTextBlock"
        >
          MultiplayerCanvasManager.cs
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
  name: 'GistCanvasManager'
}
</script>
