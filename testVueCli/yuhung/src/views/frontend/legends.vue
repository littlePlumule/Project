<template>
  <div>
    <div class="legends">
      <a href="#">
        <div class="preview">
          <div class="placeholder" ref="testImg"></div>
          <img  src="../../assets/image/legend/ash.png" onload="this.style.opacity=1" alt="">
        </div>
        <div class="text">艾許</div>
        <p>敏銳煽動者</p>
      </a>
      <a href="#">
        <div class="preview">
          <div class="placeholder"></div>
          <img src="../../assets/image/legend/bangalore.png" onload="this.style.opacity=1" alt="">
          </div>
        <div class="text">邦加羅爾</div>
        <p>職業士兵</p>
      </a>
      <a href="#">
        <div class="preview">
          <div class="placeholder"></div>
          <img src="../../assets/image/legend/bloodhound.png" onload="this.style.opacity=1" alt="">
          </div>
        <div class="text">尋血犬</div>
        <p>科技追蹤者</p>
      </a>
      <a href="#">
        <div class="preview">
          <div class="placeholder"></div>
          <img src="../../assets/image/legend/caustic.png" onload="this.style.opacity=1" alt="">
          </div>
        <div class="text">腐蝕</div>
        <p>劇毒陷阱手</p>
      </a>
      <a href="#">
        <div class="preview">
          <div class="placeholder"></div>
          <img src="../../assets/image/legend/crypto.png" onload="this.style.opacity=1" alt="">
          </div>
        <div class="text">暗碼士</div>
        <p>監視專家</p>
      </a>
      <a href="#">
        <div class="preview">
          <div class="placeholder"></div>
          <img src="../../assets/image/legend/fuse.png" onload="this.style.opacity=1" alt="">
          </div>
        <div class="text">轟哥</div>
        <p>不拘小節的炸藥專家</p>
      </a>
      <a href="#">
        <div class="preview">
          <div class="placeholder"></div>
          <img src="../../assets/image/legend/gibraltar.png" onload="this.style.opacity=1" alt="">
          </div>
        <div class="text">直布羅陀</div>
        <p>防護堡壘</p>
      </a>
      <a href="#">
        <div class="preview">
          <div class="placeholder"></div>
          <img src="../../assets/image/legend/horizon.png" onload="this.style.opacity=1" alt="">
          </div>
        <div class="text">天際線</div>
        <p>引力操縱器</p>
      </a>
      <a href="#">
        <div class="preview">
          <div class="placeholder"></div>
          <img src="../../assets/image/legend/lifeline.png" onload="this.style.opacity=1" alt="">
          </div>
        <div class="text">生命線</div>
        <p>戰鬥醫療兵</p>
      </a>
      <a href="#">
        <div class="preview">
          <div class="placeholder"></div>
          <img src="../../assets/image/legend/loba.png" onload="this.style.opacity=1" alt="">
          </div>
        <div class="text">蘿芭</div>
        <p>瞬移盜賊</p>
      </a>
      <a href="#">
        <div class="preview">
          <div class="placeholder"></div>
          <img src="../../assets/image/legend/madMaggie.png" onload="this.style.opacity=1" alt="">
          </div>
        <div class="text">瘋狂瑪吉</div>
        <p>叛軍閥</p>
      </a>
      <a href="#">
        <div class="preview">
          <div class="placeholder"></div>
          <img src="../../assets/image/legend/mirage.png" onload="this.style.opacity=1" alt="">
          </div>
        <div class="text">幻象</div>
        <p>幻影魔術師</p>
      </a>
      <a href="#">
        <div class="preview">
          <div class="placeholder"></div>
          <img src="../../assets/image/legend/octane.png" onload="this.style.opacity=1" alt="">
          </div>
        <div class="text">辛烷</div>
        <p>高速勇者</p>
      </a>
      <a href="#">
        <div class="preview">
          <div class="placeholder"></div>
          <img src="../../assets/image/legend/pathfinder.png" onload="this.style.opacity=1" alt="">
          </div>
        <div class="text">探路者</div>
        <p>先鋒斥侯</p>
      </a>
      <a href="#">
        <div class="preview">
          <div class="placeholder"></div>
          <img src="../../assets/image/legend/rampart.png" onload="this.style.opacity=1" alt="">
          </div>
        <div class="text">蕾帕特</div>
        <p>強化模組師</p>
      </a>
      <a href="#">
        <div class="preview">
          <div class="placeholder"></div>
          <img src="../../assets/image/legend/revenant.png" onload="this.style.opacity=1" alt="">
          </div>
        <div class="text">亡靈</div>
        <p>合成惡夢</p>
      </a>
      <a href="#">
        <div class="preview">
          <div class="placeholder" ></div>
          <img src="../../assets/image/legend/seer.png" onload="this.style.opacity=1" alt="">
          </div>
        <div class="text">席爾</div>
        <p>埋伏大師</p>
      </a>
      <a href="#">
        <div class="preview">
          <div class="placeholder"></div>
          <img src="../../assets/image/legend/valkyrie.png" onload="this.style.opacity=1" alt="">
          </div>
        <div class="text">瓦爾基里</div>
        <p>有翼復仇者</p>
      </a>
      <a href="#">
        <div class="preview">
          <div class="placeholder"></div>
          <img src="../../assets/image/legend/wattson.png" onload="this.style.opacity=1" alt="">
          </div>
        <div class="text">華森</div>
        <p>靜止護衛</p>
      </a>
      <a href="#">
        <div class="preview">
          <div class="placeholder"></div>
          <img src="../../assets/image/legend/wraith.png" onload="this.style.opacity=1" alt="">
          </div>
        <div class="text">惡靈</div>
        <p>跨維度散兵</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    test() {
      console.log('testImg', this.$refs.testImg)
      this.$refs.testImg.classList.add('test')
    }, 
  },
  mounted() {
    this.test();
  },
};
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .legends {
    display: flex;
    flex-wrap: wrap;
    max-width: 1890px;
    margin: auto;
    padding-bottom: 40px;
  }
  .legends a {
    // width: 23%;
    width: 20em;
    text-decoration: none;
    margin: 15.1px;
    flex-grow:1;
    
    position:relative;
  }
  .legends a:hover .text,
  .legends a:hover p {
    color: #cf6b6b;
    transition: .8s;
  }
  .legends a img {
    width: 100%;
  }
  .legends a .text {
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 40px;
  }
  .legends a p {
    color: #fff;
    text-align: center;
    font-size: 20px;
  }
  .preview {
    height: 438px;
    position: relative;
  }
  .preview img{
    position: relative;
    opacity: 0;
    transition: all .2s ease-in;
  }
  .placeholder {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 50%;
    transform: translate(-50%,-50%);
    background: url('../../assets/image/Site-logo.png') no-repeat center center / cover;
    opacity: 1;
  }
  .test {
    opacity: 0;
    display: none;
  }
</style>