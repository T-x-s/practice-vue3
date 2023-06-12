<template>
    <div class="box2">
        <h3>孙子组件:{{ msg }}</h3>
        <button @click="handler()">改变msg</button>
    </div>
</template>
<script setup lang='ts'>
import { inject, Ref } from 'vue';

const msg: Ref<string> | undefined = inject<Ref<string>>("msg");

function handler() {
    if(msg) {
        msg.value = "牛肉干";
    }
}
console.log(msg);

</script>
<style lang='scss' scoped>
.box2 {
    width: 150px;
    height: 100px;
    background-color: thistle;
}
</style>