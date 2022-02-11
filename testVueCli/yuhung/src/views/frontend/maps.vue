<template>
  <div>
    <div class="BattleRoyales">
      <h2 class="title">大逃殺</h2>
      <p class="text">這些巨大的地形位於邊疆的星球，大型 Apex 競賽就在那裡舉行。</p>
    </div>
    <BattleRoyale/>
    <div class="Arenas">
      <h2 class="title">競技場</h2>
      <p class="text">在無處可躲的地方磨練你的技巧。競技場地圖有別於 Apex 競賽的大規模場面，這是專為瘋狂的 3 對 3 戰鬥所設計。</p>
    </div>
    <Arenas/>
  </div>
</template>

<script>
import BattleRoyale from '../../components/frontend/BattleRoyale.vue';
import Arenas from '../../components/frontend/Arenas.vue';

export default {
  components: {
    BattleRoyale,
    Arenas,
  }
}
</script>

<style lang="scss" scoped>
  .BattleRoyales,
  .Arenas {
    background-color: #000;
    box-sizing: border-box;    
    padding: 4em 2em;
    max-width: 1890px;
    margin: auto;
  }

  .title {
    color: #fff;
    text-align: center;
    font-size: 48px;
    margin-bottom: .5em;
  }
  .text {
    color: #fff;
    text-align: center;
    font-size: 20px;
  }
</style>