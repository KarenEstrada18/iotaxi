import mongoose from 'mongoose';
import tfd from 'date-from-timestamp'
import ttd from 'normalize-date'

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
    "creae_at":{
        type:Date,
        default: new Date()
    }
},{collection:"Messages", timestamps:true});

MessageSchema.pre('save',function(next){
    let message = this;
    console.log(message)

    if(!message.isModified('time')){ return next()};
    console.log("Aqui bien");
    console.log(Date(message.time))
    console.log(ttd(message.timestamp))
    //message.time = new Date(message.timestamp)
    //console.log(new Date(message.timestamp))
    // console.log(new Date(message.time))
    next();
})

export default mongoose.model('Messages',MessageSchema);