<script setup>
import tabBar from './components/tab-bar/tab-bar.vue';
</script>

<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<style scoped>
</style>
