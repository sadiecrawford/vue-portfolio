<template>
  <div ref="scriptContainer">
    <!-- The script will be appended here -->
  </div>
</template>

<script lang="ts">
export default {
  name: 'ExternalScriptEmbed',
  props: {
    src: {
      type: String,
      required: true,
      default: ''
    }
  },
  mounted() {
    this.addExternalScript()
  },
  methods: {
    addExternalScript() {
      const script = document.createElement('script')
      script.src = this.src

      const scriptContainer = this.$refs.scriptContainer as HTMLDivElement
      scriptContainer.appendChild(script)
    }
  }
}
</script>
