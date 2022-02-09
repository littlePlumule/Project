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
import banner2 from '../../assets/image/banner2.jpg';
import banner3 from '../../assets/image/banner3.jpg';
import banner4 from '../../assets/image/banner4.jpg';
import banner5 from '../../assets/image/banner5.jpg';
export default {
  data() {
    return {
      carousel: [
        banner2,
        banner3,
        banner4,
        banner5,
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