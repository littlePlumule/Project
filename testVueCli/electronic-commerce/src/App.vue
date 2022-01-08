<template>
  <div id="app">
    <AlertMessage/>
    <div id="nav">
    </div>
     <!-- loading -->
    <loading :active.sync="isLoading"></loading>
    <router-view/>
  </div>
</template>

<script>
import AlertMessage from './components/AlertMessage';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    AlertMessage,
  },
  computed: {
    ...mapGetters(['isLoading']),
  }
};
</script>

<style lang="scss">
@import "./assets/all.scss";
</style>
