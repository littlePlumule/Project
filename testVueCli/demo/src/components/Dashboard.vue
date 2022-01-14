<template>
  <div>
    <Navbar/>
      <main>
        <router-view/>
      </main>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './Navbar';
import Footer from './Footer';

export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>
