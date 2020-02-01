import Vue from "vue";
import App from "./App.vue";
import i18n from "./i18n";
/* import "bootstrap"; */
/* import "bootstrap-v4-rtl"; */
/* 
import "bootstrap/dist/css/bootstrap.min.css"; */
/* import "bootstrap-v4-rtl";
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css"; */
import router from './router'
Vue.config.productionTip = false;

new Vue({
  i18n,
  router,

  render: function(h) {
    return h(App);
  }
}).$mount("#app");
