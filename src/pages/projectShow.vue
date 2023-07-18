<script>
import axios from "axios";
import { store } from "../store";
import { DateTime } from "luxon";
import page404 from "./page404.vue";

export default {
  components: { page404 },
  data() {
    return {
      project: null,
      store,
      DateTime,
      is404: true,
    };
  },

  created() {
    axios
      .get(this.store.baseUrl + "api/projects/" + this.$route.params.project)
      .then((response) => {
        if (response.data.success) {
          this.project = response.data.results;
        } else {
          //this.$router.push({ name: "page404" });
          this.is404 = true;
        }
      });
  },
};
</script>
<template>
  <template v-if="project">
    <h1>{{ project.title }}</h1>
    <h2 class="dateformat">
      modified: {{ this.DateTime.now().toFormat("dd-MM-yyyy") }}
    </h2>
    <img :src="project.project_image" alt="" />
    <p>{{ project.project_description }}</p>
  </template>
  <page404 v-else-if="is404" />
</template>

<style lang="scss" scoped>
.dateformat {
  font-size: 0.6rem;
}
</style>
