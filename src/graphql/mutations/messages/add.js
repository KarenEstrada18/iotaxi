import {GraphQLNonNull} from 'graphql'
import Message from '../../../models/messages';
import {MessageInputType,MessageType} from '../../types/messages';

export default {
    type:MessageType,
    args:{
        data:{
            type:new GraphQLNonNull(MessageInputType)
        }
    },
    resolve(root,params){
        const message = new Message(params.data);
        const newMessage = message.save();
        if(!newMessage) throw new Error("Error al crear un mensage");
        return newMessage
    }
}