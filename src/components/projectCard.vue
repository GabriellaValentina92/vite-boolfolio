<script>
export default {
  props: {
    objProject: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="card h-100">
    <img
      :src="objProject.project_image"
      class="card-img-top"
      alt="objProject.title"
    />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ objProject.title }}</h5>
      <p class="card-text">{{ objProject.project_description }}</p>
      <router-link
        :to="{ name: 'projects.show', params: { id: objProject.id } }"
        class="btn btn-primary mt-auto"
        >View</router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
p {
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>
