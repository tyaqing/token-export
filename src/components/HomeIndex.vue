<template>
  <div  class="text-red-700">来了哈2 兄弟们2 {{tick}}</div>
 <div class="mt-20px">
    <span  @click="tick++" class="bg-blue-500 hover:bg-blue-700 transition text-white font-bold py-2 px-4 rounded cursor-pointer">
      click
    </span>
 </div>
</template>

<script lang="ts" setup>
import {ref, watch} from "vue";
const toggle = ref<boolean>(false)
const tick  =ref<number>(1)
watch(toggle,()=>{
  console.log(toggle.value)
})

</script>