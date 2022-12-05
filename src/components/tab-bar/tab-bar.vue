<template>
  <div class="tab-bar">

    <!-- 循环渲染四个底栏导航按钮 -->
    <template v-for="(item, index) in tabBarData">
      <div
      class="tab-bar-item"
      :class="{active: currentIndex === index}"
      @click="itemClick(item, index)"
      >
        <img v-if='(currentIndex !== index)' :src="getAssetsURL(item.image)" alt="">
        <img v-else :src="getAssetsURL(item.imageActive)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>

  </div>
</template>

<script setup>
// 获取数据
import tabBarData from '@/assets/data/tab-bar'
import { getAssetsURL } from '@/utils/load_assets'

import { ref } from "vue";
import { useRouter } from "vue-router";

const currentIndex = ref(0)
const router = useRouter()

const itemClick = (item, index) => {
  currentIndex.value = index
  router.push(item.path)
}
</script>

<style lang="scss" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;

  border-top: 1px solid #f3f3f3;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.active {
      color: $themeColor;
    }
    .text {
      font-size: 12px;
      margin-top: 2px;
    }

    img {
      width: 36px;
    }
  }
}
</style>
