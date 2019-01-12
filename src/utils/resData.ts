/**
 * @file return json data form response
 * @author Marx
 */

import {errorMap} from './errorMap';

interface ResponseData {
    errno: number;
    errmsg: string;
    data?: Object;
}

export function getSuccessData(data: Object): ResponseData {
    return {
        errno: 0,
        errmsg: 'success',
        data: data
    }
}

export function getErrorData(errno: number, errmsg?: string): ResponseData {
    return {
        errno,
        errmsg: errmsg || errorMap[errno]
    }
}
