<template>
    <div class="box3">
        <h3>child2</h3>
        <button @click="handler">点击添加对象</button>
        <div>{{ todoStore.total }}</div>
        <div>{{ todoStore.todos }}</div>
        <div>{{ todoStore.arr }}</div>
    </div>
</template>
<script setup lang='ts'>
import useTodoStore from "../../store/modules/todo";
const todoStore = useTodoStore();

function handler() {
    todoStore.updateTodo();
}
</script>
<style lang='scss' scoped>
.box3 {
    width: 300px;
    height: 300px;
    background-color: honeydew;
}
</style>