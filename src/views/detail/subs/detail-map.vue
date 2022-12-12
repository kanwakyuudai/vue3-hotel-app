<template>
  <div class="nearby">
    <DetailSection title="位置周边" more-text="查看更多周边信息">
      <div class="baiduMap" ref="mapRef"></div>
    </DetailSection>
  </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/detail-section.vue';
import { onMounted, ref } from 'vue';

const props = defineProps({
  position: {
    type: Object,
    default: () => ({
      longitude: '116.395932',
      latitude: '39.929986'
    })
  }
})
const mapRef = ref()

onMounted(() => {
    const map = new BMapGL.Map(mapRef.value);//在容器中创建一个地图
    const point = new BMapGL.Point(props.position.longitude, props.position.latitude);//定义一个中心点坐标
    map.centerAndZoom(point,12);//设定地图的中心点和坐标并将地图显示在地图容器中
})
</script>

<style lang="scss" scoped>

</style>
