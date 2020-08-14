<template>
  <div class="home">
    <e-button >
      关联应用
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
    <e-input value="输入框"  @change="inputChange()"></e-input>
    <e-input value="输入框"  v-model="message"></e-input>
    <e-input value="输入框" disabled></e-input>
    <e-input value="输入框" readonly></e-input>
    <e-input value="输入框" error="姓名不能少于两个字符"></e-input>
    <hr>
      <e-button style="margin-right: 8px">
        关联应用
      </e-button>
      <e-button style="margin-right: 8px">
        拓扑图
      </e-button>
      <e-button style="margin-right: 8px">
        采样异常
      </e-button>
      <e-button style="margin-right: 8px">
        应用接口
      </e-button>
    <hr>
    <e-row gutter="20">
      <e-col span="8" >1</e-col>
      <e-col span="16" >1</e-col>
    </e-row>
    <e-row>
      <e-col span="2"></e-col>
      <e-col span="20" offset="2"></e-col>
    </e-row>
    <e-row>
      <e-col span="2"></e-col>
      <e-col span="4" offset="6"></e-col>
    </e-row>
    <e-row gutter="40">
      <e-col>1</e-col>
      <e-col>2</e-col>
      <e-col>3</e-col>
    </e-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import Vue from "vue";

import eButton from "@/components/button.vue";
import eButtonGroup from "@/components/button-group.vue";
import eInput from "@/components/input.vue";
import eRow from "@/components/row.vue";
import eCol from "@/components/col.vue";
export default {
  name: "Home",
  components: {
    eButton, eButtonGroup,eInput,eRow, eCol
  },
  data(){
    return {
      loading1: false,
      message: ''
    }
  },
  methods: {
    inputChange(e) {
      console.log(e.target.value)
    }
  }
};
</script>

<style lang="scss">
  hr {
    margin: 20px 0;
  }
</style>
