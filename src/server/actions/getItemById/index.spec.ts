/**
 * @file 测试获取单个新闻信息
 * @author Marx
 * @description getItemById 返回 promise resolve 一个对象，目前还没给这个对象设置具体类型。
 */

import {getItemById} from './index';

test('getItemById', async done => {
     const a = await getItemById(17462089);
     expect(typeof a).toBe('object');
     done();
});
