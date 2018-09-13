 import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema
const UserSchema = new Schema({

    "name":{
        type:String,
        required:true
    },
    "lastname":{
        type:String,
        required:true
    },
    "email":{
        type:String,
        required:true,
        unique:true
    },
    "password":{
        type:String,
        required:true
    },
    "street":{
        type:String,
    },
    "district":{
        type:String
    },
    "numExt":{
        type:String
    },
    "numInt":{
        type:String
    },
    "city":{
        type:String
    },
    "country":{
        type:String
    },
    "cc":{
        type:String
    },
    "telefono":{
        type:String
    },
    "devices":{
        type:[Schema.Types.ObjectId],
        ref:"Devices"
    },
    "is_admin":{
        type:Boolean,
    },
    "is_active":{
        type:Boolean,
        default:true
    },
    "create_at":{
        type:Date,
        defaul:new Date()
    },
    "client_id":{
        type:String
    }
},{collection:"Users",timestamps:true});

UserSchema.pre('save',function(next){
    let user = this;
    if(!user.isModified('password')){ return next(); }

    bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt) {
        if (err) return next(err);

        bcrypt.hash(user.password,salt,function(err,hash){
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
})

UserSchema.methods.comparePassword = function(candidatePassword,cb) {
    bcrypt.compare(candidatePassword,this.password,function(err,isMatch){ 
        cb(null,isMatch)
    })
}

export default mongoose.model('Users',UserSchema);