import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    showHeader: true,
};

const getters = {
    showHeader: state => state.showHeader,
};

const mutations = {
    setShowHeader(state, isShow){
        state.showHeader = isShow;
    },
};

const actions = {
    
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
