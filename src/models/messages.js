import mongoose from 'mongoose';
import Device from './devices';
import tfd from 'date-from-timestamp'
import ttd from 'normalize-date'

const Schema = mongoose.Schema

const MessageSchema = new Schema({
    "device":{
        type:String,
        required:true
    },
    "timestamp":{
        type:Number,
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

/*MessageSchema.pre('save',function(next){
    let message = this;
    console.log(message)
    if(!message.isModified('time')){ return next()};
    console.log("Aqui bien");
    console.log(Date(message.time))
    console.log(ttd(message.timestamp))
    next();
})*/

/*MessageSchema.post('save', function(next){
    let message = this;
    console.log('post begin')
    console.log(message.device)
    Device.findByIdAndUpdate({"_id":message.device},{$push:{messages:message._id}})

})*/

export default mongoose.model('Messages',MessageSchema);