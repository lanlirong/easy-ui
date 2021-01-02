<template>
  <div class="wrapper">
    <h2><span>Toast 消息提示</span></h2>
    <h3>基本用法</h3>
    <e-button @click="showToast">点击show toast</e-button>
    <p class="code">代码示例</p>
    <codemirror :code="toastCode"></codemirror>

    <!--属性-->
    <h3>属性</h3>
    <attrTable :attrList="toastAttrList"></attrTable>
    <!--下一个-->
    <div class="bottom">
      <div>
        <e-icon name="left"></e-icon>
        <a @click="toComponent('/container')">栅格系统</a>
      </div>
      <div>
        <a @click="toComponent('/datapicker')">日期选择器</a>
        <e-icon name="right"></e-icon>
      </div>
    </div>
  </div>
</template>
<script>
import codemirror from "@/views/components/codemirror.vue";
import attrTable from "@/views/components/table.vue";

export default {
  components: {
    codemirror,
    attrTable
  },
  data() {
    return {
      loading1: true,
      toastAttrList: [
        {
          name: "autoClose",
          definition: "是否自动关闭",
          type: "Boolean",
          selectValue: "-",
          defaultValue: "true"
        },
        {
          name: "autoCloseDelay",
          definition: "延迟关闭的秒数",
          type: "Number",
          selectValue: "-",
          defaultValue: "4"
        },
        {
          name: "closeButton",
          definition: "关闭按钮文字及回调函数",
          type: "Object",
          selectValue: "-",
          defaultValue: "-"
        },
        {
          name: "enableHtml",
          definition: "是否允许使用html",
          type: "Boolean",
          selectValue: "-",
          defaultValue: "false"
        },
        {
          name: "position",
          definition: "出现的位置",
          type: "String",
          selectValue: "top/bottom/middle",
          defaultValue: "top"
        }
      ],
      toastCode:
        "<template>\n" +
        '  <e-button @click="showToast">点击show toast</e-button>\n' +
        "</template>" +
        "\n\n" +
        "<script>" +
        "\n " +
        "export default {" +
        "\n" +
        " methods: {\n" +
        "         showToast() {\n" +
        "             this.$toast('我是提示信息',{\n" +
        "                 position: 'top',\n" +
        "                 closeButton: {\n" +
        "                     text: '好的',\n" +
        "                     callback() {\n" +
        "                         console.log('回调函数')\n" +
        "                     }\n" +
        "                 },\n" +
        "                 enableHtml: true\n" +
        "             })\n" +
        "         }\n" +
        "      }" +
        "}" +
        "\n" +
        "< /script>"
    };
  },
  mounted() {},
  methods: {
    toComponent(path) {
      this.$router.push(path);
    },
    showToast() {
      this.$toast("我是提示信息", {
        position: "top",
        closeButton: {
          text: "好的",
          callback() {
            console.log("回调函数");
          }
        },
        enableHtml: true
      });
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
</style>
