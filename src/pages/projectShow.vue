<script>
import axios from "axios";
import { store } from "../store";
export default {
  data() {
    return {
      project: null,
      store,
    };
  },

  created() {
    axios
      .get(this.store.baseUrl + "api/projects/" + this.$route.params.project)
      .then((response) => (this.project = response.data.results));
  },
};
</script>
<template>
  <h1>{{ project.title }}</h1>
  <img :src="project.project_image" alt="" />
  <p>{{ project.project_description }}</p>
</template>

<style></style>
