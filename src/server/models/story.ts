/**
 * @file story 数据操作
 * @author Marx
 */

import {Story} from '../db-models/Story';
let a = true;
let b = true;

/**
 * 
 * @param story 
 */
export function catheStory(story) {
    const storyData = new Story(story);
    if (a) {
        console.log(story);
        a = false;
    }
    return storyData.save();
}

export function getStoryById(id) {
    const storyData = Story.find({id});
    if (b) {
        console.log(storyData.exec());
        b = false;
    }
    return storyData.exec();
}
