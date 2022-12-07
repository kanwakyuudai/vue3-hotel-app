<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/imgs/home/banner.webp" alt="">
    </div>
    <home-search-box></home-search-box>
    <home-categories></home-categories>
  </div>
</template>

<script setup>
import HomeNavBar from './subs/home-nav-bar.vue';
import HomeSearchBox from './subs/home-search-box.vue';
import HomeCategories from './subs/home-categories.vue';
</script>

<style lang="scss" scoped>
.banner {
  img {
    width: 100%;
  }
}
</style>
