<template>
  <div>
    <div class="home">
      <div class="nav"></div>
      <div class="banner">
        <img src="../assets/image/banner2.jpg" alt="banner">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
  body {
    // margin-top: 85px;
    // max-width: 1440px;
    margin: auto;
    // margin-left: auto;
    // margin-right: auto;
    background: url('../assets/image//banner4.jpg') no-repeat center center  / cover;
    background-color: rgba(0, 0, 0, .6);
    background-blend-mode: multiply;
    // background-color: rgba(0,0,0,.2);
    background-attachment: fixed;
  }
  .nav {
    min-height: 85px;
  }
  .banner {
    width: 100%;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
</style>
