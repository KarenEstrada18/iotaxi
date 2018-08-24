'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _messages = require('../../../models/messages');

var _messages2 = _interopRequireDefault(_messages);

var _messages3 = require('../../types/messages');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySingleMessage = {
    type: _messages3.MessageType,
    args: {
        id: {
            name: 'ID',
            type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var message = _messages2.default.findById(params.id).exec();
        return movie;
    }
};
exports.default = querySingleMessage;