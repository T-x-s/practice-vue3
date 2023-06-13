<template>
    <h3>Slot2</h3>
    <!-- <slot></slot> -->
    <ul>
        <li v-for="(item, index) in props.arr" :key="item.id">
            <!-- 作用域插槽：可以将数据回传给父组件 -->
            <slot :$row="item" :$index="index"></slot>
        </li>
    </ul>
</template>
<script setup lang='ts'>
const props = defineProps(["arr"])

</script>
<style lang='scss' scoped>

</style>