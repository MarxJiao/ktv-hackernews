/**
 * @file story 数据
 * @author Marx
 */

import Mongoose from './connect';

const Schema = Mongoose.Schema;

const StorySchema = new Schema({
    id: {type: Number, index: true, unique: true},
    deleted: {type: Boolean},
    type: {type: String},
    by: {type: String},
    time: {type: Date},
    text: {type: String},
    dead: {type: Boolean},
    parent: {type: Number},
    poll: {type: Number},
    kids: {type: [Number]},
    url: {type: String},
    score: {type: Number},
    title: {type: String},
    parts: {type: [Number]},
    descendants: {type: Number}
}, {
    collection: 'story',
    timestamps: {createdAt: 'c_time', updatedAt: 'u_time'},
    toJSON: {virtuals: true}
});

export const Story = Mongoose.model('story', StorySchema);
