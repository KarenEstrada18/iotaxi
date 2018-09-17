import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import Device from '../../../models/devices';
import { DeviceInputType,DeviceType} from '../../types/devices';

export default {
    type:DeviceType,
    args:{
        id:{
            name:"ID",
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteDevice = Device.findByIdAndRemove(params.id).exec()
        if(!deleteDevice) throw new Error("Error al borrar dispositivo");
        return deleteDevice;
    }
}
