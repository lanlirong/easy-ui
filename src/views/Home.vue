<template>
  <div class="home">
    <e-button @click="showToast">show toast</e-button>
    <hr />
    <e-layout style="height: 500px;border: 1px solid pink">
      <e-header class="demo">header</e-header>
      <e-content class="demo">content</e-content>
      <e-footer class="demo">footer</e-footer>
    </e-layout>

    <hr />
    <e-layout style="height: 400px;border: 1px solid pink">
      <e-header class="demo">header</e-header>
      <e-layout>
        <e-sider class="demo">sider</e-sider>
        <e-content class="demo">content</e-content>
      </e-layout>
      <e-footer class="demo">footer</e-footer>
    </e-layout>
    <hr />
    <e-layout style="height: 400px;border: 1px solid pink">
      <e-sider class="demo">sider</e-sider>

      <e-layout>
        <e-header class="demo">header</e-header>
        <e-content class="demo">content</e-content>
        <e-footer class="demo">footer</e-footer>
      </e-layout>
    </e-layout>
    <hr />
    <e-layout style="height: 400px;border: 1px solid pink">
      <e-header class="demo">header</e-header>
      <e-layout>
        <e-content class="demo">content</e-content>
        <e-sider class="demo">sider</e-sider>
      </e-layout>
      <e-footer class="demo">footer</e-footer>
    </e-layout>
    <hr />
    <e-button>
      按钮
    </e-button>
    <e-button icon="settings">
      按钮
    </e-button>
    <e-button icon="settings" icon-position="right">
      按钮
    </e-button>
    <e-button
      :loading="loading1"
      icon-position="left"
      @click="loading1 = !loading1"
    >
      按钮
    </e-button>
    <e-button-group>
      <e-button icon="left">上一页</e-button>
      <e-button>更多</e-button>
      <e-button icon="right" icon-position="right">下一页</e-button>
    </e-button-group>
    <hr />
    <e-input value="输入框" @change="inputChange()"></e-input>
    <e-input value="输入框" v-model="message"></e-input>
    <e-input value="输入框" disabled></e-input>
    <e-input value="输入框" readonly></e-input>
    <e-input value="输入框" error="姓名不能少于两个字符"></e-input>
    <hr />
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
    <hr />
    <e-row gutter="20">
      <e-col
        span="8"
        :phone="{ span: 24 }"
        :ipad="{ span: 12 }"
        :narrowPc="{ span: 8 }"
        :pc="{ span: 6 }"
        :widePc="{ span: 4 }"
        >1</e-col
      >
      <e-col
        span="8"
        :phone="{ span: 24 }"
        :ipad="{ span: 12 }"
        :narrowPc="{ span: 8 }"
        :pc="{ span: 6 }"
        :widePc="{ span: 4 }"
        >1</e-col
      >
      <e-col
        span="8"
        :phone="{ span: 24 }"
        :ipad="{ span: 12 }"
        :narrowPc="{ span: 8 }"
        :pc="{ span: 6 }"
        :widePc="{ span: 4 }"
        >1</e-col
      >
      <e-col
        span="8"
        :phone="{ span: 24 }"
        :ipad="{ span: 12 }"
        :narrowPc="{ span: 8 }"
        :pc="{ span: 6 }"
        :widePc="{ span: 4 }"
        >1</e-col
      >
      <e-col
        span="8"
        :phone="{ span: 24 }"
        :ipad="{ span: 12 }"
        :narrowPc="{ span: 8 }"
        :pc="{ span: 6 }"
        :widePc="{ span: 4 }"
        >1</e-col
      >
      <e-col
        span="8"
        :phone="{ span: 24 }"
        :ipad="{ span: 12 }"
        :narrowPc="{ span: 8 }"
        :pc="{ span: 6 }"
        :widePc="{ span: 4 }"
        >1</e-col
      >
    </e-row>
    <e-row gutter="20">
      <e-col
        span="2"
        :phone="{ span: 24 }"
        :ipad="{ span: 8 }"
        :pc="{ span: 4 }"
        >1</e-col
      >
      <e-col
        span="22"
        :phone="{ span: 24 }"
        :ipad="{ span: 16 }"
        :pc="{ span: 20 }"
        >1</e-col
      >
    </e-row>
    <e-row>
      <e-col span="2"></e-col>
      <e-col span="20" offset="2"></e-col>
    </e-row>
    <e-row align="right">
      <e-col span="2"></e-col>
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
import eLayout from "@/components/layout.vue";
import eHeader from "@/components/header.vue";
import eContent from "@/components/content.vue";
import eFooter from "@/components/footer.vue";
import eSider from "@/components/sider.vue";
export default {
  name: "Home",
  components: {
    eButton,
    eButtonGroup,
    eInput,
    eRow,
    eCol,
    eLayout,
    eHeader,
    eContent,
    eFooter,
    eSider
  },
  data() {
    return {
      loading1: false,
      message: ""
    };
  },
  created() {},
  methods: {
    inputChange(e) {
      console.log(e.target.value);
    },
    showToast() {
      this.$toast("我是提示信息", {
        position: "top",
        closeButton: {
          text: "好的",
          callback() {
            console.log("zhidao");
          }
        },
        enableHtml: true
      });
    }
  }
};
</script>

<style lang="scss" scoped>
hr {
  margin: 20px 0;
}
.demo {
  min-height: 100px;
}
.e-sider {
  background-color: #666;
  width: 200px;
}
.e-header {
  background-color: #999;
  height: 100px;
}
.e-footer {
  background-color: #ccc;
  height: 50px;
}
.e-content {
  background-color: #eee;
}
</style>
