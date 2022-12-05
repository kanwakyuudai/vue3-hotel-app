import { createApp } from 'vue'
import App from './App.vue'

// 导入路由
import router from './router'
// 重置默认 CSS 样式
import 'normalize.css'
import './assets/css/index.css'

createApp(App).use(router).mount('#app')
