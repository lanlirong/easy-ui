<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name: "eTabsHead",
  data() {
    return {};
  },
  inject: ["eventBus"],
  created() {}
};
</script>
