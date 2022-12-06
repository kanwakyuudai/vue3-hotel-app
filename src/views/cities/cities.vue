<template>
  <div class="cities-list">
    <div class="top">
      <!-- 顶部搜索条 -->
      <van-search
        shape="round"
        show-action
        @cancel="cancelSearch"
        v-model="searchKeyWord"
        placeholder="城市/区域/位置"
      />
      <!-- 国内海外城市标签切换 -->
      <van-tabs v-model:active="tabActive">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key">
          <!-- :name 变更绑定到 key 默认值是 index -->
          </van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="cityGroup in currentGroup?.cities"><div>{{cityGroup}}</div></template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia';
const router = useRouter()


// 搜索框组件功能
const searchKeyWord =ref('')
const cancelSearch = () => {
  router.back()
}

// 国内海外城市切换
const tabActive = ref() // 默认绑定 index，通过组件库 :name 指定绑定 key

// 从 Pinia 中获取数据
const cityStore = useCityStore()
// 发起请求
cityStore.fetchAllCitiesData()
// 使取得的数据变成响应式
const { allCities } = storeToRefs(cityStore)

// 只要是 ref 取其值都需要 .value ，但是取到的值丢失响应式，因此使用计算属性
const currentGroup = computed(() => allCities.value[tabActive.value])
</script>

<style lang="scss" scoped>
.cities-list {
  .content {
    // 为顶部搜索条留出空间
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
