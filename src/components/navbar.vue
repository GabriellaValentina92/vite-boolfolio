<script>
export default {
  data() {
    return {
      searchString: "",
    };
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">MyDevProjects</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              :to="{ name: 'home' }"
              class="nav-link active"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'projects.index' }" class="nav-link"
              >project List</router-link
            >
          </li>

          <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="nav-link"
              >about</router-link
            >
          </li>
        </ul>
        <form
          class="d-flex"
          role="search"
          @submit.prevent="
            $router.push({ name: 'projects.index', query: { q: searchString } })
          "
        >
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            name="q"
            v-model="searchString"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style></style>
