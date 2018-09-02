/**
 * @file 获取初始化数据 unit test
 * @author Marx
 */

import {getInitData} from './index';

test('获取初始化数据', async done => {
    const initData = await getInitData();
    expect(initData.ids.length).toBe(15);
    expect(initData.top20News.length).toBe(20);
    done();
});
