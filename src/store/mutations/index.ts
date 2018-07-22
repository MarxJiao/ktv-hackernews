import {
    UPDATE_IDS,
    UPDATA_LIST,
    UPDATA_PAGE
} from '../mutation-types';
export const mutations = {
    [UPDATE_IDS](state, ids) {
        state.ids = ids;
    },
    [UPDATA_LIST](state, list) {
        console.log(list);
        state.newsList.push(...list);
        console.log(state.newsList);
    },
    [UPDATA_PAGE](state, page) {
        state.page = page;
    }
}