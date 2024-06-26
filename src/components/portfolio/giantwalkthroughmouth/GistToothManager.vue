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
          <div id="file-multiplayertoothmanager-cs" class="file my-2">
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
                  data-tagsearch-path="MultiplayerToothManager.cs"
                >
                  <tbody>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L1"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="1"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC1"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">using</span> System<span class="pl-kos">.</span
                        >Collections<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L2"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="2"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC2"
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
                        id="file-multiplayertoothmanager-cs-L3"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="3"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC3"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">using</span> UnityEngine<span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L4"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="4"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC4"
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
                        id="file-multiplayertoothmanager-cs-L5"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="5"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC5"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L6"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="6"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC6"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-k">class</span>
                        <span class="pl-smi">MultiplayerToothManager</span>
                        <span class="pl-c1">:</span> <span class="pl-smi">MonoBehaviourPun</span
                        ><span class="pl-kos">,</span> <span class="pl-smi">IPunObservable</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L7"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="7"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC7"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L8"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="8"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC8"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Header<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>Upper Teeth Menus<span class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L9"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="9"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC9"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">GameObject</span>
                        <span class="pl-s1">upperCentralIncisor</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L10"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="10"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC10"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">GameObject</span>
                        <span class="pl-s1">upperLateralIncisor</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L11"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="11"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC11"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Header<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>Upper Teeth Mesh Renderers<span class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L12"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="12"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC12"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">MeshRenderer</span>
                        <span class="pl-s1">upperCentralIncisorMRLeft</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L13"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="13"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC13"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">MeshRenderer</span>
                        <span class="pl-s1">upperCentralIncisorMRRight</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L14"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="14"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC14"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        ..<span class="pl-kos">.</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L15"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="15"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC15"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span
                        ><span class="pl-c1"
                          >Header<span class="pl-kos">(</span
                          ><span class="pl-s"
                            ><span class="pl-s">"</span>Tooth Material<span class="pl-s"
                              >"</span
                            ></span
                          ><span class="pl-kos">)</span></span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L16"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="16"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC16"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">Material</span>
                        <span class="pl-s1">selected</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L17"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="17"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC17"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L18"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="18"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC18"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span> <span class="pl-en">Start</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L19"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="19"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC19"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L20"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="20"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC20"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c">// Disable menus</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L21"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="21"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC21"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        lowerCentralIncisor<span class="pl-kos">.</span
                        ><span class="pl-en">SetActive</span><span class="pl-kos">(</span
                        ><span class="pl-c1">false</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L22"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="22"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC22"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        lowerLateralIncisor<span class="pl-kos">.</span
                        ><span class="pl-en">SetActive</span><span class="pl-kos">(</span
                        ><span class="pl-c1">false</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L23"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="23"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC23"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        lowerCanine<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">false</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L24"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="24"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC24"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        upperCentralIncisor<span class="pl-kos">.</span
                        ><span class="pl-en">SetActive</span><span class="pl-kos">(</span
                        ><span class="pl-c1">false</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L25"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="25"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC25"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        upperLateralIncisor<span class="pl-kos">.</span
                        ><span class="pl-en">SetActive</span><span class="pl-kos">(</span
                        ><span class="pl-c1">false</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L26"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="26"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC26"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        upperCanine<span class="pl-kos">.</span><span class="pl-en">SetActive</span
                        ><span class="pl-kos">(</span><span class="pl-c1">false</span
                        ><span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L27"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="27"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC27"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L28"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="28"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC28"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L29"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="29"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC29"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">public</span> <span class="pl-smi">void</span>
                        <span class="pl-en">SetMenuActive</span><span class="pl-kos">(</span
                        ><span class="pl-smi">string</span> <span class="pl-s1">toothMenu</span
                        ><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L30"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="30"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC30"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L31"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="31"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC31"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">if</span> <span class="pl-kos">(</span>toothMenu<span
                          class="pl-kos"
                          >.</span
                        ><span class="pl-en">Equals</span><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>lowerCentralIncisor<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L32"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="32"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC32"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L33"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="33"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC33"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_SetMandiCentralActive<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L34"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="34"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC34"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L35"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="35"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC35"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">else</span> <span class="pl-k">if</span>
                        <span class="pl-kos">(</span>toothMenu<span class="pl-kos">.</span
                        ><span class="pl-en">Equals</span><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>lowerLateralIncisor<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L36"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="36"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC36"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L37"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="37"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC37"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_SetMandiLateralActive<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L38"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="38"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC38"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L39"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="39"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC39"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">else</span> <span class="pl-k">if</span>
                        <span class="pl-kos">(</span>toothMenu<span class="pl-kos">.</span
                        ><span class="pl-en">Equals</span><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>lowerCanine<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L40"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="40"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC40"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L41"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="41"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC41"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_SetMandiCanineActive<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L42"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="42"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC42"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L43"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="43"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC43"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">else</span> <span class="pl-k">if</span>
                        <span class="pl-kos">(</span>toothMenu<span class="pl-kos">.</span
                        ><span class="pl-en">Equals</span><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>upperCentralIncisor<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L44"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="44"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC44"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L45"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="45"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC45"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_SetMaxCentralActive<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L46"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="46"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC46"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L47"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="47"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC47"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">else</span> <span class="pl-k">if</span>
                        <span class="pl-kos">(</span>toothMenu<span class="pl-kos">.</span
                        ><span class="pl-en">Equals</span><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>upperLateralIncisor<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L48"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="48"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC48"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L49"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="49"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC49"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_SetMaxLateralActive<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L50"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="50"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC50"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L51"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="51"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC51"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">else</span> <span class="pl-k">if</span>
                        <span class="pl-kos">(</span>toothMenu<span class="pl-kos">.</span
                        ><span class="pl-en">Equals</span><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>upperCanine<span class="pl-s">"</span></span
                        ><span class="pl-kos">)</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L52"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="52"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC52"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L53"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="53"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC53"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        photonView<span class="pl-kos">.</span><span class="pl-en">RPC</span
                        ><span class="pl-kos">(</span
                        ><span class="pl-s"
                          ><span class="pl-s">"</span>RPC_SetMaxCanineActive<span class="pl-s"
                            >"</span
                          ></span
                        ><span class="pl-kos">,</span> RpcTarget<span class="pl-kos">.</span
                        >All<span class="pl-kos">)</span><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L54"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="54"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC54"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L55"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="55"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC55"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L56"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="56"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC56"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L57"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="57"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC57"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span><span class="pl-c1">PunRPC</span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L58"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="58"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC58"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span>
                        <span class="pl-en">RPC_SetMaxCentralActive</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L59"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="59"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC59"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L60"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="60"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC60"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        upperCentralIncisor<span class="pl-kos">.</span
                        ><span class="pl-en">SetActive</span><span class="pl-kos">(</span
                        ><span class="pl-c1">true</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L61"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="61"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC61"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        upperCentralIncisorMRLeft<span class="pl-kos">.</span>material
                        <span class="pl-c1">=</span> <span class="pl-s1">selected</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L62"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="62"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC62"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        upperCentralIncisorMRRight<span class="pl-kos">.</span>material
                        <span class="pl-c1">=</span> <span class="pl-s1">selected</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L63"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="63"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC63"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L64"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="64"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC64"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L65"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="65"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC65"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">[</span><span class="pl-c1">PunRPC</span
                        ><span class="pl-kos">]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L66"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="66"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC66"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-smi">void</span>
                        <span class="pl-en">RPC_SetMaxLateralActive</span
                        ><span class="pl-kos">(</span><span class="pl-kos">)</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L67"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="67"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC67"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">{</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L68"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="68"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC68"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        upperLateralIncisor<span class="pl-kos">.</span
                        ><span class="pl-en">SetActive</span><span class="pl-kos">(</span
                        ><span class="pl-c1">true</span><span class="pl-kos">)</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L69"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="69"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC69"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        upperLateralIncisorMRLeft<span class="pl-kos">.</span>material
                        <span class="pl-c1">=</span> <span class="pl-s1">selected</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L70"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="70"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC70"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        upperLateralIncisorMRRight<span class="pl-kos">.</span>material
                        <span class="pl-c1">=</span> <span class="pl-s1">selected</span
                        ><span class="pl-kos">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L71"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="71"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC71"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-kos">}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L72"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="72"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC72"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L73"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="73"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC73"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        ..<span class="pl-kos">.</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-multiplayertoothmanager-cs-L74"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="74"
                      ></td>
                      <td
                        id="file-multiplayertoothmanager-cs-LC74"
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
          href="https://gist.github.com/sadiecrawford/a79bc8a13ff732bfb36b4b3ed6d9e8f8/raw/509aea1acf3183b9983eb893cc696ff32af5bac4/MultiplayerToothManager.cs"
          style="float: right"
          class="Link--inTextBlock"
          >view raw</a
        >
        <a
          href="https://gist.github.com/sadiecrawford/a79bc8a13ff732bfb36b4b3ed6d9e8f8#file-multiplayertoothmanager-cs"
          class="Link--inTextBlock"
        >
          MultiplayerToothManager.cs
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
  name: 'GistToothManager'
}
</script>
