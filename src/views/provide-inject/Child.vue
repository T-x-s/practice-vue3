<template>
    <div class="box1">
        <h3>子组件</h3>
        <GrandChild></GrandChild>
    </div>
</template>
<script setup lang='ts'>
import GrandChild from './GrandChild.vue';
</script>
<style lang='scss' scoped>
.box1 {
    width: 200px;
    height: 200px;
    background-color: red;
}
</style>