/**
 * @file getTopStories unit
 * @author Marx
 * @description 获取到的是一个数据，因为没给返回定义类型，暂时先用 object
 */
import {getTopStoryIds} from './index';

test('get top 10 ids', async done => {
    const tops = await getTopStoryIds(10);
    expect(tops.length).toBe(10);
    done();
})