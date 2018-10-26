"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RecordInputType = exports.RecordType = undefined;

var _graphql = require("graphql");

var RecordType = exports.RecordType = new _graphql.GraphQLObjectType({
    name: "ListRecors",
    description: "Historial de los taxis de la BD",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            contKm: {
                type: _graphql.GraphQLString
            },
            contTravel: {
                type: _graphql.GraphQLString
            },
            contEfectivo: {
                type: _graphql.GraphQLString
            },
            contTime: {
                type: _graphql.GraphQLString
            },
            velocidadMaxima: {
                type: _graphql.GraphQLString
            },
            initTravel: {
                type: (0, _graphql.GraphQLList)(_graphql.GraphQLString)
            },
            date: {
                type: _graphql.GraphQLString
            }
        };
    }
});

var RecordInputType = exports.RecordInputType = new _graphql.GraphQLInputObjectType({

    name: "addRecord",
    description: "Agrega o modifica Records en la bd",
    fields: function fields() {
        return {
            contKm: {
                type: _graphql.GraphQLString
            },
            contTravel: {
                type: _graphql.GraphQLString
            },
            contEfectivo: {
                type: _graphql.GraphQLString
            },
            contTime: {
                type: _graphql.GraphQLString
            },
            velocidadMaxima: {
                type: _graphql.GraphQLString
            },
            initTravel: {
                type: _graphql.GraphQLString
            }
        };
    }
});