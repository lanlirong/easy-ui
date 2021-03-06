import Toast from './toast'
function createToast({Vue, message, options, onClose}) {
    // 动态创建组件
    let  Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData:  options

    })
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('beforeClose',onClose)
    document.body.appendChild(toast.$el)
    return toast
}
let currentToast
export default {
    install(Vue) {
        Vue.prototype.$toast = function (message, options) {
            if (currentToast) {
                currentToast.close()
            }
                currentToast=  createToast({Vue, message, options, onClose:()=>{
                    currentToast = null
                    }})

        }
    }
}