import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import direction from './modules/direction';

Vue.use(Vuex);

const debug = true;

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        direction
    },
    // 是否开启调试模式
    strict: true
})
