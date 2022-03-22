//当前的模块：API借口进行统一的管理
import {
    requests
} from './request'
import {
    mockrequests
} from './mockAjax';
//首页三级联动接口
//api/product/getBaseCategoryList    get 无参数

export const reqCategoryList = () => requests({
    url: '/api/product/getBaseCategoryList',
    method: 'get'
});

//发请求:axios发请求返回的结果是Promise对象 

// 获取banner数据（Home首页轮播图接口）
export const reqGetBannerList = () => mockrequests({
    url: '/mock/banner',
    method: 'get'
});
// 获取Floor数据
export const reqFloorList = () => mockrequests({
    url: '/mock/floor',
    method: 'get'
})

// 获取搜搜模块数据 地址：/api/list  请求方式：post 参数：需要带参数
// 当前的接口（获取搜索模块的数据），给服务器传递的参数至少得是一个空对象，给服务器传递一个默认的参数
export const reqGetSearchInfo = (params) => requests({
    url: '/api/list',
    method: 'post',
    data: params,
})

export const reqGoodsInfo = (skuId) =>requests({
    url: `/api/item/${skuId}`,
    method: 'get',
})