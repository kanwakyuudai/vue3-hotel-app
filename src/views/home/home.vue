<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/imgs/home/banner.webp" alt="">
    </div>
    <home-search-box></home-search-box>
    <home-categories></home-categories>
    <home-content></home-content>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import HomeNavBar from './subs/home-nav-bar.vue';
import HomeSearchBox from './subs/home-search-box.vue';
import HomeCategories from './subs/home-categories.vue';
import HomeContent from './subs/home-content.vue';
import useHomeStore from '@/stores/modules/home';
import whenScrollToBottom from '@/hooks/whenScroll'

const homeStore = useHomeStore()
const {isReachBottom} = whenScrollToBottom()

watch(isReachBottom, (newValue) => {
  if (newValue) {
    // 此处调用返回 Promise 因此可以调用 then 确保拿到新数据后在将是否达到底部设置为伪
    homeStore.fetchHouselistsData().then(() => {
      isReachBottom.value = false
    })
  }
})
</script>

<style lang="scss" scoped>
.banner {
  img {
    width: 100%;
  }
}
</style>
