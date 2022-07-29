import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
// 国际化
import i18n from "./locales";

// Element-Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// Vue初始化
const app = createApp(App)

// 组件注册
// 国际化
app.use(i18n)
// Element-Plus
app.use(ElementPlus)

// Register a global custom directive called `v-focus`
app.directive('focus', {
    // When the bound element is mounted into the DOM...
    mounted(el) {
        // Focus the element
        el.focus()
    }
})

// 挂载Vue
app.mount('#app')