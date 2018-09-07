import {ActionContext} from 'vuex';
import axios from 'axios';
import {State} from '../state';
import {UPDATA_PAGE, UPDATA_LIST} from '../mutation-types';

export function getStories({commit, state}: ActionContext<State, State>, page): void {
    if (page < state.ids.length - 1) {
        fetch('/api/getstories', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ids: state.ids[page]
            })
        }).then(res => {
            return res.json();
            
        }).then(jsonData => {
            console.log(jsonData);
            commit(UPDATA_LIST, jsonData);
            commit(UPDATA_PAGE, page);
        }).catch(err => {
            console.log(err);
        });
    }
}
