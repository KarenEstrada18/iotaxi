import{
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLObjectType,
    GraphQLFloat,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLNonNull
} from 'graphql'

export const RecordType = new GraphQLObjectType({
    name:"ListRecors",
    description:"Historial de los taxis de la BD",
    fields:()=>({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        contKm:{
            type:GraphQLString
        },
        contTravel:{
            type:GraphQLString
        },
        contEfectivo:{
            type:GraphQLString
        },
        contTime:{
            type:GraphQLString
        },
        velocidadMaxima:{
            type:GraphQLString
        },
        initTravel:{
            type:GraphQLList(GraphQLString)
        },
        date:{
            type:GraphQLString
        }
    })
});

export const RecordInputType = new GraphQLInputObjectType({
    
    name:"addRecord",
    description:"Agrega o modifica Records en la bd",
    fields:() => ({
        contKm:{
            type:GraphQLString
        },
        contTravel:{
            type:GraphQLString
        },
        contEfectivo:{
            type:GraphQLString
        },
        contTime:{
            type:GraphQLString
        },
        velocidadMaxima:{
            type:GraphQLString
        },
        initTravel:{
            type:GraphQLString
        }
    })
});