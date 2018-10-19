import mongoose from 'mongoose';

const Schema = mongoose.Schema

const RecordSchema = new Schema({
    "contKm":{
        type:String
    },
    "contTravel":{
        type:String
    },
    "contEfectivo":{
        type:String
    },
    "contTime":{
        type:String
    },
    "velocidadMaxima":{
        type:String
    },
    "initTravel":[{
        type:String
    }],
    "date":{
        type: Date,
        default: new Date()
    }

},{collection:"Records",timestamps:true});

export default mongoose.model('Records',RecordSchema)