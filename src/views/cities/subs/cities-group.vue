<template>
  <div class="cities-group">
    <van-index-bar>
      <template v-for="(group, index) in currentGroup?.cities" :key="index">
        <van-index-anchor :index="group.group"/>
            <template v-for="(city, index) in group.cities" :key="index">
              <van-cell :title="city.cityName"/>
            </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
defineProps ({
  currentGroup: {
    type: Object,
    default: () => {},
    required: true
  }
})
</script>

<style lang="scss" scoped>

</style>
