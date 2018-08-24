'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MovieInputType = exports.DeviceType = undefined;

var _graphql = require('graphql');

var _vehicles = require('./vehicles');

var _vehicles2 = require('../../models/vehicles');

var _vehicles3 = _interopRequireDefault(_vehicles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeviceType = exports.DeviceType = new _graphql.GraphQLObjectType({
    name: "ListDevices",
    description: "Dispositivos de la BD",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            name: {
                type: _graphql.GraphQLString
            },
            /*messages:{
                type:[Schema.Types.ObjectId],
                ref: "Messages"
            },
            vehicle:{
                type:VehicleType,
                resolve(device){
                    const {vehicle} = device
                    return Vehicle.findById(vehicle).exec()
                }
            },*/
            create_at: {
                type: _graphql.GraphQLString
            },
            update_at: {
                type: _graphql.GraphQLString
            }

        };
    }
});

var MovieInputType = exports.MovieInputType = new _graphql.GraphQLInputObjectType({
    name: "addDevices",
    description: "Agrega o modifica dispositivos en la bd",
    fields: function fields() {
        return {
            _id: {
                type: _graphql.GraphQLString
            },
            name: {
                type: _graphql.GraphQLString /*
                                             messages:{
                                                type:[Schema.Types.ObjectId],
                                                ref: "Messages"
                                             }*/
            } };
    }
});