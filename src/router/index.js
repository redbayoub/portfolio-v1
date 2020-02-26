import Vue from "vue";
import VueRouter from "vue-router";
import i18n from "../i18n";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "null",
    component: null
  },
  {
    path: "/en/",
    name: "homeEn",
    component:  function() {
      return import(/* webpackChunkName: "homeEn" */ "../views/Home.vue");
    }
  },
  {
    path: "/ar/",
    name: "homeAr",
    component:  function() {
      return import(/* webpackChunkName: "homeAr" */ "../views/HomeAr.vue");
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  switch (to.path) {
    case "/": {
      let locale =
        localStorage.locale || navigator.browserLanguage || navigator.language;
      if (locale == "ar") {
        next("/ar/");
      } else {
        next("/en/");
      }
      break;
    }
    case "/en/": {
      i18n.locale = "en";
      next();
      break;
    }
    case "/ar/": {
      i18n.locale = "ar";
      next();
      break;
    }
    default:{
      next("/");
      break;
    }
  }
});

export default router;
