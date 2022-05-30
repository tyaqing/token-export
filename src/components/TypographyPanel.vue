<template>
  <div>
    <!-- 字体-->
    <div>
      <div class="text-20px">font family</div>
      <div class="space-y-8px mt-20px">
        <div v-for="item of props.fontFamily" :key="item.name" class="flex justify-between">
          <div>{{ item.name }}</div>
          <div>{{ item.value }}</div>
        </div>
      </div>
    </div>
    <!--字号-->
    <div>
      <div class="text-20px">font size</div>
      <div class="space-y-8px mt-20px">
        <div v-for="item of props.fontSize" :key="item.name" class="flex justify-between">
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
