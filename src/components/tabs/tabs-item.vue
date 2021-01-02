<template>
  <div class="tabs-item" @click="selectItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "eTabsItem",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {};
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", name => {
      console.log(name);
    });
  },
  methods: {
    selectItem() {
      this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>
