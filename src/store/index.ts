import Vue from 'vue';
import Vuex, {Store} from 'vuex';
import {UPDATE_IDS} from './mutation-types';
import {State} from './state';
import {actions} from './actions';
import {mutations} from './mutations';

Vue.use(Vuex);

const state = new State();

export const store = new Store({
    state,
    mutations,
    actions
})