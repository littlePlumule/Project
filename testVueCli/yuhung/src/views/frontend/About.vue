<template>
  <div class="background">
    <div class="about">
      <router-link to="legends">英雄</router-link>
      <router-link to="maps">地圖</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .background {
    background: url('../../assets/image/Arenas.jpg') no-repeat center center / cover;
    background-color: rgba(100, 100, 100, .6);
    background-blend-mode: multiply;
    background-attachment: fixed;
  }

  .about {
    display: flex;
    justify-content: center;
    max-width: 1890px;
    margin: auto;
    background: linear-gradient(45deg, #cf6b6b 50%, transparent 50%)center center / 100% 100%, #e7a4a4 right center/ auto 100%;    
  }
  
  .about a {
    text-decoration: none;
    font-size: 40px;
    margin-right: 10px;
    margin: auto;
    padding: 20px;
    width: 100%;
    color: #fff;
    font-weight: bold;
    text-align: center;
  }

  .about a:hover {
    color: rgb(112, 42, 42);
  }

  .active {
    color: rgb(112, 42, 42);
  }

</style>
