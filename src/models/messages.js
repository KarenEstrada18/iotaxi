import mongoose from 'mongoose';

const Schema = mongoose.Schema

const MessageSchema = new Schema({
    "device":{
        type:String,
        required:true
    },
    "timestamp":{
        type:String,
        required:true
    },
    "data":{
        type:String,
        required:true
    },
    "time":{
        type:String,
        required:true,
    },
    "creae_at":{
        type:Date,
        default: new Date()
    }
},{collection:"Messages", timestamps:true});

export default mongoose.model('Messages',MessageSchema);