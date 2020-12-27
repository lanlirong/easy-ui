import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// import Button from "@/components/button.vue";
// import Icon from "@/components/icon.vue";
// import ButtonGroup from "@/components/button-group.vue";
// Vue.component('e-button', Button)
// Vue.component('e-icon', Icon)
// Vue.component('e-button-group', ButtonGroup)
// 组件
import eIcon from "@/components/icon.vue";
import eButton from "@/components/button.vue";
import eButtonGroup from "@/components/button-group.vue";
import eInput from "@/components/input.vue";
import eRow from "@/components/row.vue";
import eCol from "@/components/col.vue";
import eLayout from "@/components/layout.vue";
import eHeader from "@/components/header.vue";
import eContent from "@/components/content.vue";
import eFooter from "@/components/footer.vue";
import eSider from "@/components/sider.vue";
import eTable from "@/components/table.vue";

// import etabs from "@/components/tabs/tabs.vue";
import eTabsHead from "@/components/tabs/tabs-head.vue";
import eTabsbody from "@/components/tabs/tabs-body.vue";
import etabsItem from "@/components/tabs/tabs-item.vue";
import eTabsPane from "@/components/tabs/tabs-pane.vue";

Vue.component('e-icon', eIcon)
Vue.component('e-button', eButton)
Vue.component('e-button-group', eButtonGroup)
Vue.component('e-input', eInput)
Vue.component('e-row', eRow)
Vue.component('e-col', eCol)
Vue.component('e-layout', eLayout)
Vue.component('e-header', eHeader)
Vue.component('e-content', eContent)
Vue.component('e-footer', eFooter)
Vue.component('e-sider', eSider)
Vue.component('e-table', eTable)

// Vue.component('e-tabs', etabs)
Vue.component('e-tabs-head', eTabsHead)
Vue.component('e-tabs-body', eTabsbody)
Vue.component('e-tabs-item', etabsItem)
Vue.component('e-tabs-pane', eTabsPane)


import plugin from "./components/plugin";
Vue.use(plugin)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
