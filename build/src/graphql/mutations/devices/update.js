'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _devices = require('../../../models/devices');

var _devices2 = _interopRequireDefault(_devices);

var _devices3 = require('../../types/devices');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _devices3.DeviceType,
    args: {
        id: {
            name: "ID",
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        },
        data: {
            name: "data",
            type: new _graphql.GraphQLNonNull(_devices3.DeviceInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _devices2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }).then(function (device) {
            return device;
        }).catch(function (err) {
            throw new Error("Error al hacer update");
        });
    }
};