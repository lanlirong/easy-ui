import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// import Button from "@/components/button.vue";
// import Icon from "@/components/icon.vue";
// import ButtonGroup from "@/components/button-group.vue";
// Vue.component('e-button', Button)
// Vue.component('e-icon', Icon)
// Vue.component('e-button-group', ButtonGroup)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
