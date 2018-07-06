/**
 * @file 测试 getTopStories
 * @author Marx
 * @description 获取到的是一个数据，因为没给返回定义类型，暂时先用 object
 */
import getTopStories from './index';

test('topstories', async done => {
    const tops = await getTopStories(10);
    expect(typeof tops).toBe('object');
    done();
})