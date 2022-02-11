<template>
  <div>
    <div class="wrap">
      <h1>404</h1>
      <h2>Page is not found</h2>
      <p>五秒後將會自動跳轉回首頁!</p>
      <router-link :to="'/'" replace class="home"><i class="fas fa-home"></i>點我返回首頁</router-link>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    setTimeout(() => {
      this.$router.push('/');
    }, 5000);
  },
};
</script>

<style lang="scss" scoped>
  .wrap {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #eee;
    background-color: #000;
  }

  a {
    color: #eee;
    font-size: 28px;
  }

  i {
    padding-right: 5px;
  }

  a, h1, h2, p {
    margin-bottom: 20px;
  }
  
  h1 {
    font-size: 48px;
  }

  h2 {
    font-size: 36px;
  }

  p {
    font-size: 24px;
  }

</style>
