import {
    UPDATE_IDS,
    UPDATA_LIST
} from '../mutation-types';
export const mutations = {
    [UPDATE_IDS](state, ids) {
        state.ids = ids;
    },
    [UPDATA_LIST](state, list) {
        state.newsList = list
    }
}