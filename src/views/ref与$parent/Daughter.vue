<template>
    <div>
        <h3>曹杰：{{ money }}</h3>
        <button @click="handler($parent)">找老爹拿100块</button>
    </div>
</template>
<script setup lang='ts'>
import { ref } from "vue"
const money = ref(10000)
const handler = (parent: any) => {
    money.value += 100;
    parent.money -= 100;
    console.log(parent);
}
</script>
<style lang='scss' scoped></style>