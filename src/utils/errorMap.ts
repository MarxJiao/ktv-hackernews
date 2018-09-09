/**
 * @file 错误处理
 * @author Marx
 */

export const errorMap = {
    0: 'success',

    // server
    4001: 'data not found',
    5001: 'system error',
    5002: 'firebase error',

    // service worker
    40004: 'this is no more cached data'
}