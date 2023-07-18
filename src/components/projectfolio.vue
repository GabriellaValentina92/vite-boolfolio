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
      arrTypes: [],
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
            q: new URLSearchParams(window.location.search).get("q"),
          },
        })
        .then(
          (response) => (
            (this.arrProject = response.data.data),
            (this.nPage = response.data.last_page)
          )
        );
    },

    filterProjectTypes() {
      axios
        .get(this.store.baseUrl + "api/types")
        .then((response) => (this.arrTypes = response.data.data));
    },

    changePages(page) {
      this.page = page;
      this.getProject();
    },
  },

  created() {
    this.getProject();
    this.filterProjectTypes();
  },

  watch: {
    page() {
      this.getProject();
    },
  },
};
</script>

<template>
  <form class="typeOptions">
    <label for="selecttag"> Projects filter</label>
    <select
      class="form-select"
      aria-label="Default select example"
      id="selecttag"
    >
      <option
        v-for="types in arrTypes"
        :key="types.project_type"
        :value="types.project_type"
      >
        {{ types.project_type }}
      </option>
    </select>
  </form>

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

<style lang="scss" scoped>
ul {
  list-style: none;
}

.typeOptions {
  margin-bottom: 0.6rem;
}
</style>
