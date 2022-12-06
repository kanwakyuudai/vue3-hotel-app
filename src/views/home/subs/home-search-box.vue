<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="gotoCitiesList">{{ currentCity.cityName }}</div>
      <div class="position" @click="getPosition">
        <span class="text">我的位置</span>
        <img src="@/assets/imgs/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter()

const gotoCitiesList = () => {
  router.push('/cities')
}

const getPosition = () => {
  navigator.geolocation.getCurrentPosition(res => {
    alert(`纬度：${res.coords.latitude}经度：${res.coords.longitude}`)
  }, err => {})
}

const cityStore = useCityStore()
const { currentCity }= storeToRefs(cityStore)
</script>

<style lang="scss" scoped>
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
    color: #333;
    font-size: 15px;
  }

  .position {
    width: 74px;
    display: flex;
    align-items: center;

    .text {
      font-size: 12px;
      color: #666;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}
</style>
