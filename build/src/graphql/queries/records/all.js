'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _records = require('../../../models/records');

var _records2 = _interopRequireDefault(_records);

var _records3 = require('../../types/records');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllRecords = {
    type: new _graphql.GraphQLList(_records3.RecordType),
    resolve: function resolve() {
        var records = _records2.default.find().exec();
        if (!records) throw new Error("Error al traer de la base de bsae de datos");
        return records;
    }
};

exports.default = queryAllRecords;