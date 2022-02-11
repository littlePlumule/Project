<template>
  <div>
    <Navbar/>
      <router-view></router-view>
    <Footer/>
    <button
      type="button" class="goTop iconfont ml-gotop"
      :class="isTop ? 'goTopAfter' : ''" 
      @click="goTop()"
    ><i class="fas fa-chevron-up"></i></button>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

export default {
  data() {
    return {
      scrollNum: 0, //滾動距離
      isTop: false, //是否顯示回到頂部按鈕
    }
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    goTop() {
      document.documentElement.scrollTop = 0;
    },
  },
   mounted() {
    window.addEventListener("scroll", () => {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      this.scrollNum = top;
      if (top >= 100) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    });
  },
}
</script>

<style lang="scss" scoped>
  
  .goTop {
  position: fixed;
  bottom: -100px;
  right: 50px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 0;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 30px;
  text-align: center;
  line-height: 60px;
  color: #000;
  transition: 0.3s;
  cursor: pointer;
  box-shadow: 0 0 7px #000;
}
.goTop:hover {
  background-color: rgb(255, 255, 255);
  transition: 0.3s;
}
.goTopAfter {
  transition: 0.3s;
  bottom: 50px;
}
</style>