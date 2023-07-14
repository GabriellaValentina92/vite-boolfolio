<script>
import axios from "axios";

export default {
  data() {
    return {
      arrProject: [],
      nPage: 1,
    };
  },

  methods: {
    getProject() {
      axios
        .get("http://localhost:8080/api/projects", {
          params: {
            page: this.nPage,
          },
        })
        .then(
          (response) => (
            (this.arrProject = response.data.data),
            (this.nPage = response.data.last_page)
          )
        );
    },

    changePages(page) {
      this.nPage = page;
      this.getProject();
    },
  },

  created() {
    axios
      .get("http://localhost:8080/api/projects", {
        params: {
          page: this.nPage,
        },
      })
      .then(
        (response) => (
          (this.arrProject = response.data.data),
          (this.nPage = response.data.last_page)
        )
      );
  },
};
</script>

<template>
  <h1>BOOLFOLIO</h1>
  <h3>I miei Progetti</h3>
  <ul>
    <li v-for="project in arrProject" :key="project.id">{{ project.title }}</li>
  </ul>

  <nav>
    <ul class="pagination">
      <li class="page-item disabled">
        <a class="page-link">Previous</a>
      </li>

      <li
        v-for="page in nPage"
        :key="page"
        class="page-item"
        :class="{ active: page == nPage }"
      >
        <span class="page-link" @click="changePages(page)">{{ page }}</span>
      </li>

      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
ul {
  list-style: none;
}
</style>
