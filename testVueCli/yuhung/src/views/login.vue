<template>
  <div class="login">
    <form action="" class="form">
      <h2>會員登入</h2>
      <div class="group">
        <label for="user_id">帳號</label>
        <input type="text" id="user_id">
      </div>
      <div class="group">
        <label for="user_password">密碼</label>
        <input type="password" id="user_password">
      </div>
      <div class="btn-group">
        <button class="btn">登入</button>
        <button class="btn">取消</button>
      </div>
    </form>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  html,
  body {
    height: 100%;
  }

  body {
    // background: url("../assets/image/login.jpg") no-repeat center center / cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login {
    width: 600px;
    height: 500px;
    background-color: rgba(0, 0, 0, .5);
    border: 10px solid #fff;
    border-radius: 10px;
    box-shadow: 0 0 60px #000;
    backdrop-filter: blur(3px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form {
    width: 400px;
    color: #fff;
    font-family: "Noto Sans TC", sans-serif;
  }

  .form h2 {
    padding-bottom: 20px;
    border-bottom: 1px solid #fff;
    margin-bottom: 20px;
  }

  .form .group {
    margin-bottom: 20px;
  }

  .form label {
    line-height: 2;
    font-family: "Noto Sans TC", sans-serif;
  }

  .form input {
    width: 100%;
    border: 1px solid #aaa;
    line-height: 3;
    border-radius: 5px;
  }

  .form .btn-group {
    font-size: 0;
    margin-top: 50px;
  }

  .form .btn {
    font-size: 20px;
    border-radius: 5px;
    border: none;
    background-color: #6ab4fe;
    width: 190px;
    padding: 10px 0;
    color: #fff;
    font-family: "Noto Sans TC", sans-serif;
  }

  .form .btn+.btn {
    margin-left: 20px;
  }
</style>
