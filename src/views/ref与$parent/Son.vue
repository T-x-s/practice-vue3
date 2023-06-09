<template>
    <h3>曹植：{{ money }}</h3>
</template>
<script setup lang='ts'>
import { ref } from "vue"
const money = ref(1000)
defineExpose({
    money
})
</script>
<style lang='scss' scoped>

</style>