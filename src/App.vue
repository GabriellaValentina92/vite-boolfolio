<script>
import projectfolio from "./components/projectfolio.vue";

export default {
  components: {
    projectfolio,
  },
};
</script>

<template>
  <div class="container">
    <projectfolio></projectfolio>
  </div>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
}

.container {
  max-width: 1100px;
  margin: 10px auto;
  padding: 0.5rem;
}
</style>
