<template>
  <div>
    <div class="mb-12px">
      <a-typography-text type="secondary"
        >Figma无法将圆角加入token，通过扫描项目所有节点获取，推荐使用手动配置</a-typography-text
      >
    </div>
    <div class="mb-12px">
      <a-radio-group :value="radiusFrom" @change="change">
        <a-radio-button value="auto">扫描获取</a-radio-button>
        <a-radio-button value="manual">手动配置</a-radio-button>
      </a-radio-group>
    </div>
    <div v-if="radiusFrom === RadiusFrom.AUTO" class="grid grid-cols-5 gap-20px">
      <div
        v-for="item of props.borderRadius"
        :key="item.name"
        :style="`border-radius:${item.value}`"
        class="aspect-square flex justify-center p-8px bg-gray-4"
      >
        <div class="text-center">
          <div>{{ item.name }}</div>
          <div class="truncate w-50px mt-20px">{{ item.value }}</div>
        </div>
      </div>
    </div>
    <div v-else class="grid grid-cols-5 gap-20px">
      <div
        v-for="(item, index) of customRadius"
        :key="index"
        :style="`border-radius:${item.value}`"
        class="aspect-square flex justify-center items-center p-16px bg-gray-4"
      >
        <div class="text-center">
          <div><a-input v-model:value="item.name" placeholder="名称" size="small"></a-input></div>
          <div class="mt-12px">
            <a-input v-model:value="item.value" placeholder="大小" size="small"></a-input>
          </div>
        </div>
      </div>
      <div
        :style="`border-radius:12px`"
        class="cursor-pointer aspect-square flex items-center flex-col justify-center p-8px bg-gray-4"
        @click="add"
      >
        <div class="text-center"><PlusCircleOutlined class="text-20px"></PlusCircleOutlined></div>
        <div class="text-center mt-20px">增加一个</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, reactive, ref, watch } from 'vue'
import { PlusCircleOutlined } from '@ant-design/icons-vue'
import { KV } from '@/business'
import GlobalStore, { RadiusFrom } from '@/store/global'
const customRadius = reactive<KV[]>([])

const radiusFrom = computed(() => GlobalStore.radiusFrom)
watch(customRadius, (value) => {
  GlobalStore.setState({
    customRadius,
  })
})

const add = () => {
  customRadius.push(
    reactive({
      name: '',
      value: '',
    })
  )
}
const change = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  GlobalStore.setState({
    radiusFrom: value as RadiusFrom,
  })
}
const props = defineProps<{
  borderRadius: KV[]
}>()
</script>
