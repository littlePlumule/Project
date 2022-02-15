<template>
  <div>
    <swiper
      :options="swiperOption"
      class="thisSwiper"
    >
      <swiper-slide v-for="(item, index) in carousel" :key="index">
        <img :src="item">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
  </div>
  
</template>
<script>
import BattleRoyale from '../../assets/image/BattleRoyale.jpg';
import BattleRoyale2 from '../../assets/image/BattleRoyale2.jpg';
import BattleRoyale3 from '../../assets/image/BattleRoyale3.jpg';
import BattleRoyale4 from '../../assets/image/BattleRoyale4.jpg';

export default {
  data() {
    return {
      carousel: [
        BattleRoyale,
        BattleRoyale2,
        BattleRoyale3,
        BattleRoyale4,
      ],
      swiperOption: {
        pagination: { // 頁碼
          el: '.swiper-pagination',
          clickable: true, // 點擊頁碼可跳轉
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
        autoplay:{disableOnInteraction: false,},
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.thisSwiper {
  max-width: 1890px;
  margin: auto;
  --swiper-theme-color: rgb(207, 107, 107);
}

.swiper-slide img {
  display: block;
  width: 100%;
  object-fit: cover;
}

</style>