import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import DisplayShow from "../views/DisplayShow.vue";
import SearchResults from "../views/SearchResults.vue";
import About from "../views/About";
import Shows from "../views/Shows";

Vue.use(VueRouter);

const routes = [
  {
    path: "/shows/:id",
    name: "Shows",
    component: Shows
  },
  {
    path: "*",
    redirectTo: "/"
  },

  {
    path: "/",
    name: "Dashboard",

    component: Dashboard
  },

  {
    path: "/display/:id",
    name: "DisplayShow",
    component: DisplayShow
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/search",
    name: "SearchResults",
    component: SearchResults
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
