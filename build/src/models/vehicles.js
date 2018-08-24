'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var VehicleSchema = new Schema({
    'concesion': {
        type: String,
        required: true
    },
    "consuctor": {
        type: String,
        required: true
    },
    "create_at": {
        type: Date,
        default: new Date()
    },
    "update_at": {
        type: Date,
        default: new Date()
    }
}, { collection: "Vehicle", timestamp: true });

exports.default = _mongoose2.default.model('Vehicle', VehicleSchema);