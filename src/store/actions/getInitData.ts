import { ActionContext } from 'vuex';
import axios from 'axios';
import { State } from '../state';
import {UPDATE_IDS, UPDATA_LIST} from '../mutation-types';

export function getInitData ({commit}: ActionContext<State, State>): void {
    fetch('/api/getinitdata')
        .then(res  => res.json())
        .then(initRes => {
            if (initRes.errno === 0) {
                const initData = initRes.data; 
                commit(UPDATE_IDS, initData.ids);
                commit(UPDATA_LIST, initData.top20News);
            }
        }).catch(err => {
            console.log(err);
        });
}