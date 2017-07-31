/**
* @Des:      下拉刷新，上拉加载组件状态
* @Date:     2017/07/29
*/

import * as types from '../mutation-types'

// initial state
const state = {
    direction: ''
}

// mutations
const mutations = {
    [types.SET_DIRECTION](state,  direction ) {
        state.direction = direction
    }
}

export default {
    state,
    mutations
}
