<template>
    <div class="box3">
        <h3>祖先组件:{{ message }}</h3>
        <Child></Child>
    </div>
</template>
<script setup lang='ts'>
import Child from "./child.vue"
import { ref, provide } from "vue"
const message = ref("亲嘴烧");

provide("msg", message);
</script>
<style lang='scss' scoped>
.box3 {
    width: 100vw;
    height: 600px;
    background-color: skyblue;
}
</style>