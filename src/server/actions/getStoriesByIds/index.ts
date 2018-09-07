/**
 * @file 根据 id 数组获取全部 story 信息
 * @author Marx
 */

import {getItemById} from '../getItemById';

export function getStoriesByIds(ids: number[]): Promise<Object[]> {
    return Promise.all(ids.map(async id => await getItemById(id)));
}
