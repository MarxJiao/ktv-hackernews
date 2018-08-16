/**
 * @file 获取单个新闻数据
 * @author Marx
 */

import api from '../../models/api';
import data from '../../models/data';
import {catheStory, getStoryById} from '../../models/story';

/**
 * 通过新闻 id 获取新闻信息
 *
 * @param id news id
 */
export function getItemById (id: number): Promise<Object> {
    return new Promise(async (resolve, reject) => {
        const catchedStory = await getStoryById(id);
        if (catchedStory) {
            resolve(catchedStory);
        }
        else {
            console.log('getData from firebase')
            api.child('item/' + id).once('value', snapshot => {
                const story = data[id] = snapshot.val();
                catheStory(story);
                resolve(story);
            }, reject);
        }
    });
}
