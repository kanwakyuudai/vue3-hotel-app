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
import HomeNavBar from './subs/home-nav-bar.vue';
import HomeSearchBox from './subs/home-search-box.vue';
import HomeCategories from './subs/home-categories.vue';
import HomeContent from './subs/home-content.vue';
import useHomeStore from '@/stores/modules/home';

const homeStore = useHomeStore()

function loadmore() {
  homeStore.fetchHouselistsData()
}

window.addEventListener('scroll', () => {
  const clientHeight = document.documentElement.clientHeight
  const scrollTop = document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight
  if (clientHeight + scrollTop >= scrollHeight - clientHeight * 0.4) {
    loadmore()
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
