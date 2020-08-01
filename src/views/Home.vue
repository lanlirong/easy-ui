<template>
  <div class="home">
    <e-button >
      按钮
    </e-button>
    <e-button icon="settings">
      按钮
    </e-button>
    <e-button icon="settings" icon-position="right">
      按钮
    </e-button>
    <e-button :loading="loading1" icon-position="left" @click="loading1 = !loading1">
      按钮
    </e-button>
    <e-button-group>
      <e-button icon="left">上一页</e-button>
      <e-button >更多</e-button>
      <e-button icon="right" icon-position="right">下一页</e-button>
    </e-button-group>
  </div>
</template>

<script>
// @ is an alias to /src
// import Vue from "vue";

import eButton from "@/components/button.vue";
import eButtonGroup from "@/components/button-group.vue";
// Vue.component('e-button', Button)
// Vue.component('e-icon', Icon)
export default {
  name: "Home",
  components: {
    eButton, eButtonGroup
  },
  data(){
    return {
      loading1: false
    }
  }
};
</script>
