<template>
  <div class="wrap">
    <div class="home">
      <div class="nav"></div>
      <Banner/>
      <div class="banner">
        <img src="../../assets/image/banner.jpg" alt="banner">
      </div>
    </div>
  </div>
</template>

<script>  
import Banner from '../../components/frontend/Banner.vue'

export default {
  name: 'Home',
  components: {
    Banner,
  }
}
</script>

<style lang="scss" scoped>
  .wrap {
    margin: auto;
    background: url('../../assets/image/banner.jpg') no-repeat center center / cover;
    background-color: rgba(0, 0, 0, .6);
    background-blend-mode: multiply;
    background-attachment: fixed;
  }
  .nav {
    min-height: 85px;
  }
  .banner {
    max-width: 1890px;
    margin: auto;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
</style>
