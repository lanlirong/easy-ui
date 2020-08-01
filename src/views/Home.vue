<template>
  <div class="home">
    <e-button>按钮</e-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import Vue from "vue";

import eButton from "@/components/button.vue";
// import ButtonGroup from "@/components/button-group.vue";
// Vue.component('e-button', Button)
// Vue.component('e-icon', Icon)
// Vue.component('e-button-group', ButtonGroup)

// import  Button from  './components/button'
// import  Icon from  './components/icon'
// import ButtonGroup from './components/button-group'
export default {
  name: "Home",
  components: {
    eButton
  }
};
</script>
