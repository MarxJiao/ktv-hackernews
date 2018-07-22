import {ActionContext} from 'vuex';
import axios from 'axios';
import {State} from '../state';
import {UPDATA_PAGE, UPDATA_LIST} from '../mutation-types';

export function getStories({commit, state}: ActionContext<State, State>, page): void {
    if (page < state.ids.length - 1) {
        axios.get('/api/getstories', {
            params: {
                ids: state.ids[page]
            }
        }).then(res => {
            commit(UPDATA_LIST, res.data);
            commit(UPDATA_PAGE, page);
        });
    }
}
