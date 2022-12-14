<template>
  <div class="search-box">
    <!-- 城市列表和定位 -->
    <div class="location">
      <div class="city" @click="gotoCitiesList">{{ currentCity.cityName }}</div>
      <div class="position" @click="getPosition">
        <span class="text">我的位置</span>
        <img src="@/assets/imgs/home/icon_location.png" alt="">
      </div>
    </div>
    <!-- 入住离店时间 -->
    <div class="section data-range" @click="showCalendar = true">
      <div class="check-in">
        <div class="text">
          <span class="tip">入住</span>
          <span class="date">{{ checkInDate }}</span>
        </div>
        <div class="stay">共{{ convertToChinese(stayNights) }}晚</div>
      </div>
      <div class="check-out">
        <div class="text">
          <span class="tip">离店</span>
          <span class="date">{{ checkOutDate }}</span>
        </div>
      </div>
    </div>
    <van-calendar v-model:show="showCalendar"
    type="range"
    first-day-of-week="1"
    :formatter="calendarFormatter"
    color="#ff9854"
    @confirm="calendarConfirm" />
    <!-- 筛选条件 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>
    <!-- 热门推荐 -->
    <div class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div class="item"
        style="{color: item.tagText.color}"
        >{{ item.tagText.text }}</div>
      </template>
    </div>
    <!-- 搜索栏 -->
    <div class="section search-btn">
      <div class="btn" @click="gotoSearch">搜索</div>
    </div>
  </div>

</template>

<script setup>
import { ref, computed } from 'vue';
import useCityStore from '@/stores/modules/city';
import useHomeStore from '@/stores/modules/home';
import useMainStore from '@/stores/modules/main';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { formatMonthDay, countDateDiff } from '@/utils/date_format'
import { calendarFormatter } from '@/utils/calendar_formatter'
import convertToChinese from '@/utils/number_convert_to_chinese'


// 路由
const router = useRouter()
// 拿取仓库数据
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)
// 发起请求拉取数据
const homeStore = useHomeStore()
homeStore.fetchHotSuggestsData()
const { hotSuggests } = storeToRefs(homeStore)


// 城市列表
const gotoCitiesList = () => {
  router.push('/cities')
}
// 定位
const getPosition = () => {
  navigator.geolocation.getCurrentPosition(res => {
    alert(`纬度：${res.coords.latitude}经度：${res.coords.longitude}`)
  }, err => {alert(`获取定位失败，请确认是否赋予定位权限！`)})
}

// 日期相关数据
const mainStore = useMainStore()
const { today, tomorrow } = storeToRefs(mainStore)
// 根据数据格式化文本
const checkInDate = computed(() => formatMonthDay(today.value))
const checkOutDate = computed(() => formatMonthDay(tomorrow.value))
// 计算提留天数
const stayNights = ref(countDateDiff(today.value, tomorrow.value))
// 默认不展示日历
const showCalendar = ref(false)
// 当用户选择好日期时调用
const calendarConfirm = (dateRange) => {
  // 将选择区间在页面上展示
  mainStore.today = dateRange[0]
  mainStore.tomorrow = dateRange[1]
  // 关闭日历并更新停留天数
  showCalendar.value = false
  stayNights.value = countDateDiff(dateRange[0], dateRange[1])
}

// 跳转搜索
const gotoSearch = () => {
  router.push({
    path: '/search',
    query: {
      checkInDate: checkInDate.value,
      checkOutDate: checkOutDate.value,
      currentCity: currentCity.value.cityName
    }
  })
}
</script>

<style lang="scss" scoped>
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
    color: #333;
    font-size: 15px;
  }

  .position {
    width: 74px;
    display: flex;
    align-items: center;

    .text {
      font-size: 12px;
      color: #666;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .check-in, .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;

    .text {
      flex: 1;
    }

    .stay {
      flex: 1;
      text-align: center;
      font-size: 12px;
      color: #666;
    }
  }

  .check-out {
    text-align: right;
    min-width: 30%;
    padding-left: 20px;
  }

  .text {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .date {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.price-counter {
  .start {
    border-right: 1px solid #f8f9f9;
  }
}

.hot-suggests {
  margin: 10px 0;
  height: auto;
  .item {
    background-color: #F1F3F5;
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}

.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: $themeGradient;
  }
}
</style>
