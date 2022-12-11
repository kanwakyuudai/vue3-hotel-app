<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>

      <template #indicator="{ active, total }">
        <div class="indicator">
          <template v-for="(value, key, index) in swipeGroup" :key="key">
            <span class="item" :class="{active: swipeData[active]?.enumPictureCategory == key}">
              <span class="text">{{value[0].title}}</span>
              <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                {{getCategoryIndex(swipeData[active])}}/{{value.length}}
              </span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
const props = defineProps ({
  swipeData: {
    type: Array,
    default: () => []
  }
})

const swipeGroup = {}

// 按照分类切割数据数组
for (const item of props.swipeData) {
  let valueArray = swipeGroup[item.enumPictureCategory]
  if (!valueArray) {
    valueArray = []
    swipeGroup[item.enumPictureCategory] = valueArray
  }
  valueArray.push(item)
}
// 获取指示器展示索引
const getCategoryIndex = (item) => {
  const valueArray = swipeGroup[item.enumPictureCategory]
  return valueArray.findIndex(data => data == item) + 1
}
</script>

<style lang="scss" scoped>
.swipe {
  .swipe-list {
    .item {
      img {
        width: 100%;
      }
    }
    .indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.1);

      .active {
        background-color: white;
        color: black;
      }
    }
  }
}
</style>
