<template>
    <div class="flex justify-space-between mb-4 flex-wrap gap-4">
        <el-button v-for="button in buttons" :size="button.size" :key="button.text" :type="button.type" link @click="handler(button.push)">{{ button.text }}</el-button>
    </div>
</template>
<script setup lang='ts'>
import { useRouter } from 'vue-router';
const router = useRouter();
console.log(router);

const buttons = [
  { type: '', text: 'useAttrs', size: 'large', push: '/useAttrs' },
  { type: 'primary', text: 'ref与parent', size: 'large', push: '/RefFather' },
  { type: 'success', text: 'ProvideInjectTest', size: 'large', push: '/ProvideInjectTest' },
  { type: 'info', text: 'Pinia', size: 'large', push: '/PiniaText' },
  { type: 'warning', text: 'Slot', size: 'large', push: '/SlotText' },
  { type: 'danger', text: 'danger', size: 'large', push: '' },
] as const

function handler(params: any) {
  router.push(params)
}
</script>
<style lang='scss' scoped></style>