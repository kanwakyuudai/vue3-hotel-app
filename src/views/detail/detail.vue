<template>
  <div>
    <van-nav-bar
      title="详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart">
      <DetailSwipe :swipe-data="mainPart.topModule.housePicture.housePics"></DetailSwipe>
      <DetailInfos :infos="mainPart.topModule"></DetailInfos>
      <DetailFacilities :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"></DetailFacilities>
      <DetailLandlord :landlord="mainPart.dynamicModule.landlordModule"></DetailLandlord>
      <DetailComments :comment="mainPart.dynamicModule.commentModule"></DetailComments>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getDetailInfos } from '@/services'
import { ref, computed } from 'vue';
import DetailSwipe from './subs/detail-swipe.vue';
import DetailInfos from './subs/detail-infos.vue';
import DetailFacilities from './subs/detail-facilities.vue';
import DetailLandlord from './subs/detail-landlord.vue'
import DetailComments from './subs/detail-comments.vue';
const router = useRouter()
const route = useRoute()
const onClickLeft = () => {
  router.back()
}

const houseId = route.params.id
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)
getDetailInfos(houseId).then(res => {
  detailInfos.value = res.data
})

</script>

<style lang="scss" scoped>

</style>
