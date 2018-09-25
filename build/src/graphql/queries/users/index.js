'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _all = require('./all');

var _all2 = _interopRequireDefault(_all);

var _single = require('./single');

var _single2 = _interopRequireDefault(_single);

var _me = require('./me');

var _me2 = _interopRequireDefault(_me);

var _singleMail = require('./singleMail');

var _singleMail2 = _interopRequireDefault(_singleMail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    allUsers: _all2.default,
    singleUser: _single2.default,
    me: _me2.default,
    singleUserMail: _singleMail2.default

};