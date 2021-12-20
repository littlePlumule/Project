<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" :to="{ name : '首頁'}">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/page">Page</router-link>
            </li>
          </ul>
        </div>
    </nav>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view name="menu"></router-view>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  created() {
    console.log(process.env.VUE_APP_API);
  },
};
</script>
