<template>
    <div class="col" :style="colStyle" :class="colClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'eCol',
        props: {
            span: {
                type:  [Number, String]
            },
            offset: {
                type: [Number, String]
            }

        },
        data() {
            return{
                gutter: 0,

            }
        },
        computed:{
            colClass() {
                return [this.span&&`col-${this.span}`, this.offset&&`offset-${this.offset}`]
            },
            colStyle(){
               return {
                   paddingRight: this.gutter/2+'px',
                   paddingLeft: this.gutter/2+'px'
               }
            }
        }
    }
</script>

<style lang="scss" scoped>
.col {
    height: 100px;
    background: grey;
    width: 50%;
    border: 1px solid red;

    $class-prefix: col-;
    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
            width: ($n/24)*100%;
        }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
            margin-left: ($n/24)*100%;
        }
    }
}
</style>