<template>
    <div class="box2">
        <h3>child:{{ infoStore.count }}</h3>
    </div>
</template>
<script setup lang='ts'>
import useInfoStore from "../../store/modules/info"
const infoStore = useInfoStore()
</script>
<style lang='scss' scoped>
.box2 {
    width: 300px;
    height: 300px;
    background-color: pink;
}
</style>