/**
 * @file 连接数据库
 * @author Marx
 */

import Mongoose from 'mongoose';

Mongoose.connect('mongodb://localhost:27017/ktvdb', {
    user: 'Marx',
    pass: '23456'
});

export default Mongoose;
