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
        <Slot2 :arr="arr"></Slot2>
    </div>
</template>
<script setup lang='ts'>
import Slot1 from "./Slot1.vue"
import Slot2 from "./Slot2.vue"
import { ref } from "vue"

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