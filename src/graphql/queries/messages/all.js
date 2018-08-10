import {
    GraphQLList
} from 'graphql';

import Message from '../../../models/messages'
import {MessageType} from '../../types/messages';

const queryALLMessage = {
    type:new GraphQLList(MessageType),
    resolve(){
        const messages = Message.find().exec()
        if(!messages) throw new Error("Error al traer de la bd")
        return messages
    }
}

export default queryALLMessage;