<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houselists" :key="item.data.houseId">
        <h3>{{item.data.houseName}}</h3>
      </template>
      <button @click="loadmore">more</button>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
homeStore.fetchHouselistsData()
const { houselists } = storeToRefs(homeStore)

function loadmore() {
  homeStore.fetchHouselistsData()
}
</script>

<style lang="scss" scoped>
.content {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 10px;
  }
}
</style>
