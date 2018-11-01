'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _devices = require('../../../models/devices');

var _devices2 = _interopRequireDefault(_devices);

var _devices3 = require('../../types/devices');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySingledeviceConsecion = {

    type: _devices3.DeviceType,
    args: {
        concesion: {
            name: 'Concesion',
            type: _graphql.GraphQLString
        }
    },
    resolve: function resolve(root, params) {
        var device = _devices2.default.findOne({ concesion: params.concesion }).exec();
        return device;
    }
};
exports.default = querySingledeviceConsecion;