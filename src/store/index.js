import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    showHeader: true,
    showFooter: true,
};

const getters = {
    showHeader: state => state.showHeader,
    showFooter: state => state.showFooter,
};

const mutations = {
    setShowHeader(state, isShow){
        state.showHeader = isShow;
    },
    setShowFooter(state, isShow){
        state.showFooter = isShow;
    }
};

const actions = {
    
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
