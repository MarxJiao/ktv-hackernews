/**
 * @file 获取最新的 story ids
 * @author Marx
 */

import api from '../../models/api';


/**
 * 获取 top n 的新闻 id
 *
 * @param n 需要获取的新闻数量
 */
export function getTopStoryIds (n: number): Promise<number[]> {
    return new Promise((resolve, reject) => {
        api.child('topstories').once('value', snapshot => {
            const ids = snapshot.val().filter((id, index) => index < n);
            resolve(ids);
        });
    });
}
