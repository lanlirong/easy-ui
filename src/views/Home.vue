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
    <hr>
    <e-input value="输入框"></e-input>
    <e-input value="输入框" disabled></e-input>
    <e-input value="输入框" readonly></e-input>
    <e-input value="输入框" error="姓名不能少于两个字符"></e-input>
  </div>
</template>

<script>
// @ is an alias to /src
// import Vue from "vue";

import eButton from "@/components/button.vue";
import eButtonGroup from "@/components/button-group.vue";
import eInput from "@/components/input.vue";

// Vue.component('e-button', Button)
// Vue.component('e-icon', Icon)
export default {
  name: "Home",
  components: {
    eButton, eButtonGroup,eInput
  },
  data(){
    return {
      loading1: false
    }
  }
};
</script>

<style lang="scss">
  hr {
    margin: 20px 0;
  }
</style>
