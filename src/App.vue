<template>
  <div class="p-20px">
    <HomeIndex  />
  </div>
</template>
<script setup lang="ts">
import HomeIndex from '@/components/HomeIndex.vue'

onmessage = (event) => {
  const theme = event.data.pluginMessage;
  console.log('theme',theme)
  onmessage = null;
};

</script>
