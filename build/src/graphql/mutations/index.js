'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _messages = require('./messages');

var _messages2 = _interopRequireDefault(_messages);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _devices = require('./devices');

var _devices2 = _interopRequireDefault(_devices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _messages2.default, _users2.default, _devices2.default);