<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="infos">
        <div class="summary">{{itemData.summaryText}}</div>
        <div class="name">{{itemData.houseName}}</div>
        <div class="rate">
          <van-rate :model-value="itemRate" color="#fff" :size="15" readonly allow-half></van-rate>
          <div class="price">{{("¥" + itemData.finalPrice)}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})

const itemRate = computed(() => {
  return Number(props.itemData.commentScore)
})
</script>

<style lang="scss" scoped>
  .house-item {
    width: 50%;

    .item-inner {
      position: relative;
      margin: 5px;
      background: #fff;
      border-radius: 6px;
      overflow: hidden;

      .cover {
        img {
          width: 100%;
        }
      }

      .infos {
        position: absolute;
        bottom: 0;
        padding: 8px 10px;
        color: #eee;
        background-color: rgba(25, 25, 25, .25);
        text-shadow: 0px 0px 1px #fff;
        .summary {
          font-size: 12px;
        }

        .name {
          margin: 5px 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .rate {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
        }
      }
    }
  }
</style>
