import {GraphQLNonNull,GraphQLID,GraphQLString} from 'graphql'
import Device from '../../../models/devices';
import {DeviceType} from '../../types/devices';

const querySingledeviceConsecion = {
    
    type:DeviceType,
    args:{
        concesion:{
            name:'Concesion',
            type:GraphQLString
        }
    },
    resolve(root,params){
        const device = Device.findOne({concesion:params.concesion}).exec()
        return device 
    }
}
export default querySingledeviceConsecion;