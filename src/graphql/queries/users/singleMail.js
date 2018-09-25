 import {GraphQLNonNull, GraphQLString} from 'graphql';
 import User from '../../../models/users';
 import {UserType} from '../../types/users';

 const querySingleUserM = {
     type:UserType,
     args:{
        email:{
            name:'email',
            type:GraphQLNonNull(GraphQLString)
        }
     },
     resolve(root,params){
         const user = User.findOne({email:params.email}).exec()
         return user
     }
}
export default querySingleUserM;