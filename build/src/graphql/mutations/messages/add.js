'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _messages = require('../../../models/messages');

var _messages2 = _interopRequireDefault(_messages);

var _messages3 = require('../../types/messages');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _messages3.MessageType,
    args: {
        data: {
            type: new _graphql.GraphQLNonNull(_messages3.MessageInputType)
        }
    },
    resolve: function resolve(root, params) {
        var message = new _messages2.default(params.data);
        var newMessage = message.save();
        if (!newMessage) throw new Error("Error al crear un mensage");
        return newMessage;
    }
};