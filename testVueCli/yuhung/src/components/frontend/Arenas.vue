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
import Arenas from '../../assets/image/Arenas.jpg';
import Arenas2 from '../../assets/image/Arenas2.jpg';
import Arenas3 from '../../assets/image/Arenas3.jpg';
import Arenas4 from '../../assets/image/Arenas4.jpg';
import Arenas5 from '../../assets/image/Arenas5.jpg';
import Arenas6 from '../../assets/image/Arenas6.jpg';
export default {
  data() {
    return {
      carousel: [
        Arenas,
        Arenas2,
        Arenas3,
        Arenas4,
        Arenas5,
        Arenas6,
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