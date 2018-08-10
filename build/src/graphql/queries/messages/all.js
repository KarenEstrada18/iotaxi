'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _messages = require('../../../models/messages');

var _messages2 = _interopRequireDefault(_messages);

var _messages3 = require('../../types/messages');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryALLMessage = {
    type: new _graphql.GraphQLList(_messages3.MessageType),
    resolve: function resolve() {
        var messages = _messages2.default.find().exec();
        if (!messages) throw new Error("Error al traer de la bd");
        return messages;
    }
};

exports.default = queryALLMessage;