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
          <div id="file-rootcanal-shader" class="file my-2">
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
                  data-tagsearch-path="RootCanal.shader"
                >
                  <tbody>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L1"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="1"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC1"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">Shader</span>
                        <span class="pl-s">"Custom/RootCanal"</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L2"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="2"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC2"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        {
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L3"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="3"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC3"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">Properties</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L4"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="4"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC4"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        {
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L5"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="5"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC5"
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
                        id="file-rootcanal-shader-L6"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="6"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC6"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">_SpecColor(</span
                        ><span class="pl-s">"Specular Color"</span>,
                        <span class="pl-c1">Color</span>) = (<span class="pl-c1">0.5</span>,
                        <span class="pl-c1">0.5</span>, <span class="pl-c1">0.5</span>,
                        <span class="pl-c1">1</span>)
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L7"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="7"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC7"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">_Shininess(</span><span class="pl-s">"Shininess"</span>,
                        <span class="pl-c1">Range</span>(<span class="pl-c1">0.03</span>,
                        <span class="pl-c1">1</span>)) = <span class="pl-c1">0.078125</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L8"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="8"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC8"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">_MainTex(</span
                        ><span class="pl-s">"Base (RGB) Gloss (A)"</span>,
                        <span class="pl-c1">2D</span>) = <span class="pl-s">"white"</span> {}
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L9"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="9"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC9"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">_BumpMap(</span><span class="pl-s">"Normalmap"</span>,
                        <span class="pl-c1">2D</span>) = <span class="pl-s">"bump"</span> {}
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L10"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="10"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC10"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L11"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="11"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC11"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">_StencilReferenceID(</span
                        ><span class="pl-s">"Stencil ID Reference"</span>,
                        <span class="pl-c1">Float</span>) = <span class="pl-c1">1</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L12"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="12"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC12"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        [<span class="pl-c1">Enum</span>(UnityEngine.Rendering.CompareFunction)]
                        <span class="pl-c1">_StencilComp(</span
                        ><span class="pl-s">"Stencil Comparison"</span>,
                        <span class="pl-c1">Float</span>) = <span class="pl-c1">3</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L13"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="13"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC13"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        [<span class="pl-c1">Enum</span>(UnityEngine.Rendering.StencilOp)]
                        <span class="pl-c1">_StencilOp(</span
                        ><span class="pl-s">"Stencil Operation"</span>,
                        <span class="pl-c1">Float</span>) = <span class="pl-c1">0</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L14"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="14"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC14"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">_StencilWriteMask(</span
                        ><span class="pl-s">"Stencil Write Mask"</span>,
                        <span class="pl-c1">Float</span>) = <span class="pl-c1">255</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L15"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="15"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC15"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">_StencilReadMask(</span
                        ><span class="pl-s">"Stencil Read Mask"</span>,
                        <span class="pl-c1">Float</span>) = <span class="pl-c1">255</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L16"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="16"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC16"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        }
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L17"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="17"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC17"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L18"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="18"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC18"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">SubShader</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L19"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="19"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC19"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        {
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L20"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="20"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC20"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">Tags</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L21"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="21"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC21"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        {
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L22"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="22"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC22"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s">"Queue"</span> = <span class="pl-s">"Geometry"</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L23"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="23"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC23"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-s">"RenderType"</span> =
                        <span class="pl-s">"StencilOpaque"</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L24"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="24"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC24"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        }
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L25"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="25"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC25"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L26"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="26"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC26"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">LOD</span> <span class="pl-c1">400</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L27"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="27"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC27"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L28"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="28"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC28"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">Stencil</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L29"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="29"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC29"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        {
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L30"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="30"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC30"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">Ref</span> <span class="pl-c1">1</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L31"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="31"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC31"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">Comp</span> <span class="pl-c1">Equal</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L32"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="32"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC32"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">Pass</span> <span class="pl-c1">Keep</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L33"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="33"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC33"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">ReadMask</span
                        ><span class="pl-c1">[_StencilReadMask]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L34"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="34"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC34"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">WriteMask</span
                        ><span class="pl-c1">[_StencilWriteMask]</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L35"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="35"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC35"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        }
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L36"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="36"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC36"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L37"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="37"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC37"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">CGPROGRAM</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L38"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="38"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC38"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k"> #include</span>
                        <span class="pl-s">"UnityCG.cginc"</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L39"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="39"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC39"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k"> #pragma</span> surface surf BlinnPhong
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L40"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="40"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC40"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L41"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="41"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC41"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">sampler2D</span> _MainTex;
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L42"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="42"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC42"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">sampler2D</span> _BumpMap;
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L43"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="43"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC43"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">fixed4</span> _Color;
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L44"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="44"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC44"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">half</span> _Shininess;
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L45"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="45"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC45"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L46"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="46"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC46"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">struct</span> <span class="pl-c1">Input</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L47"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="47"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC47"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        {
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L48"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="48"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC48"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">float2</span> uv_MainTex;
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L49"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="49"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC49"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">float2</span> uv_BumpMap;
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L50"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="50"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC50"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        };
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L51"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="51"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC51"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L52"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="52"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC52"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">void</span> <span class="pl-c1">surf</span>(<span
                          class="pl-c1"
                          >Input</span
                        >
                        IN, <span class="pl-k">inout</span>
                        <span class="pl-c1">SurfaceOutput</span> o)
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L53"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="53"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC53"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        {
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L54"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="54"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC54"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">fixed4</span> tex =
                        <span class="pl-c1">tex2D</span>(_MainTex, IN.uv_MainTex);
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L55"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="55"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC55"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        o.Albedo = tex.rgb * _Color.rgb;
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L56"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="56"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC56"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        o.Gloss = tex.a;
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L57"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="57"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC57"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        o.Alpha = tex.a * _Color.a;
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L58"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="58"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC58"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        o.Specular = _Shininess;
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L59"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="59"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC59"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        o.Normal = <span class="pl-c1">UnpackNormal</span>(<span class="pl-c1"
                          >tex2D</span
                        >(_BumpMap, IN.uv_BumpMap));
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L60"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="60"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC60"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        }
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L61"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="61"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC61"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-k">ENDCG</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L62"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="62"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC62"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        }
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L63"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="63"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC63"
                        class="blob-code blob-code-inner js-file-line"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L64"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="64"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC64"
                        class="blob-code blob-code-inner js-file-line"
                      >
                        <span class="pl-c1">FallBack</span> <span class="pl-s">"Specular"</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="file-rootcanal-shader-L65"
                        class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
                        data-line-number="65"
                      ></td>
                      <td
                        id="file-rootcanal-shader-LC65"
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
          href="https://gist.github.com/sadiecrawford/9c0dc16ba4c4e10b57401156c177e07b/raw/a69d0bfc1173aac27e166d501a5a82c2186f9fd1/RootCanal.shader"
          style="float: right"
          class="Link--inTextBlock"
          >view raw</a
        >
        <a
          href="https://gist.github.com/sadiecrawford/9c0dc16ba4c4e10b57401156c177e07b#file-rootcanal-shader"
          class="Link--inTextBlock"
        >
          RootCanal.shader
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
  name: 'GistRootCanal'
}
</script>
