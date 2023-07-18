import { createRouter, createWebHistory } from "vue-router";

//importare i componenti delle pagine
import AppHome from "./pages/AppHome.vue";
import AppProject from "./pages/AppProject.vue";
import projectShow from "./pages/projectShow.vue";
import AppAbout from "./pages/AppAbout.vue";
import page404 from "./pages/page404.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },

    {
      path: "/about",
      name: "about",
      component: AppAbout,
    },

    {
      path: "/projects",
      name: "projects.index",
      component: AppProject,
    },

    {
      path: "/projects/:project",
      name: "projects.show",
      component: projectShow,
    },

    {
      path: "/:pathMatch(.*)*",
      name: "page404",
      component: page404,
    },
  ],
});

export { router };
