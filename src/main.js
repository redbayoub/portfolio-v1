import Vue from "vue";
import App from "./App.vue";
import VueMeta from "vue-meta";
import VueGtag from "vue-gtag";
import i18n from "./i18n";
import router from "./router";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;

Vue.use(VueMeta);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: "/assets/images/404.jpg",
  loading: "/assets/images/loading.svg",
  attempt: 2
});

Vue.use(VueGtag, {
  config: { id: "UA-149020396-1" }
});


new Vue({
  i18n,
  router,

  render: function(h) {
    return h(App);
  }
}).$mount("#app");
