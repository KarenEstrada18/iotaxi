import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLList
} from 'graphql';
import {DeviceType} from './devices';
import Device from '../../models/devices';

export const UserType = new GraphQLObjectType({
    name:"ListUsers",
    description:"Usuarios de la BD",
    fields: () => ({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        name:{
            type:GraphQLString
        },
        lastname:{
            type:GraphQLString
        },
        email:{
            type:GraphQLString
        },
        street:{
            type:GraphQLString,
        },
        district:{
            type:GraphQLString
        },
        numExt:{
            type:GraphQLString
        },
        numInt:{
            type:GraphQLString
        },
        city:{
            type:GraphQLString
        },
        country:{
            type:GraphQLString
        },
        cc:{
            type:GraphQLString
        },
        telefono:{
            type:GraphQLString
        },
        devices:{
            type:GraphQLList(DeviceType), 
            resolve(user){
                const {device} = user
                return Device.findById(device).exec()
            }
        },
        is_admin:{
            type:GraphQLBoolean
        },
        is_active:{
            type:GraphQLBoolean
        },
        create_at:{
            type:GraphQLString
        },
        client_id:{
            type:GraphQLString
        }

    })
});

export const UserInputType = new GraphQLInputObjectType({
    name:"addUser",
    description:"agregar o modificar usuarios en la BD",
    fields:() => ({
        name:{
            type:GraphQLString
        },
        lastname:{
            type:GraphQLString
        },
        email:{
            type:GraphQLString
        },password:{
            type:GraphQLString
        },
        street:{
            type:GraphQLString,
        },
        district:{
            type:GraphQLString
        },
        numExt:{
            type:GraphQLString
        },
        numInt:{
            type:GraphQLString
        },
        city:{
            type:GraphQLString
        },
        country:{
            type:GraphQLString
        },
        cc:{
            type:GraphQLString
        },
        telefono:{
            type:GraphQLString
        },
        devices:{
            type:GraphQLString
        },
        is_admin:{
            type:GraphQLBoolean
        }
    })
})