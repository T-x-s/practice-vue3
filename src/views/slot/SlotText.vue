<template>
    <div>
        <h3>插槽</h3>
        <!-- 匿名插槽 具名插槽 -->
        <Slot1>
            <div>秋风扫落叶</div>
            <template #a>
                <div>原来如此</div>
            </template>
        </Slot1>
        <Slot2 :arr="arr">
            <template v-slot="{ $row, $index }">
                <h3>{{ $row.name }}---{{ $index }}</h3>
            </template>
        </Slot2>
    </div>
</template>
<script setup lang='ts'>
import Slot1 from "./Slot1.vue"
import Slot2 from "./Slot2.vue"
import { ref } from "vue"
/* 
    作用域插槽：就是可以传递数据的插槽，子组件可以将数据回传给父组件，父组件可以决定这些回传的
    数据是以何种数据结构或者外观在子组件内部去展示

*/
const arr = ref([
    {
        id: 1,
        name: "小明",
        type: true
    },
    {
        id: 2,
        name: "小才",
        type: false
    },
])
</script>
<style lang='scss' scoped>

</style>