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
      <template v-for="(value, key, index) in allCities" :key="key">
        <van-tab :title="value.title">
        </van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import { getCitiesList } from '@/services';
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia';
const router = useRouter()


// 搜索框组件功能
const searchKeyWord =ref('')
const cancelSearch = () => {
  router.back()
}

// 国内海外城市切换
const switchTab = ref() // 默认绑定标签索引

// 原生 Axios 请求数据的写法：
// axios.get('url').then(res => {})

// 发起网络请求，拉取数据
// const allCities = ref({})
// getCitiesList().then(res => {
//   allCities.value = res.data
// })
// 目前实现的两个缺点：
//   一，组件内充斥着请求逻辑；
//   二，需要手动给子组件（若存在）传数据。（将使用 Pinia 改善）

// 从 Pinia 中获取数据
const cityStore = useCityStore()
// 发起请求
cityStore.fetchAllCitiesData()
// 使取得的数据变成响应式
const { allCities } = storeToRefs(cityStore)
</script>

<style lang="scss" scoped>

</style>
