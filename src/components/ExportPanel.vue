<template>
  <div class="mt-20px">
    <a-button @click="exportConfig">导出</a-button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { ITheme } from '@/business'

const props = defineProps<{
  theme: ITheme
}>()
const exportConfig = () => {
  console.log(props.theme)
}
</script>

<style scoped></style>
