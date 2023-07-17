<script>
import projectfolio from "./components/projectfolio.vue";
import navbar from "./components/navbar.vue";

export default {
  components: {
    projectfolio,
    navbar,
  },
};
</script>

<template>
  <navbar></navbar>
  <div class="container">
    <router-view></router-view>
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
