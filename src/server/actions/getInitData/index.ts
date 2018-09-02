/**
 * @file 获取页面初始化数据
 * @author Marx
 */

import {chunk} from 'lodash';
import {getTopStoryIds} from '../getTopStoryIds';
import {getItemById} from '../getItemById';

export function getInitData(): Promise<Object> {
    const initData = {
        ids: [],
        top20News: []
    };
    return getTopStoryIds(300).then(ids => {
        initData.ids = chunk(ids, 20);
        return Promise.all(ids.filter((id, index) => index < 20)
            .map(async id => {
                return await getItemById(id);
            })
        );
    })
    .then(news => {
        initData.top20News = news;
        return initData;
    });
}
