import { createApp } from 'vue'
import App from './App.vue'

// 重置默认 CSS 样式
import 'normalize.css'
import './assets/css/index.css'
// 导入 Pinia 状态管理
import pinia from './stores'
// 导入路由
import router from './router'

createApp(App).use(router).use(pinia).mount('#app')
