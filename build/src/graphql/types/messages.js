"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageInputType = exports.MessageType = undefined;

var _graphql = require("graphql");

var MessageType = exports.MessageType = new _graphql.GraphQLObjectType({
    name: "ListMessage",
    description: "Mensajes de la BD",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            device: {
                type: _graphql.GraphQLString
            },
            timestamp: {
                type: _graphql.GraphQLString
            },
            data: {
                type: _graphql.GraphQLString
            },
            time: {
                type: _graphql.GraphQLString
            },
            creae_at: {
                type: _graphql.GraphQLString
            }
        };
    }
});

var MessageInputType = exports.MessageInputType = new _graphql.GraphQLInputObjectType({
    name: "AddMessage",
    description: "Agrega un nuevo mensage a la bd",
    fields: function fields() {
        return {
            device: {
                type: _graphql.GraphQLString
            },
            timestamp: {
                type: _graphql.GraphQLString
            },
            data: {
                type: _graphql.GraphQLString
            },
            time: {
                type: _graphql.GraphQLString
            }
        };
    }
});