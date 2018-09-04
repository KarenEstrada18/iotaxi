"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var DeviceSchema = new Schema({
    "_id": {
        type: String,
        required: true
    },
    "name": {
        type: String,
        required: true
    },
    "lastLocation": {
        type: String
    },
    "contTravel": {
        type: Number,
        default: 0
    },
    "contTime": {
        type: Number,
        default: 0
    },
    "contKm": {
        type: Number,
        default: 0
    },
    "contEfectivo": {
        type: Number,
        default: 0
    },
    "vehicle": {
        type: Schema.Types.ObjectId,
        ref: "Vehicles"
    },
    "create_at": {
        type: Date,
        default: new Date()
    },
    "update_at": {
        type: Date,
        default: new Date()
    }
}, { collection: "Devices", timestamps: true });

exports.default = _mongoose2.default.model('Devices', DeviceSchema);