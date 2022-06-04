<template>
  <div class="p-24px h-full flex flex-col">
    <HomeIndex />
  </div>
</template>
<script setup lang="ts">
import HomeIndex from '@/components/HomeIndex.vue'
import { imgReport } from '@/helpers/report'
import qs from 'qs'
const data = qs.stringify({
  referer: document.referrer,
  client_time: new Date(),
  subject: 'open',
  project: 'token-export',
  env: 'production',
  ua: navigator.userAgent,
  ext4: 'undefined',
  version: 1,
  ext3: 'undefined',
  url: '/',
  ext2: 'undefined',
  ext1: 'undefined',
})
const url = 'https://service-j0lpvd1n-1251054923.sh.apigw.tencentcs.com/release/log'
imgReport(`${url}?${data}`)
</script>
<style>
body {
  /*background-color: #f3f5f7;*/
}
</style>
