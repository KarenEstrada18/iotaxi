import mongoose from 'mongoose';

const Schema = mongoose.Schema

const DeviceSchema = new Schema({
    "sigfox":{
        type:String,
        required:true,
        unique:true
    },
    "concesion":{
        type:String,
        required:true,
        unique:true
    },
    "name":{
        type:String,
        required:true
    },
    "marcaVehicle":{
        type:String
    },
    "modeloVehicle":{
        type:String
    },
    "anioVehicle":{
        type:String
    },
    "placaVehicle":{
        type:String
    },
    "image_url_fvehicle":{
        type:String
    },
    "image_url_lvehicle":{
        type:String
    },
    "image_url_rvehicle":{
        type:String
    },
    "image_url_bvehicle":{
        type:String
    },
    "image_url_conductor":{
        type:String
    },
    "conductorName":{
        type:String
    },
    "conductorLastname":{
        type:String
    },
    "conductorAddress":{
        type:String
    },
    "conductorDistrict":{
        type:String
    },
    "conductorNumExt":{
        type:String
    },
    "conductorNumInt":{
        type:String
    },
    "conductorTel":{
        type:String
    },
    "conductorCC":{
        type:String,
        default:" "
    },
    "conductorCity":{
        type:String,
        default:" "
    },
    "conductorCountry":{
        type:String,
        default:" "
    },
    "velocidadMaxima":{
        type:String,
        default:0
    },
    "initTravel":[{
        type:String,
        default:[]
    }],
    "lastLocation":{
        type:String
    },
    "contTravel":{
        type:Number,
        default:0
    },
    "contTime":{
        type:Number,
        default:0
    },
    "contKm":{
        type:Number,
        default:0
    },
    "contEfectivo":{
        type:Number,
        default:0
    },
    "user":{
        type:String
    },
    "records":[{
        type:Schema.Types.ObjectId,
        ref:"Records"
    }],
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

