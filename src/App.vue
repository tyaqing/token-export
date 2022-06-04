<template>
  <div class="p-24px h-full flex flex-col">
    <HomeIndex />
  </div>
</template>
<script setup lang="ts">
import HomeIndex from '@/components/HomeIndex.vue'
import { imgReport } from '@/helpers/report'
import qs from 'qs'
import { onMounted } from 'vue'
const data = qs.stringify({
  referer: document.referrer,
  client_time: new Date(),
  subject: 'open',
  project: 'token-export',
  env: 'production',
  ua: navigator.userAgent,
  version: 1,
  url: '/',
})
const url = 'https://service-j0lpvd1n-1251054923.sh.apigw.tencentcs.com/release/log'
// 这里简单做下上报，统计下使用情况
onMounted(() => {
  console.log('mouted')
  imgReport(`${url}?${data}`)
})
</script>
