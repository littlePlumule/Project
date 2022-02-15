<template>
  <div>
    <div class="wrap">
      <div class="container">
        <div class="logo">yuhung's Shop</div>
        <nav class="nav">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Coupons</a>
        </nav>
      </div>
      <ul class="icon">
        <li><i class="fas fa-user-circle"></i></li>
        <li><i class="fas fa-shopping-cart"></i></li>
        <li><i class="fas fa-heart"></i></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1140px;
    margin: auto;
    padding: 1em;
    .container {
      display: flex;
      align-items: center;
      .logo {
        font-size: 1.25rem;
        font-weight: bold;
      }
      .nav {
        a {
          text-decoration: none;
          color: rgba(0,0,0,.5);
          margin-left: 24px;
          height: 100%;
        }
      }
    }
    
    .icon {
      display: flex;
      font-size: 20px;
      i {
        margin-right: 1em;
      }
    }
  }
</style>