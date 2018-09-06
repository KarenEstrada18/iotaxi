import {
    GraphQLList
} from 'graphql';

import Device from '../../../models/devices';
import {DeviceType} from '../../types/devices';

const queryAllDevices = {

    type:new GraphQLList(DeviceType),
    resolve(){
        const devices = Device.find().exec()
        if(!devices) throw new Error  ("Error al traer de la bd")
        return devices
    }
}

export default queryAllDevices;