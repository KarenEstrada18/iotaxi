import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLFloat,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLNonNull
} from 'graphql'
import {VehicleType} from './vehicles';
import Vehicle from '../../models/vehicles';

export const DeviceType = new GraphQLObjectType({
    name:"ListDevices",
    description:"Dispositivos de la BD",
    fields: () => ({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        name:{
            type:GraphQLString
        },
        lastLocation:{
            type:GraphQLString
        },
        contTravel:{
            type:GraphQLInt
        },
        contTime:{
            type:GraphQLInt
        },
        contKm:{
            type:GraphQLInt
        },
        contEfectivo:{
            type:GraphQLFloat
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
        create_at:{
            type:GraphQLString
        },
        update_at:{
            type:GraphQLString
        }
        
    })
});

export const MovieInputType = new GraphQLInputObjectType({
    name:"addDevices",
    description:"Agrega o modifica dispositivos en la bd",
    fields: () => ({
        _id:{
            type:GraphQLString
        },
        name:{
            type:GraphQLString
        }/*
        messages:{
            type:[Schema.Types.ObjectId],
            ref: "Messages"
        }*/
    })
})
