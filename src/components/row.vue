<template>
    <div class="e-row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'eRow',
        props: {
            gutter: {
                type: [Number,String]
            },
            align: {
                type: [Number, String],
                validator(value) {
                   return ['left','right','center'].includes(value)
                }
            }

        },
        data() {
            return{}
        },
        computed: {
            rowStyle() {
               return {marginLeft: -this.gutter/2 + 'px', marginRight: -this.gutter/2+'px'}
            },
            rowClass() {
                let {align} = this
                return [align &&`e-row-${align}`]
            }

        },
        mounted() {
            this.$children.forEach(item =>{
                item.gutter = this.gutter
            })
        }
    }
</script>

<style lang="scss" scoped>
    .e-row {
        display: flex;
        flex-wrap: wrap;
        &-left{
            justify-content: flex-start;
        }
        &-center {
            justify-content: center;
        }
        &-right{
            justify-content: flex-end;
        }
    }
</style>