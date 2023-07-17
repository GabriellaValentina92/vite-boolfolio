<script>
import axios from "axios";
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },

  created() {
    axios.get(this.store.baseUrl + "projects/show").then();
  },
};
</script>
<template>
  <h1>ciaone</h1>
</template>

<style></style>
