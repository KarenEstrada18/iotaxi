import mongoose, { Collection } from 'mongoose';

const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    'concesion':{
        type:String,
        required:true
    },
    "consuctor":{
        type:String,
        required:true
    },
    "create_at":{
        type: Date,
        default: new Date()
    },
    "update_at":{
        type:Date,
        default:new Date()
    }
},{collection:"Vehicle",timestamp:true})

export default mongoose.model('Vehicle',VehicleSchema);