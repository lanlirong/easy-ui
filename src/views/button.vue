<template>
  <div class="wrapper">
    <h2><span>Button 按钮</span></h2>
    <h3>基本用法</h3>
    <e-button>
      按钮
    </e-button>
    <e-button icon="settings">
      设置
    </e-button>
    <e-button icon="settings" icon-position="right">
      设置
    </e-button>
    <e-button
      :loading="loading1"
      icon-position="left"
      @click="loading1 = !loading1"
    >
      加载中
    </e-button>
    <p class="code">代码示例</p>
    <codemirror :code="baseButtonCode"></codemirror>
    <!--按钮组-->
    <h3>按钮组</h3>
    <e-button-group>
      <e-button icon="left">上一页</e-button>

      <e-button icon="right" icon-position="right">下一页</e-button>
    </e-button-group>
    <br />
    <br />
    <e-button-group>
      <e-button icon="left">上一页</e-button>
      <e-button>更多</e-button>
      <e-button icon="right" icon-position="right">下一页</e-button>
    </e-button-group>
    <p class="code">代码示例</p>
    <codemirror :code="buttonGroupCode"></codemirror>
    <!--属性-->
    <h3>属性</h3>
    <attrTable :attrList="buttonAttrList"></attrTable>
    <!--下一个-->
    <div class="bottom">
      <div>
        <!--<e-icon name="left"></e-icon>-->
        <!--<a>无</a>-->
      </div>
      <div>
        <a @click="toComponent('/input')">输入框</a>
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
      baseButtonCode:
        " <e-button >\n" +
        "     按钮\n" +
        " </e-button>\n" +
        ' <e-button icon="settings">\n' +
        "     设置\n" +
        " </e-button>\n" +
        ' <e-button icon="settings" icon-position="right">\n' +
        "     设置\n" +
        " </e-button>\n" +
        ' <e-button :loading="loading1" icon-position="left" @click="loading1 = !loading1">\n' +
        "     加载中\n" +
        " </e-button>",
      buttonGroupCode:
        " <e-button-group>\n" +
        '     <e-button icon="left">上一页</e-button>\n' +
        '     <e-button icon="right" icon-position="right">下一页</e-button>\n' +
        " </e-button-group>\n" +
        "\n" +
        "<br>\n" +
        "\n" +
        " <e-button-group>\n" +
        '     <e-button icon="left">上一页</e-button>\n' +
        "     <e-button>更多</e-button>\n" +
        '     <e-button icon="right" icon-position="right">下一页</e-button>\n' +
        " </e-button-group>"
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
</style>
