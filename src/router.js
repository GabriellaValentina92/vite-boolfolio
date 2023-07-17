import { createRouter, createWebHistory } from "vue-router";

//importare i componenti delle pagine
import AppHome from "./pages/AppHome.vue";
import AppProject from "./pages/AppProject.vue";

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
      name: "projects",
      component: AppProject,
    },
  ],
});

export { router };
