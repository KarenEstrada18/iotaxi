import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql'
import queries from './queries';
import mutations from './mutations'

export default new GraphQLSchema({
    query:new GraphQLObjectType({
        name:'Query',
        fields:queries
    }),
    mutations:new GraphQLObjectType({
        name:"Mutation",
        fields:mutations
    })
})