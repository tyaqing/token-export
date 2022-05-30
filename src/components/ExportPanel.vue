<template>
  <div class="mt-20px">
    <a-button @click="exportConfig">导出</a-button>
    <prism-editor v-model="code" class="my-editor" :highlight="highlighter" line-numbers></prism-editor>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import { ITheme } from '@/business'
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css' // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css' // import syntax highlighting styles

const code = ref('console.log("Hello World")')
const props = defineProps<{
  theme: ITheme
}>()
const exportConfig = () => {
  console.log(props.theme)
}
const highlighter = (code: string) => {
  return highlight(code, languages.js) // languages.<insert language> to return html with markup
}
</script>

<style scoped></style>
