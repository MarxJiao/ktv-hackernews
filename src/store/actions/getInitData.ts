import { ActionContext } from 'vuex';
import axios from 'axios';
import { State } from '../state';
import {UPDATE_IDS, UPDATA_LIST} from '../mutation-types';

export function getInitData ({commit}: ActionContext<State, State>): void {
    axios.get('/api/getinitdata').then(res => {
        commit(UPDATE_IDS, res.data.ids);
        commit(UPDATA_LIST, res.data.top20News);
    });
}