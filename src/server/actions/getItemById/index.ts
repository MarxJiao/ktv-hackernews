/**
 * @file 获取单个新闻数据
 * @author Marx
 */

import api from '../../models/api';

/**
 * 通过新闻 id 获取新闻信息
 *
 * @param id news id
 */
export function getItemById (id: number): Promise<Object> {
    return new Promise(async (resolve, reject) => {
        api.child('item/' + id).once('value', snapshot => {
            const story = snapshot.val();
            resolve(story);
        }, reject);
    });
}
