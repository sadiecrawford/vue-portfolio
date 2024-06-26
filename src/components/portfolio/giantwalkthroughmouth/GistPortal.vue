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
          <div id="file-portal-shader" class="file my-2">
            <div itemprop="text" class="Box-body p-0 blob-wrapper data type-shaderlab">
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
                  data-tagsearch-lang="ShaderLab"
                  data-tagsearch-path="Portal.shader"
                >
                  <tbody>
                    <tr>
                      <td
                        id="file-portal-shader-L1"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="1"
                      ></td>
                      <td
                        id="file-portal-shader-LC1"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">Shader</span> <span class="pl-s">"Custom/Portal"</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L2"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="2"
                      ></td>
                      <td
                        id="file-portal-shader-LC2"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        {
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L3"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="3"
                      ></td>
                      <td
                        id="file-portal-shader-LC3"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">Properties</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L4"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="4"
                      ></td>
                      <td
                        id="file-portal-shader-LC4"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        {
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L5"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="5"
                      ></td>
                      <td
                        id="file-portal-shader-LC5"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">_Color(</span><span class="pl-s">"Main Color"</span>,
                        <span class="pl-c1">Color</span>) = (<span class="pl-c1">1</span>,<span
                          class="pl-c1"
                          >1</span
                        >,<span class="pl-c1">1</span>,<span class="pl-c1">1</span>)
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L6"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="6"
                      ></td>
                      <td
                        id="file-portal-shader-LC6"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L7"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="7"
                      ></td>
                      <td
                        id="file-portal-shader-LC7"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">_StencilReferenceID(</span
                        ><span class="pl-s">"Stencil ID Reference Reference"</span>,
                        <span class="pl-c1">Float</span>) = <span class="pl-c1">1</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L8"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="8"
                      ></td>
                      <td
                        id="file-portal-shader-LC8"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        [<span class="pl-c1">Enum</span>(UnityEngine.Rendering.CompareFunction)]
                        <span class="pl-c1">_StencilComp(</span
                        ><span class="pl-s">"Stencil Comparison"</span>,
                        <span class="pl-c1">Float</span>) = <span class="pl-c1">8</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L9"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="9"
                      ></td>
                      <td
                        id="file-portal-shader-LC9"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        [<span class="pl-c1">Enum</span>(UnityEngine.Rendering.StencilOp)]
                        <span class="pl-c1">_StencilOp(</span
                        ><span class="pl-s">"Stencil Operation"</span>,
                        <span class="pl-c1">Float</span>) = <span class="pl-c1">2</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L10"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="10"
                      ></td>
                      <td
                        id="file-portal-shader-LC10"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">_StencilWriteMask(</span
                        ><span class="pl-s">"Stencil Write Mask"</span>,
                        <span class="pl-c1">Float</span>) = <span class="pl-c1">255</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L11"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="11"
                      ></td>
                      <td
                        id="file-portal-shader-LC11"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">_StencilReadMask(</span
                        ><span class="pl-s">"Stencil Read Mask"</span>,
                        <span class="pl-c1">Float</span>) = <span class="pl-c1">255</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L12"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="12"
                      ></td>
                      <td
                        id="file-portal-shader-LC12"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L13"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="13"
                      ></td>
                      <td
                        id="file-portal-shader-LC13"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        [<span class="pl-c1">Enum</span
                        >(UnityEngine.Rendering.Shader_ColorWriteMask)]
                        <span class="pl-c1">_ColorMask(</span
                        ><span class="pl-s">"Color Mask"</span>, <span class="pl-c1">Float</span>) =
                        <span class="pl-c1">0</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L14"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="14"
                      ></td>
                      <td
                        id="file-portal-shader-LC14"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        [<span class="pl-c1">MaterialToggle</span>]
                        <span class="pl-c1">_ZWrite(</span><span class="pl-s">"ZWrite"</span>,
                        <span class="pl-c1">Float</span>) = <span class="pl-c1">0</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L15"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="15"
                      ></td>
                      <td
                        id="file-portal-shader-LC15"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        }
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L16"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="16"
                      ></td>
                      <td
                        id="file-portal-shader-LC16"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L17"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="17"
                      ></td>
                      <td
                        id="file-portal-shader-LC17"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">SubShader</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L18"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="18"
                      ></td>
                      <td
                        id="file-portal-shader-LC18"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        {
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L19"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="19"
                      ></td>
                      <td
                        id="file-portal-shader-LC19"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">Tags</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L20"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="20"
                      ></td>
                      <td
                        id="file-portal-shader-LC20"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        {
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L21"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="21"
                      ></td>
                      <td
                        id="file-portal-shader-LC21"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s">"RenderType"</span> =
                        <span class="pl-s">"StencilMaskOpaque"</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L22"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="22"
                      ></td>
                      <td
                        id="file-portal-shader-LC22"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s">"Queue"</span> = <span class="pl-s">"Geometry-100"</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L23"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="23"
                      ></td>
                      <td
                        id="file-portal-shader-LC23"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s">"IgnoreProjector"</span> =
                        <span class="pl-s">"True"</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L24"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="24"
                      ></td>
                      <td
                        id="file-portal-shader-LC24"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        }
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L25"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="25"
                      ></td>
                      <td
                        id="file-portal-shader-LC25"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L26"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="26"
                      ></td>
                      <td
                        id="file-portal-shader-LC26"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L27"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="27"
                      ></td>
                      <td
                        id="file-portal-shader-LC27"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">Pass</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L28"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="28"
                      ></td>
                      <td
                        id="file-portal-shader-LC28"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        {
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L29"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="29"
                      ></td>
                      <td
                        id="file-portal-shader-LC29"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">ZWrite</span><span class="pl-c1">[_ZWrite]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L30"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="30"
                      ></td>
                      <td
                        id="file-portal-shader-LC30"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">ColorMask</span><span class="pl-c1">[_ColorMask]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L31"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="31"
                      ></td>
                      <td
                        id="file-portal-shader-LC31"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L32"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="32"
                      ></td>
                      <td
                        id="file-portal-shader-LC32"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">Stencil</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L33"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="33"
                      ></td>
                      <td
                        id="file-portal-shader-LC33"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        {
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L34"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="34"
                      ></td>
                      <td
                        id="file-portal-shader-LC34"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">Ref</span> <span class="pl-c1">1</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L35"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="35"
                      ></td>
                      <td
                        id="file-portal-shader-LC35"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">Comp</span> <span class="pl-c1">Always</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L36"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="36"
                      ></td>
                      <td
                        id="file-portal-shader-LC36"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">Pass</span> <span class="pl-c1">Replace</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L37"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="37"
                      ></td>
                      <td
                        id="file-portal-shader-LC37"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">ReadMask</span
                        ><span class="pl-c1">[_StencilReadMask]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L38"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="38"
                      ></td>
                      <td
                        id="file-portal-shader-LC38"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">WriteMask</span
                        ><span class="pl-c1">[_StencilWriteMask]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L39"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="39"
                      ></td>
                      <td
                        id="file-portal-shader-LC39"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        }
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L40"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="40"
                      ></td>
                      <td
                        id="file-portal-shader-LC40"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L41"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="41"
                      ></td>
                      <td
                        id="file-portal-shader-LC41"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">CGPROGRAM</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L42"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="42"
                      ></td>
                      <td
                        id="file-portal-shader-LC42"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k"> #include</span>
                        <span class="pl-s">"UnityCG.cginc"</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L43"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="43"
                      ></td>
                      <td
                        id="file-portal-shader-LC43"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k"> #pragma</span> vertex vert
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L44"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="44"
                      ></td>
                      <td
                        id="file-portal-shader-LC44"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k"> #pragma</span> fragment frag
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L45"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="45"
                      ></td>
                      <td
                        id="file-portal-shader-LC45"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L46"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="46"
                      ></td>
                      <td
                        id="file-portal-shader-LC46"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">fixed4</span> _Color;
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L47"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="47"
                      ></td>
                      <td
                        id="file-portal-shader-LC47"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L48"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="48"
                      ></td>
                      <td
                        id="file-portal-shader-LC48"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">struct</span> appdata
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L49"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="49"
                      ></td>
                      <td
                        id="file-portal-shader-LC49"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        {
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L50"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="50"
                      ></td>
                      <td
                        id="file-portal-shader-LC50"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">float4</span> vertex :
                        <span class="pl-c1">POSITION</span>;
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L51"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="51"
                      ></td>
                      <td
                        id="file-portal-shader-LC51"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        };
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L52"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="52"
                      ></td>
                      <td
                        id="file-portal-shader-LC52"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L53"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="53"
                      ></td>
                      <td
                        id="file-portal-shader-LC53"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">struct</span> v2f
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L54"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="54"
                      ></td>
                      <td
                        id="file-portal-shader-LC54"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        {
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L55"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="55"
                      ></td>
                      <td
                        id="file-portal-shader-LC55"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">float4</span> pos :
                        <span class="pl-c1">SV_POSITION</span>;
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L56"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="56"
                      ></td>
                      <td
                        id="file-portal-shader-LC56"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        };
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L57"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="57"
                      ></td>
                      <td
                        id="file-portal-shader-LC57"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L58"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="58"
                      ></td>
                      <td
                        id="file-portal-shader-LC58"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        v2f <span class="pl-c1">vert</span>(appdata v)
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L59"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="59"
                      ></td>
                      <td
                        id="file-portal-shader-LC59"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        {
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L60"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="60"
                      ></td>
                      <td
                        id="file-portal-shader-LC60"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        v2f o;
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L61"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="61"
                      ></td>
                      <td
                        id="file-portal-shader-LC61"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        o.pos = <span class="pl-c1">UnityObjectToClipPos</span>(v.vertex);
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L62"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="62"
                      ></td>
                      <td
                        id="file-portal-shader-LC62"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">return</span> o;
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L63"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="63"
                      ></td>
                      <td
                        id="file-portal-shader-LC63"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        }
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L64"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="64"
                      ></td>
                      <td
                        id="file-portal-shader-LC64"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L65"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="65"
                      ></td>
                      <td
                        id="file-portal-shader-LC65"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">half4</span> <span class="pl-c1">frag</span>(v2f i) :
                        <span class="pl-c1">COLOR</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L66"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="66"
                      ></td>
                      <td
                        id="file-portal-shader-LC66"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        {
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L67"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="67"
                      ></td>
                      <td
                        id="file-portal-shader-LC67"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">return</span> _Color;
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L68"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="68"
                      ></td>
                      <td
                        id="file-portal-shader-LC68"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        }
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L69"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="69"
                      ></td>
                      <td
                        id="file-portal-shader-LC69"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">ENDCG</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L70"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="70"
                      ></td>
                      <td
                        id="file-portal-shader-LC70"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        }
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L71"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="71"
                      ></td>
                      <td
                        id="file-portal-shader-LC71"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        }
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-portal-shader-L72"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="72"
                      ></td>
                      <td
                        id="file-portal-shader-LC72"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        }
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
          href="https://gist.github.com/sadiecrawford/ec6bfd285186c72df71953c9538ef84d/raw/2cce6d8912de0452e9c1d53930784f358750e8b8/Portal.shader"
          style="float: right"
          class="Link--inTextBlock"
          >view raw</a
        >
        <a
          href="https://gist.github.com/sadiecrawford/ec6bfd285186c72df71953c9538ef84d#file-portal-shader"
          class="Link--inTextBlock"
        >
          Portal.shader
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
  name: 'GistPortal'
}
</script>
