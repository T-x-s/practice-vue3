<template>
    <div class="box">
        <h3>Pinia: {{ infoStore.count }}---{{ infoStore.total }}</h3>
        <button @click="updateCount">改变Pinia传递的值</button>
        <div class="contina">
            <Child></Child>
            <Child2></Child2>
        </div>
    </div>
</template>
<script setup lang='ts'>
import useInfoStore from "../../store/modules/info"
import Child from "./Child.vue"
import Child2 from "./Child2.vue"
const infoStore = useInfoStore();
console.log(infoStore);

function updateCount() {
    // infoStore.count++
    // infoStore.$patch({
    //     count: 2222
    // })
    infoStore.updateNum(333)
}
</script>
<style lang='scss' scoped>
.box {
    width: 100vw;
    height: 700px;
    background-color: aqua;
    .contina {
        display: flex;
    }
}
</style>