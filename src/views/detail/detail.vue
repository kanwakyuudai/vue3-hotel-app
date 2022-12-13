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
      <DetailNotices :must-know="mainPart.dynamicModule.rulesModule.orderRules"></DetailNotices>
      <DetailMap :position="mainPart.dynamicModule.positionModule"></DetailMap>
      <DetailIntro :price-intro="mainPart.introductionModule"></DetailIntro>
      <div class="footer">
        <img src="@/assets/imgs/detail/icon_ensure.png" alt="">
        <div class="text">人生旅途，永无止境!</div>
      </div>
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
import DetailLandlord from './subs/detail-landlord.vue';
import DetailComments from './subs/detail-comments.vue';
import DetailNotices from './subs/detail-notices.vue';
import DetailMap from './subs/detail-map.vue';
import DetailIntro from './subs/detail-intro.vue';
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
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>
