/*
* @Desc:    事件触发
* @Date:    2017/07/29
*/

import * as types from './mutation-types'

// 设置router切换动画
export const setDirectionStatus = ({ commit, state }, direction) => {
    commit(types.SET_DIRECTION,  direction )
}

