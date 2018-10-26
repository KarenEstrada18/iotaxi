'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _records = require('../../../models/records');

var _records2 = _interopRequireDefault(_records);

var _records3 = require('../../types/records');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySingleRecord = {
    type: _records3.RecordType,
    args: {
        id: {
            name: 'ID',
            type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var record = _records2.default.findById(params.id).exec();
        return record;
    }
};
exports.default = querySingleRecord;