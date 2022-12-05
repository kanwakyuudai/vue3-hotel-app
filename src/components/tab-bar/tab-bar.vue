<template>
  <div class="tab-bar">

    <!-- 循环渲染四个底栏导航按钮 -->
    <template v-for="(item, index) in tabBarData">
      <div class="tab-bar-item">
        <img :src="getAssetsURL(item.image)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>

  </div>
</template>

<script setup>
import tabBarData from '@/assets/data/tab-bar'
import {getAssetsURL} from '@/utils/load_assets'


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
