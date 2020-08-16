<template>
    <div class="e-layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'eLayout',
        data() {
          return {
              layoutClass: {
                  hasSider: false
              }
          }
        },
        mounted() {
            this.$children.forEach(item =>{
                if (item.$options.name === 'eSider') {
                    this.layoutClass.hasSider = true
                }
            })
        }
    }
</script>
<style lang="scss" scoped>
    .e-layout {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        &.hasSider {
            flex-direction: row;
        }
    }

</style>
