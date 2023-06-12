<template>
    <h3>Slot2</h3>
    <!-- <slot></slot> -->
    <ul>
        <li v-for="item in props.arr" :key="item.id">{{ item.name }}</li>
    </ul>
</template>
<script setup lang='ts'>
const props = defineProps(["arr"])
console.log(props.arr);

</script>
<style lang='scss' scoped>

</style>