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
import {UserType} from './users';
import User from '../../models/users';

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

        marcaVehicle:{
            type:GraphQLString
        },
        modeloVehicle:{
            type:GraphQLString
        },
        placaVehicle:{
            type:GraphQLString
        },
        conductorFullName:{
            type:GraphQLString
        },
        conductorAddress:{
            type:GraphQLString
        },
        conductorDistrict:{
            type:GraphQLString
        },
        conductorNumExt:{
            type:GraphQLString
        },
        conductorNumInt:{
            type:GraphQLString
        },
        conductorTel:{
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
        user:{
            type:UserType,
            resolve(device){
                const {user} = device
                return User.findById(user).exec()
            }
        },
        create_at:{
            type:GraphQLString
        },
        update_at:{
            type:GraphQLString
        }
        
    })
});

export const DeviceInputType = new GraphQLInputObjectType({
    
    name:"addDevices",
    description:"Agrega o modifica dispositivos en la bd",
    fields: () => ({
        _id:{
            type:GraphQLString
        },
        name:{
            type:GraphQLString
        },
        user:{
            type:GraphQLString
        },

        marcaVehicle:{
            type:GraphQLString
        },
        modeloVehicle:{
            type:GraphQLString
        },
        placaVehicle:{
            type:GraphQLString
        },
        conductorFullName:{
            type:GraphQLString
        },
        conductorAddress:{
            type:GraphQLString
        },
        conductorDistrict:{
            type:GraphQLString
        },
        conductorNumExt:{
            type:GraphQLString
        },
        conductorNumInt:{
            type:GraphQLString
        },
        conductorTel:{
            type:GraphQLString
        },
    })
})
