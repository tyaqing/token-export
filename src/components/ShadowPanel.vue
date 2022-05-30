<template>
  <div>
    <div class="grid grid-cols-4 gap-20px">
      <div
        v-for="item of props.boxShadow"
        :key="item.name"
        :style="`box-shadow:${item.value}`"
        class="aspect-square flex justify-center p-8px"
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
  boxShadow: KV[]
}>()
</script>
