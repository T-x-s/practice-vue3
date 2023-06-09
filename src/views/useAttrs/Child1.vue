<template>
    <div class="child">
        <h3>child1</h3>
        <h4>我接收到父组件传来的:{{ props.modelValue }}元</h4>
        <button @click="handlerUpdateMoney">点击此处改变父组件传递来的数据</button>
    </div>
</template>
<script setup lang="ts">
import $mitt from "../../bus/index";
import { onMounted } from "vue";
const props = defineProps(["modelValue"]);
const $emit = defineEmits(["update:modelValue"])
onMounted(() => {
    $mitt.on('car', (car) => {
        console.log(car);
    })
})

function handlerUpdateMoney() {
    $emit("update:modelValue", props.modelValue +  1000)
}
</script>
<style lang='scss' scoped>
.child {
    height: 100px;
    width: 300px;
    background-color: aqua;
}
</style>