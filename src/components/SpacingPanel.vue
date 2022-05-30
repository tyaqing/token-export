<template>
  <div>
    <a-form>
      <a-form-item label="基准base">
        <a-input-number v-model:value="baseGap" :min="1" :max="999"></a-input-number>
      </a-form-item>
      <a-form-item label="生成数量n">
        <a-input-number v-model:value="loop" :min="1" :max="999"></a-input-number>
      </a-form-item>
      <div class="text-gray-400">生成n个base倍数</div>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import GlobalStore from '@/store/global'
const spacing = computed(() => GlobalStore.spacing)
const baseGap = ref<number>(0)
const loop = ref<number>(10)
onMounted(() => {
  baseGap.value = 4
})
watch(
  () => baseGap.value,
  () => {
    console.log('change?')
    const spacingData = {}
    for (let i = 0; i <= 10; i++) {
      Object.assign(spacingData, { [i]: baseGap.value * i + 'px' })
    }
    GlobalStore.setState({
      spacing: spacingData,
    })
  }
)
</script>
