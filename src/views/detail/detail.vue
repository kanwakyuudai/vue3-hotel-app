<template>
  <div class='detail top-page' ref="detailRef">
    <TabControl :titles="names"
    v-if="showTabControl"
    class="tabs"
    @tab-item-click="tabClick"
    ref="tabControlRef"
    ></TabControl>
    <van-nav-bar
      title="详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart">
      <DetailSwipe :swipe-data="mainPart.topModule.housePicture.housePics"></DetailSwipe>
      <DetailInfos name="描述" :ref='getSectionRef' :infos="mainPart.topModule"></DetailInfos>
      <DetailFacilities name="设施" :ref='getSectionRef' :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"></DetailFacilities>
      <DetailLandlord name="房东" :ref='getSectionRef' :landlord="mainPart.dynamicModule.landlordModule"></DetailLandlord>
      <DetailComments name="评论" :ref='getSectionRef' :comment="mainPart.dynamicModule.commentModule"></DetailComments>
      <DetailNotices name="须知" :ref='getSectionRef' :must-know="mainPart.dynamicModule.rulesModule.orderRules"></DetailNotices>
      <DetailMap name="周边" :ref='getSectionRef' :position="mainPart.dynamicModule.positionModule"></DetailMap>
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
import { ref, computed, watch } from 'vue';
import TabControl from '@/components/tab-control/tab-control.vue';
import DetailSwipe from './subs/detail-swipe.vue';
import DetailInfos from './subs/detail-infos.vue';
import DetailFacilities from './subs/detail-facilities.vue';
import DetailLandlord from './subs/detail-landlord.vue';
import DetailComments from './subs/detail-comments.vue';
import DetailNotices from './subs/detail-notices.vue';
import DetailMap from './subs/detail-map.vue';
import DetailIntro from './subs/detail-intro.vue';
import useScroll from '@/hooks/whenScroll';

// 处理顶栏返回路由
const router = useRouter()
const route = useRoute()
const onClickLeft = () => {
  router.back()
}

// 获取ID拉取数据
const houseId = route.params.id
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)
getDetailInfos(houseId).then(res => {
  detailInfos.value = res.data
})

// 监测滚动展示标签
const detailRef = ref()
const { scrollTop } = useScroll(detailRef);
const showTabControl = computed(() => {
  return scrollTop.value >= 300
})

// 绑定组件
const sectionEls = ref({})
const names = computed(() => {
  return Object.keys(sectionEls.value)
})
const getSectionRef = (value) => {
  // 组件卸载时调用此函数 value 为空，直接返回
  if (!value) return
  const name = value.$el.getAttribute('name')
  sectionEls.value[name] = value.$el
}
// 点击标签跳转
let isClick = false // 记录是否在点击
let currDistance = -1 // 记录目前滑动距离

const tabClick = (index) => {
  const key = Object.keys(sectionEls.value)[index]
  const el = sectionEls.value[key]
  let distance = el.offsetTop
  if (index !== 0) distance = distance - 44

  isClick = true // 当前是点击
  currDistance = distance // 记录目前滑动距离

  detailRef.value.scrollTo({
    top: distance,
    behavior: "smooth"
  })
}

// 页面滚动时标签自适应匹配索引高亮
const tabControlRef = ref()
watch(scrollTop, (currScrlTop) => {
  // 如果点击后已经跳转到正确位置上，取消正在点击的状态
  if (Math.round(currScrlTop) === currDistance) isClick = false
  // 如果在点击时触发，取消自适应匹配
  if (isClick) return
  // 获取全部组件的滚动偏移量
  const els = Object.values(sectionEls.value)
  const offsets = els.map(el => el.offsetTop)
  // 默认索引是最后一个，加 44 是标签栏自身高度偏移量
  let index = offsets.length - 1
  for (let i = 0; i < offsets.length; i++) {
    if (offsets[i] > currScrlTop + 44) {
      index = i - 1
      break
    }
  }
  tabControlRef.value?.setCurrentIndex(index)
})
</script>

<style lang="scss" scoped>
.tabs {
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
}
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
