<template>
  <div>
    <a-tabs size="small" :tab-bar-gutter="16" :active-key="currentView" @change="changeViewPanel">
      <a-tab-pane
        v-for="panel of Object.values(ViewPanel)"
        :key="panel"
        :tab="ViewPanelNameMapping[panel]"
      ></a-tab-pane>
    </a-tabs>
  </div>
  <!--这里overflow在阴影下可能有坑，就是tab拦也滚动，暂时先不处理，应该不会有人用9个以上的shadow吧-->
  <a-spin
    :spinning="spinning"
    class="mt-12px flex-1 h-full"
    :class="{
      'overflow-auto': currentView !== ViewPanel.SHADOW,
    }"
  >
    <!--颜色-->
    <ColorsPanel v-show="currentView === ViewPanel.COLORS" :colors="theme.colors"></ColorsPanel>
    <!--字体/字号-->
    <TypographyPanel
      v-show="currentView === ViewPanel.TYPOGRAPHY"
      :font-family="theme.fontFamily"
      :font-size="theme.fontSize"
    ></TypographyPanel>
    <!-- 圆角 -->
    <RadiusPanel v-show="currentView === ViewPanel.BORDER_RADIUS" :border-radius="theme.borderRadius"></RadiusPanel>
    <!-- 阴影 -->
    <ShadowPanel v-show="currentView === ViewPanel.SHADOW" :box-shadow="theme.boxShadow"></ShadowPanel>
    <!--边距-->
    <ConfigPanel v-show="currentView === ViewPanel.CONFIG"></ConfigPanel>
    <!--TODO screens-->
    <!--TODO 兼容IE10-->
    <!--  导出-->
    <ExportPanel v-show="currentView === ViewPanel.EXPORT" :theme="theme"></ExportPanel>
  </a-spin>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, ref } from 'vue'
import { ViewPanel, ViewPanelNameMapping } from '@/business'
import ColorsPanel from '@/components/ColorsPanel.vue'
import TypographyPanel from '@/components/TypographyPanel.vue'
import ShadowPanel from '@/components/ShadowPanel.vue'
import RadiusPanel from '@/components/RadiusPanel.vue'
import ExportPanel from '@/components/ExportPanel.vue'
import GlobalStore from '@/store/global'
import ConfigPanel from '@/components/ConfigPanel.vue'
// 当前展示视图
const currentView = ref<ViewPanel>(ViewPanel.COLORS)
const theme = computed(() => GlobalStore.theme)
const spinning = ref<boolean>(false)

// 切换视图
const changeViewPanel = (target: ViewPanel) => {
  currentView.value = target
}

onBeforeMount(() => {
  spinning.value = true
})

// 获取来自figma js沙箱的主题配置
onmessage = (event) => {
  spinning.value = false
  console.log(event.data.pluginMessage)
  GlobalStore.setState({
    theme: event.data.pluginMessage,
  })
  onmessage = null
}
</script>
