<template>
  <div class="flex">
    <prism-editor v-model="code" class="my-editor flex-1" :highlight="highlighter" line-numbers></prism-editor>
  </div>
</template>
<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import { ITheme, KV } from '@/business'
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css' // import the styles somewhere
import beautify from 'js-beautify'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css' // import syntax highlighting styles
import { set, cloneDeep } from 'lodash'
import GlobalStore, { RadiusFrom } from '@/store/global'
// 配置code
const code = computed(() => {
  // 处理拼装
  const theme = cloneDeep(props.theme)
  const config = {}
  // 如果是自定义边距需要覆盖
  if (GlobalStore.radiusFrom === RadiusFrom.MANUAL) {
    theme.borderRadius = GlobalStore.customRadius.filter((item) => {
      // 只导出有内容的样式
      return item.name && item.value
    })
  }
  // 处理配置
  const { spacing, tokenFormat } = GlobalStore
  Object.entries(theme).forEach(([key, value]) => {
    value.length &&
      value.forEach((item: KV) => {
        const reg = new RegExp(tokenFormat, 'g')
        const path = item.name.replace('shadow/', '').replace(reg, '.')
        set(config, key + '.' + path, item.value)
      })
  })
  // 处理spacing
  const str = JSON.stringify({
    ...config,
    spacing,
  })
  return beautify(str, {
    indent_size: 2,
  })
})
const props = defineProps<{
  theme: ITheme
}>()
// 高粱
const highlighter = (c: string) => {
  return highlight(c, languages.js) // languages.<insert language> to return html with markup
}
</script>

<style>
.my-editor {
  background: #2d2d2d;
  color: #ccc;
  /* you must provide font-family font-size line-height. Example:*/
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}
/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
