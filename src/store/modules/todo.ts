// 定义info小仓库
import { defineStore } from "pinia";
import { ref, computed } from "vue"
const useTodoStore = defineStore("todo", () => {
    const todos = ref([{id: 1, name: "小明"},{id: 2, name: "小刚"}]);
    const arr = ref([1,2,3,4,5]);
    const total = computed(() => {
        return arr.value.reduce((pre: any, next: any) => pre + next,0)
    })
    return {
        todos,
        arr,
        total,
        updateTodo() {
            todos.value.push({id: 3, name: "小晓"})
        }
    }
})

export default useTodoStore