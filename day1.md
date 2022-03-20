1:vue-cli初始化项目
node+webpack+淘宝镜像

node_modules文件夹：项目依赖文件夹
 public文件夹：一般放置一些静态资源（图片），需要注意，放在public文件夹中的静态资源，webpack进行打包的时候会原封不动的打包到dist文件夹中

 src文件夹（程序员源代码文件夹）
  assets文件夹：一般也是放置静态资源（一般放置多个组件共用的静态资源），需要注意，放置在assets文件夹里面的静态资源，在webpack大博爱的时候，webpack会把静态资源当做是一个模块，打包在js文件里面

  components：文件夹，一般放置非路由组件的

  App.vue唯一的根组件，Vue当中的组件(.vue)
  main.js：程序的入口文件，程序最先执行的文件

babel.config.js:配置文件（babel相关）
package.json：认为是项目的身份证，记录项目叫什么、版本以及依赖等
package.lock.json:缓存性文件

README.md:说明性的文件

2：项目其他的配置
2.1项目运行起来的时候，让浏览器自动打开
package.json
** "scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },**

  2.2:eslint校验功能关闭
        //关闭eslint校验工具
    lintOnSave:false

2.3:src文件夹简写方法，配置别名叫：@
配置jsconfig.json文件，并在里面配置一下代码
{
    "compilerOptions": {
        "baseUrl":"./",
        "paths":{
            "@/*":[
                "src/*"
            ]
        }
    },
    "exclude": [
        "node_modules",
        "dist"
    ]
}



3.项目路由分析
vue-router
前端所谓路由：kv键值对
key：URL（地址栏中的路由）
value：相应的路由组件
注意：项目上中下结构

路由组件：
Home首页路由组件，Search路由组件、Login登录路由、Refister注册路由
非路由组件：
Header(在首页、搜索页)、
Footer(在首页、搜索页，在登陆|注册页面是没有显示的)

4.完成非路由组件Header与footer业务
在咱们项目开发过程中，不在以HTML+css为主，主要搞业务、逻辑
在项目开发的时候：
1：书写静态页面（Html+css）
2.拆分组件
3.获取服务器的数据动态展示
4.完成响应的动态业务逻辑

注意1：创建组件的时候，组件结构+组件的样式+图片资源
注意2：咱们项目采用的less样式，浏览器不识别less样式，需要通过less、less-loader进行处理less，把less
注意3：如果想让组件识别less样式，需要在style标签的上加上lang=less

4.1：使用组件的步骤（非路由组件）
-创建或者定义
-引入
-注册
-使用

5)路由组件的搭建
在上面分析的时候，路由组件应该有四个：Home、Search、Login、Register
-components文件：经常放置的非路由组件（共用全局组件）
-page|views文件夹：经常放置路由组件
5.1配置路由
项目中配置的路由一般放置在router文件夹中

5.2总结
路由组件与非路由组件的区别
1：路由组件一般放置在pages|views文件夹，非路由组件一般放置在components文件夹中
2：路有组件一般需要在router文件夹中进行注册（使用的即为组件的名字），非路由组件在使用的时候，一般都是标签的形式使用
3：注册完路由，不管路由组件、还是 非路由组件身上都有$route、$router
$route:一般获取路由信息【路径、query、params等等】
$router:一般进行编程式导航进行路由跳转【push|replace】

5.3:路由的跳转有两种形式：
声明式导航router-link，可以进行路由的跳转
编程式导航push|replace，可以进行路由跳转
编程式导航：声明式导航能做的，编程式导航都能用
但是编程式导航除了可以进行路由的跳转，还可以做一些其他的业务逻辑


6)Footer组件显示与隐藏
显示或者隐藏组件：v-if|v-show
Footer组件：在home、search组件中需要显示，在login和register需要隐藏

6.1：我们可以根据组件神啊红的$route获取当前路由的信息，通过路由路径判断Footer的显示与隐藏
6.2配置的路由的时候，可以给路由添加元信息【meta】，路由需要配置对象，它的key不可以瞎写、胡写、乱写

8):路由跳转的几种方法
比如：A到B
声明式导航：router-link（务必要有to属性），可以实现路由的跳转
编程式导航：利用的是组件实例的$route.push|replace方法，可以实现路由的跳转。（可以书写一些自己业务）

8.2：路由传参，参数有几种写法？
params参数：属于路径当中的一部分，需要注意，在配置路由的时候，需要占位
query参数：不属于路径当中的一部分，类似于AJAX中的queryString   、home?k=v&kv=,不需要占位

9）路由传参相关的面试题
1：路由传递参数（对象写法）path是否可以结合params参数一起使用
    //面试题1：路由传递参数（对象写法）path是否可以结合params参数一起使用？
    //答：路由传参的时候，对象的写法可以是name、path形式，但是需要注意的是，path这种写法不能与params参数一起使用
2：如何指定params参数可传不可传？
比如：配置路由的时候，已经占位了（params参数），但是路由跳转的时候就不传递
3：params参数可以传递也可以不传递，但是如果传递是空串，如何解决？
4：路由组件能不能传递props数据？


