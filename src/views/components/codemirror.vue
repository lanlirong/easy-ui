<template>
  <div class="code-wrapper">
    <codemirror v-model="code" :options="cmOptions"></codemirror>
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/darcula.css";
// language js
import "codemirror/mode/javascript/javascript.js";
// theme css
import "codemirror/theme/base16-dark.css";

export default {
  props: {
    code: {
      type: String
    }
  },
  components: {
    codemirror
  },
  data() {
    return {
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: "text/javascript",
        // theme: 'base16-dark',
        theme: "darcula",
        lineNumbers: true,
        line: true,
        readOnly: true,
        smartIndent: true
        // more codemirror options, 更多 codemirror 的高级配置...
      }
    };
  },
  methods: {
    onCmReady(cm) {
      console.log("the editor is readied!", cm);
    },
    onCmFocus(cm) {
      console.log("the editor is focus!", cm);
    },
    onCmCodeChange(newCode) {
      console.log("this is new code", newCode);
      this.code = newCode;
    }
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror;
    }
  },
  mounted() {
    // console.log('this is current codemirror object', this.codemirror)
    // you can use this.codemirror to do something...
  }
};
</script>
<style lang="scss" scoped>
.CodeMirror {
  border: 1px solid #eee;
  height: auto !important;
}
</style>
