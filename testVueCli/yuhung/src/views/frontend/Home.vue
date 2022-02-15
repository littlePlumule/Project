<template>
  <div class="wrap">
    <div class="home">
      <HomeBanner/>
      <div class="banner">
        <div class="container">
        <small class="discount">discount</small>
        <h3 class="title">歡慶開幕</h3>
        <!-- 2021-09-12 -->
        <p class="content">即日起至 ， 全館消費不限金額，即享 88% 折扣</p>
        <!-- $refs.couponInput.value -->
        <div class="coupon-code" readonly="readonly">
          <p ref="couponInput">321321</p>
        </div>
      </div>
      </div>
      
      
    </div>
  </div>
</template>

<script>  
import HomeBanner from '../../components/frontend/HomeBanner.vue'

export default {
  name: 'Home',
  components: {
    HomeBanner,
  },
}
</script>

<style lang="scss" scoped>
  .wrap {
    margin: auto;
    background: url('../../assets/image/Arenas.jpg') no-repeat center center / cover;
    background-color: rgba(0, 0, 0, .6);
    background-blend-mode: multiply;
    background-attachment: fixed;
  }
  .banner {
    max-width: 1890px;
    text-align: center;
    padding: 15em 0;
    margin: auto;
    background: url('../../assets/image/Home/banner4.png') no-repeat center center / cover;
    background-color: rgba(100, 100, 100, .6);
    background-blend-mode: multiply;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }

  .container {
    color: #fff;
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .discount {
    background-color: #fff;
    color:#000;
    padding: 5px 10px;
    border-radius: 50px;
    margin-bottom: 1.5rem;
    font-size: 18px;
  }
  .title {
    font-size: 48px;
    // background: linear-gradient(transparent 60%,#ff6978 0);
    margin-bottom: 1em;
  }
  .content {
    font-size: 24px;
    margin-bottom: 3rem;
    font-weight: bold;
  }
  .coupon-code {
    padding: 2em;
    background-color: rgba(255, 255, 255, .5);
    width: 25%;
    border-radius: 10px;
    border: 3px dashed #fff;
    cursor: pointer
  }
</style>
