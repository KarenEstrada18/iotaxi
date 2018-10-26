"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var RecordSchema = new Schema({
    "contKm": {
        type: String
    },
    "contTravel": {
        type: String
    },
    "contEfectivo": {
        type: String
    },
    "contTime": {
        type: String
    },
    "velocidadMaxima": {
        type: String
    },
    "initTravel": [{
        type: String
    }],
    "date": {
        type: Date,
        default: new Date()
    }

}, { collection: "Records", timestamps: true });

exports.default = _mongoose2.default.model('Records', RecordSchema);