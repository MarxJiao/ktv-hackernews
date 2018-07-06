/**
 * @file 获取单个新闻数据
 * @author Marx
 */

import api from '../../models/api';
import data from '../../models/data';

/**
 * 通过新闻 id 获取新闻信息
 *
 * @param id news id
 */
export default function (id: number) {
    return new Promise((resolve, reject) => {
        if (data[id]) {
            resolve(data[id]);
        }
        else {
            api.child('item/' + id).once('value', snapshot => {
                const story = data[id] = snapshot.val();
                resolve(story);
            }, reject);
        }
    });
}
