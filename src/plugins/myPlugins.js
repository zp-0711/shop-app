import Vue from "vue";

// Vue插件一定暴露的是一个对象
let myPlugins = {
    install(Vue, options) {
        // Vue.prototype.$bud:任何组件都可以使用
        // Vue.directive()  全局自定义指令
        // Vue.component()   全局自定义最贱
        // Vue.filter(d)   自定义过滤器
        // console.log(options)
        Vue.directive(options.name, () => {

        })
    }
}
export default myPlugins;