<template>
  <div>
    <div class="space-y-8px">
      <div v-for="item of props.colors" :key="item.name" class="flex justify-between">
        <div class="flex items-center">
          <div class="h-30px w-30px rounded-20px shadow mr-8px" :style="`background:${item.value} `"></div>
          {{ item.name }}
        </div>
        <div class="flex items-center">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { KV } from '@/business'

const props = defineProps<{
  colors: KV[]
}>()
</script>
