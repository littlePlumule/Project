<template>
  <div id="app">
    <AlertMessage></AlertMessage>
    <!-- loading -->
    <loading :active.sync="isLoading"></loading>
    <div id="nav">
    </div>
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
    ...mapGetters(['isLoading'])
  }
};
</script>

<style lang="scss">
@import "./assets/all.scss";
</style>
