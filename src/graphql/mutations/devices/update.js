import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'
import Device from '../../../models/devices';
import {DeviceInputType,DeviceType} from '../../types/devices';

export default {
    type:DeviceType,
    args:{
        id:{
            name:"ID",
            type:new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:"data",
            type:new GraphQLNonNull(DeviceInputType)
        }
    },
    resolve(root,params){
        return Device.findByIdAndUpdate(params.id,{$set:{...params.data}}
        ).then((device)=> {
            return device
        }).catch((err)=>{
            throw new Error("Error al hacer update")
        })
    }
}