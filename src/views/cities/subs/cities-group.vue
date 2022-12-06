<template>
  <div class="cities-group">
    <van-index-bar :highlight-color="'#ff9854'" :index-list="indexList">
      <van-index-anchor index="热门城市"/>
        <div class="list">
          <template v-for='(city, index) in currentGroup.hotCities'>
            <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
          </template>
        </div>
      <template v-for="(group, index) in currentGroup?.cities" :key="index">
        <van-index-anchor :index="group.group"/>
            <template v-for="(city, index) in group.cities" :key="index">
              <van-cell :title="city.cityName" @click="cityClick(city)"/>
            </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import useCityStore from '@/stores/modules/city';
import { computed } from '@vue/reactivity';
import { useRouter } from 'vue-router';

const props = defineProps ({
  currentGroup: {
    type: Object,
    default: () => {},
    required: true
  }
})

// 按需展示索引
const indexList = computed(() => {
  const list = props.currentGroup.cities.map(i => i.group)
  list.unshift('热')
  return list
})

const router = useRouter()
const cityStore = useCityStore()
// 监听点击城市
const cityClick = (city) => {
  // 在仓库中记录选择的城市并返回上一级
  cityStore.currentCity = city
  router.back()
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;

  .city {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color: $lightThemeColor;
    margin: 5px 0;
  }
}
</style>
