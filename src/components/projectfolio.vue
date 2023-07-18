<script>
import axios from "axios";
import projectCard from "./projectCard.vue";
import { store } from "../store";

export default {
  components: {
    projectCard,
  },

  data() {
    return {
      arrProject: [],
      page: 1,
      nPage: 1,
      store,
    };
  },

  methods: {
    getProject() {
      axios
        .get(this.store.baseUrl + "api/projects", {
          params: {
            page: this.page,
          },
        })
        .then(
          (response) => (
            (this.arrProject = response.data.results.data),
            (this.nPage = response.data.results.last_page)
          )
        );
    },

    created() {
      axios
        .get(this.store.baseUrl + "api/projects", {
          params: {
            page: this.page,
          },
        })
        .then(
          (response) => (
            (this.arrProject = response.data.results.data),
            (this.nPage = response.data.results.last_page)
          )
        );
    },

    changePages(page) {
      this.page = page;
      this.getProject();
    },
  },

  watch: {
    page() {
      this.getProject();
    },
  },
};
</script>

<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mb-5">
    <div class="col" v-for="project in arrProject" :key="project.id">
      <projectCard :objProject="project" />
    </div>
  </div>

  <nav>
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: page == 1 }">
        <a class="page-link" @click="page--">Previous</a>
      </li>

      <li
        v-for="page in nPage"
        :key="page"
        class="page-item"
        :class="{ active: page == page }"
      >
        <a class="page-link" @click="changePages(page)">{{ page }}</a>
      </li>

      <li class="page-item" :class="{ disabled: page == nPage }">
        <a class="page-link" href="#" @click="page++">Next</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
ul {
  list-style: none;
}
</style>
