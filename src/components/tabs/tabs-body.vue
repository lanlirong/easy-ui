<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "eTabsBody",
  data() {
    return {};
  },
  inject: ["eventBus"]
};
</script>
