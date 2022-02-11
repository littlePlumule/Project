<template>
  <div>
    <input type="checkbox" id="navbar__control">
    <div class="height">
      <header class="main-header">
        <div class="container">
          <router-link to="/" class="logo">
            <img src="../../assets/image/logo.png" alt="apex logo">
          </router-link>
          <div class="wrap">
            <nav class="main-nav">
              <router-link to="/about/legends">
                <span>關於</span>
              </router-link>
              <router-link to="/products">
                <span>活動</span>
              </router-link>
              <router-link to="/products">
                <span>商店</span>
              </router-link>
              <router-link to="/products">
                <span>訂單</span>
              </router-link>
            </nav>
            <ul class="list">
              <li>
                <a href="#">
                  <i class="far fa-heart"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-shopping-cart"></i>
                </a>
              </li>
              <li>
                <router-link to="/login">
                  <i class="fas fa-user"></i>
                </router-link>
              </li>
            </ul>
          </div>
          <label class="menu__btn" for="navbar__control"></label>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped src="../../assets/scss/UserNavbar.scss">
</style>
