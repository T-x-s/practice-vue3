<template>
    <div class="child">
        <h3>child2</h3>
        <button @click="handleSend">我要给child发送一段话</button>
        <button @click="handlerPage">给父组件传递数据</button>
    </div>
</template>
<script setup lang="ts">
import $mitt from "../bus/index"
console.log($mitt);
const props = defineProps(["pageNo", "pageSize"])
const $emit = defineEmits(["update:pageNo", "update:pageSize"])
function handleSend() {
    $mitt.emit('car', {
        'car': "送你一台法拉利"
    })
}
function handlerPage() {
    $emit("update:pageNo", props.pageNo + 3);
    $emit("update:pageSize", props.pageSize + 6);
}
</script>
<style lang='scss' scoped>
.child {
    height: 100px;
    width: 200px;
    background-color: beige;
}
</style>