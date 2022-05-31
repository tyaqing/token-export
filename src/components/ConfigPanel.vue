<template>
  <div>
    <a-form>
      <a-form-item label="间距基准base">
        <a-input-number v-model:value="baseGap" :min="1" :max="999"></a-input-number>
      </a-form-item>
      <a-form-item label="间距生成数量n">
        <a-input-number v-model:value="loop" :min="1" :max="999"></a-input-number>
      </a-form-item>
      <a-form-item label="是否需要兼容IE10">
        <a-checkbox v-model:checked="supportIE10">需要兼容</a-checkbox>
      </a-form-item>
      <a-form-item label="拓展">
        <a-checkbox-group v-model:value="plugin" name="checkboxgroup" :options="options" />
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import GlobalStore from '@/store/global'
const spacing = computed(() => GlobalStore.spacing)
const baseGap = ref<number>(0)
const loop = ref<number>(10)
const supportIE10 = ref<boolean>(false)
const plugin = ref<string[]>([])
const options = [
  { label: 'Aspect Ratio', value: 'Aspect Ratio' },
  { label: 'Filters', value: 'Filters' },
  { label: 'Line Clamp', value: 'Line Clamp' },
  { label: 'Scroll Snap', value: 'Scroll Snap' },
]

//TODO 移动端适配
onMounted(() => {
  baseGap.value = 4
})
watch(
  () => baseGap.value,
  () => {
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
