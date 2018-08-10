"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var MessageSchema = new Schema({
    "device": {
        type: String,
        required: true
    },
    "timestamp": {
        type: String,
        required: true
    },
    "data": {
        type: String,
        required: true
    },
    "time": {
        type: String,
        required: true
    },
    "creae_at": {
        type: Date,
        default: new Date()
    }
}, { collection: "Messages", timestamps: true });

exports.default = _mongoose2.default.model('Messages', MessageSchema);