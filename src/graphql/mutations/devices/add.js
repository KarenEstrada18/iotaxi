import {
    GraphQLNonNull
} from 'graphql'
import Device from '../../../models/devices';
import {DeviceType, DeviceInputType} from '../../types/devices';

export default {
    type:DeviceType,
    args:{
        data:{
            type:new GraphQLNonNull(DeviceInputType)
        }
    },
    resolve(root,params){
        const device = new Device(params.data);
        const newDevice = device.save();
        if(!newDevice) throw new Error("Error al crear un dispositivo");
        return newDevice
    }
}