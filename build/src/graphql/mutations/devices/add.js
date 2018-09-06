'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _devices = require('../../../models/devices');

var _devices2 = _interopRequireDefault(_devices);

var _devices3 = require('../../types/devices');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _devices3.DeviceType,
    args: {
        data: {
            type: new _graphql.GraphQLNonNull(_devices3.DeviceInputType)
        }
    },
    resolve: function resolve(root, params) {
        var device = new _devices2.default(params.data);
        var newDevice = device.save();
        if (!newDevice) throw new Error("Error al crear un dispositivo");
        return newDevice;
    }
};