1:编程式路由跳转到当前路由（参数不变），多次执行会抛出NavigationDuplicated:的警告错误？
--路由跳转有两种形式：声明式导航、编程式导航
--声明式导航没有这类问题的，因为vue-router底层已经处理好了
1.1：为什么编程式导航进行路由跳转的时候，就有这种警告错误那？
“vue-router”：“^3.5.3”：最新的cue-touter引入promise
1.2通过给push方法传递相应的成功、失败的回调函数，可以捕获到错误，可以解决
1.3通过底部的代码，可以实现解决错误，治标不治本
**this.$router.push({name:"search",
      params:{keyword:this.keyword},
      query:{k:this.keyword.toUpperCase()}},()=>{},(error)=>{})**
将来在别的组件当中push|replace,编程式导航还是有类似的错误

1.4：
this：当前组件实例（search）
this.$router属性：当前的这个属性，属性值Vuerouter类的一个实例，当在入楼文件注册路由的时候，给组件实例添加$router|$route属性
push:VueRouter类的一个实例

2:Home模块组件拆分
--先把静态页面完成
--获取服务器的数据进行展示

3：三级联动组件完成拆分
---由于三级联动在Home、search、Detail中都有出现，把三级联动注册为全局组件
好处：只需要注册一次，就可以全局使用

4:Home组件的拆分

5：POSTMAN测试接口
--经过postman工具测试，接口是没有问题的
--如果服务器返回的数据code字段200，代表服务器返回的数据成功
--整个项目，接口前缀都有api字样

6：axios二次封装
XMLHttpRequest、fetch、JQ、axios（项目常用）
6.1：为什么需要二次封装axios
请求拦截器、响应拦截器：请求拦截器，可以在发送请求之前处理一些业务、响应拦截器，当服务器数据返回之后，可以处理一些事情

6.2在项目中经常有一个API的文件夹(axios)
接口当中：路径都带有/api
beseURL:"/api"
http://xxx.xxx:8080/api

6.3:有的同学axios基础不好，可以去参考官网文档

7：接口统一管理
项目很小：完全可以在组件的生命周期函数中发请求
项目很大：axios.get('xxx')

8:nprogress进度条的使用
start:进度条开始
done：进度条结束
进度条颜色可以修改的，当然需要修改源码的样式

9：vuex状态管理库
9.1：vuex是什么？
vuex是官方提供的一个插件，状态管理库，集中式管理项目中组件的共用数据
切记，并不是全部的项目都需要Vuex，如果项目很小，完全不需要Vuex，如果项目很大，组件很多、数据很多，维护数据很费劲，Vuex
states mutations actions getters modules

9.2:Vuex的使用

9.3:Vuex实现模块化开发
如果项目过大，组件过多，接口也很多，数据也很多，可以让Vuex实现模块化开发
模拟state存储数据

{
    count:1
    search:{a:1}
    detail:{sss}
}

10:完成typeNav三级联动展示数据业务
[{
    id:1,
    name:'电子书
    child:[
        {
            id:2,name:"喜洋洋"
        }
    ]
}]

