<template>
    <h3>父组件有:{{ money }}元</h3>
    <h3>pageNo:{{ pageNo }}</h3>
    <h3>pageSize:{{ pageSize }}</h3>
    <!-- <Child1 :modelValue="money" @update:modelValue="handlerUpdateChild1"></Child1> -->
    <Child1 v-model="money"></Child1>
    <Child2 v-model:pageNo="pageNo" v-model:pageSize="pageSize"></Child2>
    <HintButton type="primary" size="large" :icon="Edit" title="你好" @click.stop="handleHello"></HintButton>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Child1 from "./Child1.vue"
import Child2 from "./Child2.vue"
import HintButton from "./HintButton.vue";
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
const pageNo = ref(0)
const pageSize = ref(0)
// function handlerUpdateChild1(val: any) {
//     money.value = val;
// }
const money = ref(1000)

function handleHello() {
    // alert("你好，世界！")
    console.log("你好，世界！");
    
}
</script>
