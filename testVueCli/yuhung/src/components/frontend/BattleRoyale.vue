<template>
  <swiper
    :options="swiperOption"
    class="thisSwiper"
  >
    <swiper-slide v-for="(item, index) in carousel" :key="index">
      <img :src="item" class="img-cover w-100 mh-auto px-5">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  
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
        pagination: {
          el:'.swiper-pagination',
          clickable :true,
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