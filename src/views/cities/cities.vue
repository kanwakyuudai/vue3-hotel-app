<template>
  <div class="cities-list">
    <!-- 顶部搜索条 -->
    <van-search
      shape="round"
      show-action
      @cancel="cancelSearch"
      v-model="searchKeyWord"
      placeholder="城市/区域/位置"
    />
    <!-- 国内海外城市标签切换 -->
    <van-tabs v-model:active="switchTab">
      <van-tab title="国内·港澳台"></van-tab>
      <van-tab title="海外"></van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

// 搜索框组件功能
const searchKeyWord =ref('')
const cancelSearch = () => {
  router.back()
}

// 国内海外城市切换
const switchTab = ref() // 默认绑定标签索引
</script>

<style lang="scss" scoped>

</style>
