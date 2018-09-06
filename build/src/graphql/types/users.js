'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserInputType = exports.UserType = undefined;

var _graphql = require('graphql');

var _devices = require('./devices');

var _devices2 = require('../../models/devices');

var _devices3 = _interopRequireDefault(_devices2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserType = exports.UserType = new _graphql.GraphQLObjectType({
    name: "ListUsers",
    description: "Usuarios de la BD",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            name: {
                type: _graphql.GraphQLString
            },
            lastname: {
                type: _graphql.GraphQLString
            },
            email: {
                type: _graphql.GraphQLString
            },
            street: {
                type: _graphql.GraphQLString
            },
            district: {
                type: _graphql.GraphQLString
            },
            numExt: {
                type: _graphql.GraphQLString
            },
            numInt: {
                type: _graphql.GraphQLString
            },
            city: {
                type: _graphql.GraphQLString
            },
            country: {
                type: _graphql.GraphQLString
            },
            cc: {
                type: _graphql.GraphQLString
            },
            telefono: {
                type: _graphql.GraphQLString
            },
            Devices: {
                type: (0, _graphql.GraphQLList)(_devices.DeviceType),
                resolve: function resolve(user) {
                    var device = user.device;

                    return _devices3.default.findById(device).exec();
                }
            },
            is_admin: {
                type: _graphql.GraphQLBoolean
            },
            is_active: {
                type: _graphql.GraphQLBoolean
            },
            create_at: {
                type: _graphql.GraphQLString
            },
            client_id: {
                type: _graphql.GraphQLString
            }

        };
    }
});

var UserInputType = exports.UserInputType = new _graphql.GraphQLInputObjectType({
    name: "addUser",
    description: "agregar o modificar usuarios en la BD",
    fields: function fields() {
        return {
            name: {
                type: _graphql.GraphQLString
            },
            lastname: {
                type: _graphql.GraphQLString
            },
            email: {
                type: _graphql.GraphQLString
            }, password: {
                type: _graphql.GraphQLString
            },
            street: {
                type: _graphql.GraphQLString
            },
            district: {
                type: _graphql.GraphQLString
            },
            numExt: {
                type: _graphql.GraphQLString
            },
            numInt: {
                type: _graphql.GraphQLString
            },
            city: {
                type: _graphql.GraphQLString
            },
            country: {
                type: _graphql.GraphQLString
            },
            cc: {
                type: _graphql.GraphQLString
            },
            telefono: {
                type: _graphql.GraphQLString
            },
            is_admin: {
                type: _graphql.GraphQLBoolean
            }
        };
    }
});