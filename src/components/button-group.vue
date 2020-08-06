<template>
   <div class="e-button-group">
       <slot></slot>
   </div>
</template>

<script>
    export  default {
        mounted() {
            // console.log(this.$el.children)
            for (let node of this.$el.children) {
                // console.log(node)
                if(node.nodeName.toLowerCase() !== 'button') {
                    console.warn(`e-button-group的子元素应该全是button,但是你写的是${node.nodeName.toLowerCase()}`)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.e-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .e-button {
        border-radius: 0;
        &:not(:first-child) {
            margin-left: -1px;
        }
        &:first-child{
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
        }
        &:last-child{
           border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }
        &:hover {
            position: relative;
            z-index: 1;
        }
    }
}
</style>
