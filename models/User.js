/**
 * Created by huaha on 2017/6/29.
 */
var mongoose = require('mongoose');
var usersSchema = require('../schemas/users');
module.exports = mongoose.model('User',usersSchema);