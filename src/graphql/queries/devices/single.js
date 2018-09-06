import {GraphQLNonNull,GraphQLID} from 'graphql'
import Device from '../../../models/devices';
import {DeviceType} from '../../types/devices';

const querySingledevice = {
    
    type:DeviceType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const device = Device.findById(params.id).exec()
        return device 
    }
}
export default querySingledevice;