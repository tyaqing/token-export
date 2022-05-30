<template>
  <div>
    <div class="grid grid-cols-4 gap-16px">
      <div
        v-for="item of props.borderRadius"
        :key="item.name"
        :style="`border-radius:${item.value}`"
        class="aspect-square flex justify-center p-8px bg-gray-4"
      >
        <div>
          {{ item.name }}
        </div>
        <div class="flex items-center"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { KV } from '@/business'

const props = defineProps<{
  borderRadius: KV[]
}>()
</script>
