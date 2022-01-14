<template>
  <div id="app">
    <!-- loading -->
    <loading :active.sync="isLoading"></loading>
    <router-view/>
  </div>
</template>

<script>
import $ from 'jquery';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
};
</script>

<style lang="scss">
@import "./assets/all.scss";
</style>
