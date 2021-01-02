<template>
  <!--<div>-->
  <button
    class="e-button"
    :class="{ [`icon-${iconPosition}`]: true }"
    @click="$emit('click')"
  >
    <e-icon class="icon" v-if="icon && !loading" :name="icon"></e-icon>
    <e-icon class="loading icon" v-if="loading" name="loading"></e-icon>
    <span class="content"> <slot></slot></span>
  </button>
  <!--</div>-->
</template>
<script>
import eIcon from "@/components/icon.vue";

export default {
  // props: ['icon', 'iconPosition']
  components: {
    eIcon
  },
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validate: function(value) {
        return value === "left" || value === "right";
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.e-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  /*background: #41BDA4;*/
  background: var(--button-bg);
  vertical-align: middle;

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  > .icon {
    order: 1;
    margin-right: 0.3em;
  }

  > .content {
    order: 2;
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }

    > .content {
      order: 1;
    }
  }
}
.loading {
  animation: spin 1s infinite linear;
}
</style>
