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
        id: {
            name: "ID",
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var deleteDevice = _devices2.default.findByIdAndRemove(params.id).exec();
        if (!deleteDevice) throw new Error("Error al borrar dispositivo");
        return deleteDevice;
    }
};