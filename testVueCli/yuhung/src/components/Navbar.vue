<template>
  <div>
    <input type="checkbox" id="navbar__control">
    <header class="main-header">
      <div class="container">
        <router-link to="/" class="logo">
          <img src="../assets/image/logo.png" alt="apex logo">
        </router-link>
        <div class="wrap">
          <nav class="main-nav">
            <a href="#"><span>關於</span></a>
            <a href="#"><span>商店</span></a>
            <a href="#"><span>活動</span></a>
            <a href="#"><span>訂單</span></a>
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
</template>

<style lang="scss" scoped src="../assets/scss/UserNavbar.scss">
</style>
