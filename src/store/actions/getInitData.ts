import { ActionContext } from 'vuex';
import axios from 'axios';
import { State } from '../state';
import {UPDATE_IDS, UPDATA_LIST} from '../mutation-types';

export function getInitData ({commit}: ActionContext<State, State>): void {
    fetch('/api/getinitdata')
        .then(res  => res.json())
        .then(initData => {
            commit(UPDATE_IDS, initData.ids);
            commit(UPDATA_LIST, initData.top20News);
        }).catch(err => {
            console.log(err);
        });
}