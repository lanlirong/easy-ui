<template>
  <div class="wrapper">
    <h2><span>Layout 布局</span></h2>
    <h3>常见页面布局</h3>
    <e-layout class="demo">
      <e-header>header</e-header>
      <e-content>content</e-content>
      <e-footer>footer</e-footer>
    </e-layout>

    <e-layout class="demo">
      <e-header>header</e-header>
      <e-layout>
        <e-sider>sider</e-sider>
        <e-content>content</e-content>
      </e-layout>
      <e-footer>footer</e-footer>
    </e-layout>

    <e-layout class="demo">
      <e-sider>sider</e-sider>

      <e-layout>
        <e-header>header</e-header>
        <e-content>content</e-content>
        <e-footer>footer</e-footer>
      </e-layout>
    </e-layout>

    <e-layout class="demo">
      <e-header>header</e-header>
      <e-layout>
        <e-content>content</e-content>
        <e-sider>sider</e-sider>
      </e-layout>
      <e-footer>footer</e-footer>
    </e-layout>
    <p class="code">代码示例</p>
    <codemirror :code="layoutCode"></codemirror>

    <!--下一个-->
    <div class="bottom">
      <div>
        <e-icon name="left"></e-icon>
        <a @click="toComponent('/input')">输入框</a>
      </div>
      <div>
        <a @click="toComponent('/container')">栅格系统</a>
        <e-icon name="right"></e-icon>
      </div>
    </div>
  </div>
</template>
<script>
import codemirror from "@/views/components/codemirror.vue";

export default {
  components: {
    codemirror
  },
  data() {
    return {
      loading1: true,
      buttonAttrList: [
        {
          name: "icon",
          definition: "按钮的图标",
          type: "String",
          selectValue: "-",
          defaultValue: "-"
        },
        {
          name: "icon-position",
          definition: "按钮图标的位置",
          type: "String",
          selectValue: "left/right",
          defaultValue: "left"
        },
        {
          name: "loading",
          definition: "是否显示加载中",
          type: "Boolean",
          selectValue: "-",
          defaultValue: "false"
        }
      ],
      layoutCode:
        "<template>\n" +
        '    <e-layout class="demo">\n' +
        "         <e-header >header</e-header>\n" +
        "         <e-content>content</e-content>\n" +
        "         <e-footer>footer</e-footer>\n" +
        "     </e-layout>\n" +
        "\n" +
        '     <e-layout class="demo">\n' +
        "         <e-header >header</e-header>\n" +
        "         <e-layout>\n" +
        "             <e-sider>sider</e-sider>\n" +
        "             <e-content>content</e-content>\n" +
        "         </e-layout>\n" +
        "         <e-footer >footer</e-footer>\n" +
        "     </e-layout>\n" +
        "\n" +
        '     <e-layout class="demo">\n' +
        "         <e-sider >sider</e-sider>\n" +
        "\n" +
        "     <e-layout>\n" +
        "         <e-header >header</e-header>\n" +
        "         <e-content >content</e-content>\n" +
        "         <e-footer >footer</e-footer>\n" +
        "\n" +
        "         </e-layout>\n" +
        "     </e-layout>\n" +
        "\n" +
        '     <e-layout class="demo">\n' +
        "         <e-header >header</e-header>\n" +
        "         <e-layout>\n" +
        "             <e-content >content</e-content>\n" +
        "             <e-sider >sider</e-sider>\n" +
        "         </e-layout>\n" +
        "         <e-footer>footer</e-footer>\n" +
        "     </e-layout>\n" +
        "</template>" +
        "\n" +
        "\n" +
        "<style>" +
        "\n" +
        " .demo{\n" +
        "        margin: 10px;\n" +
        "    }\n" +
        "\n" +
        "    .e-sider {\n" +
        "        background-color: #d3dce6;\n" +
        "        width: 200px;\n" +
        "    }\n" +
        "\n" +
        "    .e-header {\n" +
        "        background-color: #b3c0d1;\n" +
        "        height: 50px;\n" +
        "    }\n" +
        "\n" +
        "    .e-footer {\n" +
        "        background-color: #b3c0d1;\n" +
        "        height: 50px;\n" +
        "    }\n" +
        "\n" +
        "    .e-content {\n" +
        "        background-color:  #e9eef3;\n" +
        "        height: 200px;\n" +
        "\n" +
        "    }\n" +
        "</style>"
    };
  },
  mounted() {},
  methods: {
    toComponent(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>
$themeColor: #41bd84;
$fontColor: #444;
.wrapper {
  padding: 5vh;
  height: 100%;

  h2 > span {
    display: inline-block;
    padding-bottom: 4px;
    border-bottom: 3px solid $themeColor;
  }

  h3 {
    margin: 5vh 0 2vh 0;

    &::before {
      content: "";
      width: 6px;
      height: 6px;
      display: inline-block;
      background-color: #000;
      border-radius: 3px;
      vertical-align: middle;
      margin-right: 5px;
    }
  }

  > .e-button {
    margin-right: 10px;
  }

  .code {
    padding: 10px 0;
    color: $themeColor;
    font-weight: 700;
  }

  .bottom {
    margin: 50px 0 20px 0;
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: $fontColor;
      font-size: 16px;
      line-height: 16px;

      &:hover {
        cursor: pointer;
        font-weight: 700;
      }
    }
  }
}

.demo {
  margin: 10px;
}

.e-sider {
  background-color: #d3dce6;
  width: 200px;
}

.e-header {
  background-color: #b3c0d1;
  height: 50px;
}

.e-footer {
  background-color: #b3c0d1;
  height: 50px;
}

.e-content {
  background-color: #e9eef3;
  height: 200px;
}
</style>
