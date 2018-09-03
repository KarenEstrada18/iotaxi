import mongoose from 'mongoose';

const Schema = mongoose.Schema

const DeviceSchema = new Schema({
    "_id":{
        type:String,
        required:true
    },
    "name":{
        type:String,
        required:true
    },
    "lastLocation":{
        type:String
    },
    "contTravel":{
        type:Number
    },
    "contTime":{
        type:Number
    },
    "contKm":{
        type:Number
    },
    "contEfectivo":{
        type:Number
    },
    "vehicle":{
        type:Schema.Types.ObjectId,
        ref:"Vehicles"
    },
    "create_at":{
        type:Date,
        default: new Date()
    },
    "update_at":{
        type:Date,
        default: new Date()
    }
},{collection:"Devices", timestamps:true});

export default mongoose.model('Devices',DeviceSchema)

