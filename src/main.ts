import { createApp } from 'vue'
import './reset.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from "element-plus/lib/locale/lang/zh-cn";//国际化
import { createPinia } from 'pinia'

// 实例化 Pinia
const pinia = createPinia()

const app = createApp(App);
app.use(ElementPlus, { locale: zhCn }).use(router).use(pinia).mount('#app')

//全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}