import {GraphQLNonNull,GraphQLID,GraphQLString} from 'graphql'
import Device from '../../../models/devices';
import {DeviceType} from '../../types/devices';


const queryMydevice = {
    
    type:DeviceType,
    args:{
        id:{
            name:'ID',
            type:GraphQLString
        }
    },
    resolve(root,params){
        const device = Device.findById(params.id).exec()
        return device 
    }
}
export default queryMydevice;