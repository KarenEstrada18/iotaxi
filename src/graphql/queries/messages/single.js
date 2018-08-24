import {GraphQLNonNull,GraphQLID} from 'graphql';
import Message from '../../../models/messages';
import {MessageType} from '../../types/messages';

const querySingleMessage = {
    type:MessageType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const message = Message.findById(params.id).exec()
        return movie
    }
}
export default querySingleMessage;