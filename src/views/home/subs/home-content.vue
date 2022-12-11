<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houselists" :key="item.data.houseId">
        <ItemType9 v-if="item.discoveryContentType === 9" :item-data="item.data" @click="gotoDetail(item.data)"></ItemType9>
        <ItemType3 v-else-if="item.discoveryContentType === 3" :item-data="item.data" @click="gotoDetail(item.data)"></ItemType3>
      </template>
    </div>
  </div>
</template>

<script setup>
import ItemType3 from '@/components/house-item/type3.vue';
import ItemType9 from '@/components/house-item/type9.vue';
import { useRouter } from 'vue-router';
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
homeStore.fetchHouselistsData()
const { houselists } = storeToRefs(homeStore)

const router = useRouter()
const gotoDetail = (item) => {
  router.push('/detail/' + item.houseId)
}
</script>

<style lang="scss" scoped>
.content {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
