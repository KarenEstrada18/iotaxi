'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DeviceInputType = exports.DeviceType = undefined;

var _graphql = require('graphql');

var _users = require('./users');

var _users2 = require('../../models/users');

var _users3 = _interopRequireDefault(_users2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeviceType = exports.DeviceType = new _graphql.GraphQLObjectType({
    name: "ListDevices",
    description: "Dispositivos de la BD",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            sigfox: {
                type: _graphql.GraphQLString
            },
            concesion: {
                type: _graphql.GraphQLString
            },
            name: {
                type: _graphql.GraphQLString
            },

            marcaVehicle: {
                type: _graphql.GraphQLString
            },
            modeloVehicle: {
                type: _graphql.GraphQLString
            },
            placaVehicle: {
                type: _graphql.GraphQLString
            },
            image_url_fvehicle: {
                type: _graphql.GraphQLString
            },
            image_url_lvehicle: {
                type: _graphql.GraphQLString
            },
            image_url_rvehicle: {
                type: _graphql.GraphQLString
            },
            image_url_bvehicle: {
                type: _graphql.GraphQLString
            },
            image_url_conductor: {
                type: _graphql.GraphQLString
            },
            conductorName: {
                type: _graphql.GraphQLString
            },
            conductorLastname: {
                type: _graphql.GraphQLString
            },
            conductorAddress: {
                type: _graphql.GraphQLString
            },
            conductorDistrict: {
                type: _graphql.GraphQLString
            },
            conductorNumExt: {
                type: _graphql.GraphQLString
            },
            conductorNumInt: {
                type: _graphql.GraphQLString
            },
            conductorTel: {
                type: _graphql.GraphQLString
            },

            lastLocation: {
                type: _graphql.GraphQLString
            },
            contTravel: {
                type: _graphql.GraphQLInt
            },
            contTime: {
                type: _graphql.GraphQLInt
            },
            contKm: {
                type: _graphql.GraphQLInt
            },
            contEfectivo: {
                type: _graphql.GraphQLFloat
            },
            user: {
                type: _graphql.GraphQLString
            },
            create_at: {
                type: _graphql.GraphQLString
            },
            update_at: {
                type: _graphql.GraphQLString
            }

        };
    }
});

var DeviceInputType = exports.DeviceInputType = new _graphql.GraphQLInputObjectType({

    name: "addDevices",
    description: "Agrega o modifica dispositivos en la bd",
    fields: function fields() {
        return {
            sigfox: {
                type: _graphql.GraphQLString
            },
            concesion: {
                type: _graphql.GraphQLString
            },
            name: {
                type: _graphql.GraphQLString
            },
            user: {
                type: _graphql.GraphQLString
            },

            marcaVehicle: {
                type: _graphql.GraphQLString
            },
            modeloVehicle: {
                type: _graphql.GraphQLString
            },
            placaVehicle: {
                type: _graphql.GraphQLString
            },
            image_url_fvehicle: {
                type: _graphql.GraphQLString
            },
            image_url_lvehicle: {
                type: _graphql.GraphQLString
            },
            image_url_rvehicle: {
                type: _graphql.GraphQLString
            },
            image_url_bvehicle: {
                type: _graphql.GraphQLString
            },
            image_url_conductor: {
                type: _graphql.GraphQLString
            },
            conductorName: {
                type: _graphql.GraphQLString
            },
            conductorLastname: {
                type: _graphql.GraphQLString
            },
            conductorAddress: {
                type: _graphql.GraphQLString
            },
            conductorDistrict: {
                type: _graphql.GraphQLString
            },
            conductorNumExt: {
                type: _graphql.GraphQLString
            },
            conductorNumInt: {
                type: _graphql.GraphQLString
            },
            conductorTel: {
                type: _graphql.GraphQLString
            }
        };
    }
});