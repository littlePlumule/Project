<template>
  <div class="wrap">
    <div class="home">
      <BattleRoyale/>
      <div class="banner">
        <img src="../../assets/image/Arenas.jpg" alt="banner">
      </div>
    </div>
  </div>
</template>

<script>  
import BattleRoyale from '../../components/frontend/BattleRoyale.vue'

export default {
  name: 'Home',
  components: {
    BattleRoyale,
  }
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
    margin: auto;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
</style>
