// 希腊引入mockjs模块
import Mock from 'mockjs'

// 把JSON数据格式引入进来,而且像图片、JSON数据格式是属于默认对外暴露的，直接应用 
import banner from './banner.json'
import floor from './floor.json'

// mock数据:有两个参数，第一个参数请求地址，第二个参数：请求数据
Mock.mock(
    "/mock/banner",{code:200,data:banner}
)
Mock.mock(
    "/mock/floor",{code:200,data:floor}
)