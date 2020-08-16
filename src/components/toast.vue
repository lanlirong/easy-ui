<template>
    <div class="e-toast" ref="toast" :class="toastClass">
       <div class="message">
           <slot v-if="!enableHtml"></slot>
           <div v-else v-html="$slots.default[0]"></div>
       </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="handleClose">{{closeButton.text}}</span>
    </div>
</template>

<script>
    export default {
        name: 'eToast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 50
            },
            closeButton: {
                type: Object,
                default: () => {
                    return {text: '关闭',callback: undefined}
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >=0
                }
            }
        },
        data() {
            return {
            }
        },
        computed: {
            toastClass() {
                return {
                    [`toast-position-${this.position}`]: true}
            }

        },
        mounted() {
            if (this.autoClose) {
                setTimeout(()=>{
                    this.close()
                }, this.autoCloseDelay*1000)

            }
            this.$nextTick(()=>{
                this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
            })
        },
        methods: {
            close() {
                this.$el.remove()
                this.$destroy()
            },
            handleClose() {
                this.close()
               if (this.closeButton&& typeof this.closeButton.callback === 'function') {
                   this.closeButton.callback()
               }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0,0,0,0.7);
    .e-toast {
        position: fixed;
        left: 50%;
        min-height: $toast-min-height;
        font-size: $font-size;
        color: #fff;
        line-height: 1.8;
        display: flex;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,.5);

        padding: 0 16px;
        & .message {
            padding: 4px 0;
        }
        & .line{
            height: 100%;
            border-left: 1px solid #fff;
            margin: 0 10px
        }
        & .close {
            cursor: pointer;
            flex-shrink: 0;
        }
    }
    .toast-position-top{
        top: 5%;
        transform: translate(-50%);

    }
    .toast-position-bottom{
        top: 90%;
        transform: translate(-50%);

    }
    .toast-position-middle{
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>