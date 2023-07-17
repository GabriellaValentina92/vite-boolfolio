import { createRouter, createWebHistory } from "vue-router";

//importare i componenti delle pagine
import AppHome from "./pages/AppHome.vue";
import AppProject from "./pages/AppProject.vue";
import projectShow from "./pages/projectShow.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },

    {
      path: "/projects",
      name: "projects.index",
      component: AppProject,
    },

    {
      path: "/projects/show",
      name: "projects.show",
      component: projectShow,
    },
  ],
});

export { router };
