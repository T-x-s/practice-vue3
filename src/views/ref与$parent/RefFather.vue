<template>
    <div class="box">
        <h3>曹操：{{ money }}元</h3>
        <button @click="handler">找我的儿子借10元钱</button>
        <Son class="son" ref="sonRef"></Son>
        <Daughter class="daughter"></Daughter>
    </div>
</template>
<script setup lang='ts'>
import Son from "./Son.vue"
import Daughter from "./Daughter.vue"
import { ref } from "vue"
const money = ref(1000000)
const sonRef = ref()
const handler = () => {
    money.value += 10;
    sonRef.value.money -= 10;
}
defineExpose({
    money
})
</script>
<style lang='scss' scoped>
.box {
    width: 100vw;
    height: 500px;
    background-color: azure;
}
.son, .daughter {
    margin-top: 50px;
}
</style>