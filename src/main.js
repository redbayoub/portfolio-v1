import Vue from "vue";
import App from "./App.vue";
import VueMeta from "vue-meta";
import i18n from "./i18n";
import router from "./router";


Vue.config.productionTip = false;

Vue.use(VueMeta);


new Vue({
  i18n,
  router,

  render: function(h) {
    return h(App);
  }
}).$mount("#app");
