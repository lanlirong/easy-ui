<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "eTabsPane",
  data() {
    return {};
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", name => {
      console.log(name);
    });
  }
};
</script>
