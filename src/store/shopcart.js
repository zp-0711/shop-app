import {
    reqCartList,
    reqDeleteCartById,
    reqUpdataCheckById
} from "@/api"
const state = {
    cartList: []
}
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
    }
}
const actions = {
    // 获取购物车列表的数据
    async getCartList({
        commit
    }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit("GETCARTLIST", result.data)
        }
        //    console.log(result)
    },
    // 删除某一个购物车产品
    async deleteCartListBySkuId({
        commit
    }, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 修改购物车状态，选中或者没有选中
    async updataCheckById({
        commit
    }, {
        skuId,
        isChecked
    }) {
        let result = await reqUpdataCheckById(skuId, isChecked);
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 删除全部勾选的产品
    async deleteAllCheckedCart({
        dispatch,
        getters
    }) {
        //    context:小仓库，commit【提交mutation修改state】 getters【计算属性】 dispatch【派发action】 state【当前仓库数据】
        let promiseAll = [];
        getters.cartList.cartInfoList.forEach(element => {
            let promise = element.isChecked == 1 ? dispatch('deleteCartListBySkuId', element.skuId) : '';
            promiseAll.push(promise);
        });
        // 只要全部的p1|p2.。。都成功，返回的结构即为成功
        // 如果有一个失败，返回即为失败的结果
        return Promise.all(promiseAll)
    },
    // 修改全部产品的状态
    updataAllCartChecked({
        dispatch,
        getters
    }, isChecked) {
        // console.log(dispatch)
        // console.log(isChecked)
        let promiseAll = [];
       getters.cartList.cartInfoList.forEach((item) => {
           let p =  dispatch('updataCheckById', {
                skuId: item.skuId,
                isChecked
            });
            promiseAll.push(p);
        });
        // 最终返回结果
        return Promise.all(promiseAll);
    }
}
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    },
    // cartInfoList(state){
    //     return state.cartList
    // }
}
export default {
    state,
    mutations,
    actions,
    getters
}