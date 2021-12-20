<template>
  <div>
    <img src="https://picsum.photos/id/237/200/300" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card 1</h5>
      <!-- eslint-disable -->
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <!-- eslint-enable -->
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    msg: String,
  },
};
</script>
