/**
 * @file 获取最新数据
 * @author Marx
 */

import api from '../../models/api';
import getItemById from '../getItemById';

/**
 * 返回前 n 条新闻的具体信息
 *
 * @param n 需要获取的新闻数量
 */
export default function topstories(n: number): Promise<Object[]> {
    return getTopIds(n).then(ids => gettopstories(ids))
}

/**
 * 通过新闻 ids 数组获取新闻信息数组。
 *
 * @param ids 新闻 id 的数组
 * @param length 要获取的新闻数量
 */
function gettopstories(ids: number[]): Promise<Object[]> {
    return Promise.all(ids.map(id => getItemById(id)));
}

/**
 * 获取 top n 的新闻 id
 *
 * @param n 需要获取的新闻数量
 */
function getTopIds (n: number): Promise<number[]> {
    return new Promise((resolve, reject) => {
        api.child('topstories').once('value', snapshot => {
            const ids = snapshot.val().filter((id, index) => index < n);
            resolve(ids);
        });
    });
}