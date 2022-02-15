<template>
  <div>
    <swiper
      :options="swiperOption"
      class="thisSwiper"
    >
      <swiper-slide>
        <div class="sider">
          <div class=" sider-1"></div>
          <div class="sider-content left">
            <h1 class="h5 mb-3">英雄</h1>
            <p class="mb-0">選擇各式匪徒、士兵、怪人與隱士，這些人各自擁有自己的技能。《Apex 英雄》歡迎所有來者－活的夠久，大家就會稱你為傳奇。</p>
            <router-link to="/about/legends">看查陣容</router-link>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="sider spacial">
          <div class=" sider-2"></div>
          <div class="sider-content right">
            <h1 class="h5 mb-3">地圖</h1>
            <p class="mb-0">王者峽谷、世界邊緣和奧林匹斯。你在那裡戰鬥過、在那裡陣亡過，但是你知不知道你為什麼會被選中？看來漢蒙機器人公司和傭兵組織塑造了邊疆的命運……了解 Apex 競賽所在的地圖。</p>
            <router-link to="/about/maps">探索地圖</router-link>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="sider ">
          <div class="sider-3"></div>
          <div class="sider-content left">
            <h1 class="h5 mb-3">英雄</h1>
            <p class="mb-0">選擇各式匪徒、士兵、怪人與隱士，這些人各自擁有自己的技能。《Apex 英雄》歡迎所有來者－活的夠久，大家就會稱你為傳奇。</p>
            <a>看查陣容</a>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        autoplay:{disableOnInteraction: true,},
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .thisSwiper {
    max-width: 1890px;
    margin: auto;
    --swiper-theme-color: rgb(207, 107, 107);
  }
  h1 {
    font-size: 64px;
  }
  p {
    font-size: 24px;
  }
  .sider-content {
    color: #fff;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    box-sizing: border-box;
    padding: 0 4em;
    
  }
  .right {
    border-right: 5px solid #f00;
  }

  .left {
    border-left: 5px solid #f00;
  }

  .sider {
    height: 600px;
    display: flex;
    justify-content: flex-end;
  }
  .spacial {
    height: 600px;
    display: flex;
    flex-direction: row-reverse;
  }

  .sider-1 {
    background: url('../../assets/image/Home/banner1.jpg') no-repeat center center / cover;
    width: 80%;
  }
  .sider-2 {
    background: url('../../assets/image/Home/banner2.jpg') no-repeat center center / cover;
    width: 100%;
  }
  .sider-3 {
    background-image: url();
  }
  
  a {
    background-color: #da292a;
    padding: 1rem 2rem;
    margin-top: 30px;
    border-radius: 3px;
    font-size: 24px;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
  }
</style>
