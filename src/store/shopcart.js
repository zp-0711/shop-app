import {
    reqCartList
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
    }

}
const getters = {
    cartList(state){
        return state.cartList[0]||{}
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