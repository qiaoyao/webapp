import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    showHeader: true,
    searchKeywords: '',
};

const getters = {
    showHeader: state => state.showHeader,
    searchKeywords: state => state.searchKeywords,
};

const mutations = {
    setShowHeader(state, isShow){
        state.showHeader = isShow;
    },
    setKeyword(state, keyword){
        state.searchKeywords = keyword;
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
