<template>
    <div :title="props.title">
    <!-- <div :title="$attr.title"> -->
        <el-button :="$attr"></el-button>
    </div>
</template>
<script setup lang="ts">
import { useAttrs } from "vue";
const props = defineProps(["title"])
const $attr = useAttrs();
console.log($attr);

</script>
<style lang='scss' scoped>

</style>