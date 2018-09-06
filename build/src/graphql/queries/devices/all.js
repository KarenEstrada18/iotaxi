'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _devices = require('../../../models/devices');

var _devices2 = _interopRequireDefault(_devices);

var _devices3 = require('../../types/devices');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllDevices = {

    type: new _graphql.GraphQLList(_devices3.DeviceType),
    resolve: function resolve() {
        var devices = _devices2.default.find().exec();
        if (!devices) throw new Error("Error al traer de la bd");
        return devices;
    }
};

exports.default = queryAllDevices;