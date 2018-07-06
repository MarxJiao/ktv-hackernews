/**
 * @file 获取最新数据
 * @author Marx
 */

import api from '../../models/api';
import getItemById from '../getItemById';

/**
 * 返回前10条新闻的具体信息
 */
export default function topstories(length: number) {
    return new Promise((resolve, reject) => {
        api.child('topstories').once('value', snapshot => {
            resolve(gettopstories(snapshot.val(), length));
        })
    })
}

/**
 * 通过新闻 id 数组获取新闻信息数组，取前10条。
 *
 * @param ids 新闻 id 的数组
 * @param length 要获取的新闻数量
 */
export function gettopstories(ids: number[], length: number) {
    return Promise.all(ids.filter((word, index) => index < length).map(id => getItemById(id)));
}
