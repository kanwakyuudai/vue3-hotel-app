<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <template v-for="(item, index) in tabBarData">
        <!-- 使用组件库自动路由 -->
        <van-tabbar-item :to="item.path">
          <span class="text">{{ item.text }}</span>
          <template #icon>
            <!-- 使用具名插槽自定义图标 -->
            <img v-if='(currentIndex !== index)' :src="getAssetsURL(item.image)" alt="">
            <img v-else :src="getAssetsURL(item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
// 获取数据
import tabBarData from '@/assets/data/tab-bar'
import { getAssetsURL } from '@/utils/load_assets'

import { ref, watch } from "vue";
import { useRoute } from 'vue-router';

const route = useRoute()
// 响应式记录当前点击按钮
const currentIndex = ref(0)
watch(route, (newRoute) => {
  const index = tabBarData.findIndex(item => item.path === newRoute.path)
  if (index < 0) return
  currentIndex.value = index
})
</script>

<style lang="scss" scoped>
.tab-bar {
  height: 50px;
  img {
    // 修改组件库默认图标大小
    height: 26px;
  }
}
</style>
