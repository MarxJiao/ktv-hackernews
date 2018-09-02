/**
 * @file getTopStories unit
 * @author Marx
 * @description 获取到的是一个数据，因为没给返回定义类型，暂时先用 object
 */
import {getStoriesByIds} from './index';

test('get top 10 ids', async done => {
    const tops = await getStoriesByIds([
        17895161,
        17894657,
        17892911,
        17894664,
        17894764,
        17878044,
        17891826,
        17893865,
        17889249,
        17894349,
        17893417,
        17892918,
        17894684,
        17884979,
        17890261,
        17890294,
        17891483,
        17883490,
        17893594,
        17890081
    ]);
    expect(tops.length).toBe(20);
    done();
})