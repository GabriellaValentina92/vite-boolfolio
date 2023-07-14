<script>
import axios from "axios";

export default {
  data() {
    return {
      arrProject: [],
    };
  },

  methods: {},

  created() {
    axios
      .get("http://localhost:8080/api/projects")
      .then((response) => (this.arrProject = response.data.data));
  },
};
</script>

<template>
  <h3>I miei progetti:</h3>
  <ul>
    <li v-for="project in arrProject" :key="project.id">{{ project.title }}</li>
  </ul>
</template>

<style lang="scss"></style>
