import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull
} from 'graphql'

export const MessageType = new GraphQLObjectType({
    name:"ListMessage",
    description:"Mensajes de la BD",
    fields: () => ({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        device:{
            type:GraphQLString
        },
        timestamp:{
            type:GraphQLString
        },
        data:{
            type:GraphQLString
        },
        time:{
            type:GraphQLString
        },
        creae_at:{
            type:GraphQLString
        }
    })
});

export const MessageInputType = new GraphQLInputObjectType({
    name:"AddMessage",
    description:"Agrega un nuevo mensage a la bd",
    fields: () => ({
        device:{
            type:GraphQLString
        },
        timestamp:{
            type:GraphQLString
        },
        data:{
            type:GraphQLString
        },
        time:{
            type:GraphQLString
        }
    })
})