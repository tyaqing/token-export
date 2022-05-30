<template>
  <div>
    <!-- 字体-->
    <div>
      <div class="text-20px border-l-3px pl-5px border-solid border-blue">font family</div>
      <div class="space-y-8px mt-20px">
        <div v-for="item of props.fontFamily" :key="item.name" class="flex justify-between">
          <div>{{ item.name }}</div>
          <div>{{ item.value }}</div>
        </div>
      </div>
    </div>
    <!--字号-->
    <div class="mt-20px">
      <div class="text-20px border-l-3px pl-5px border-solid border-blue">font size</div>
      <div class="space-y-8px mt-20px">
        <div
          v-for="item of props.fontSize"
          :key="item.name"
          :style="`font-size:${item.value}px`"
          class="flex justify-between"
        >
          <div>{{ item.name || 'no name' }}</div>
          <div>{{ item.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { KV } from '@/business'
import { defineProps } from 'vue'

const props = defineProps<{
  fontFamily: KV[]
  fontSize: KV[]
}>()
</script>
