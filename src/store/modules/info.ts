// 定义info小仓库
import { defineStore } from "pinia";
// 第一个仓库：小仓库名字 第二个参数：小仓库配置对象
// defineStore方法执行会返回一个函数，函数的作用就是让组件可以获取到仓库数据
const useInfoStore = defineStore("info", {
    // 存储数据：state
    state: () => {
        return {
            count: 99,
            arr: [1,2,3,4,5,6,7,8,9,10]
        }
    },
    actions: {
        // 注意：函数没有context上下文对象
        updateNum(a:any) {
            this.count += a
        }
    },
    getters: {
        total() {
            let result:any = this.arr.reduce((prev: number, next: number) => {
                return prev + next
            })
            return result
        }
    }
});

export default useInfoStore;