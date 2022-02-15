<template>
  <div>
    <div class="gun">
      <a href="#">
        <img src="../../assets/image/weapons/hemlok.png" alt="">
        <p>突擊步槍</p>
      </a>
      <a href="#">
        <img src="../../assets/image/weapons/R-99.png" alt="">
        <p>衝鋒槍</p>
      </a>
      <a href="#">
        <img src="../../assets/image/weapons/Devotion.png" alt="">
        <p>輕機槍</p>
      </a>
      <a href="#">
        <img src="../../assets/image/weapons/Bow.png" alt="">
        <p>射手武器</p>
      </a>
      <a href="#">
        <img src="../../assets/image/weapons/Longbow.png" alt="">
        <p>狙擊槍</p>
      </a>
      <a href="#">
        <img src="../../assets/image/weapons/Peacekeeper.png" alt="">
        <p>散彈槍</p>
      </a>
      <a href="#">
        <img id="test" src="../../assets/image/weapons/P2020.png" alt="">
        <p>手槍</p>
      </a>
      <div class="fakeA">
        <img src="" alt="">
        <p></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .gun {
    display: flex;
    flex-wrap: wrap;
    width: 1500px;
    margin: auto;
    padding: 100px 0;
  }

  a {
    // background-color: #ccc;
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 340px;
    height: 200px;
    text-align: center;
    margin: 20px auto;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    font-size: 24px;
  }

  p {
    color: #000;
  }

  a:nth-child(n+5) {
    left: 150px;
  }

  .fakeA {
    width: 340px;
    height: 200px;
  }

  a {
    img{
      width: 85%;
      margin: auto;
      &#test {
        width:50%
      }
    }
  }

  // img:last-child {
  //   height: 100%;
  // }

  a::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: skewx(-35deg);
    background-color: rgba(0, 0, 0, 0.514);
    opacity: .5;
    z-index: -1;
  }  

  a:hover::before {
    background-color: rgb(207, 107, 107,);
    opacity: 1;
  }

  p {
  }
  
</style>