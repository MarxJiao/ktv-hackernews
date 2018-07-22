import {chunk} from 'lodash';
import {getTopIds} from '../getTopStories';
import {getItemById} from '../getItemById';

export function getInitData(): Promise<Object> {
    const initData = {
        ids: [],
        top20News: []
    };
    return getTopIds(300).then(ids => {
        initData.ids = chunk(ids, 20);
        return Promise.all(ids.filter((id, index) => index < 20)
            .map(async id => {
                return await getItemById(id);
            })
        )
    })
    .then(news => {
        initData.top20News = news;
        console.log(initData);
        return initData;
    })
}