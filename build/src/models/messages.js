'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _devices = require('./devices');

var _devices2 = _interopRequireDefault(_devices);

var _dateFromTimestamp = require('date-from-timestamp');

var _dateFromTimestamp2 = _interopRequireDefault(_dateFromTimestamp);

var _normalizeDate = require('normalize-date');

var _normalizeDate2 = _interopRequireDefault(_normalizeDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var MessageSchema = new Schema({
    "device": {
        type: String,
        required: true
    },
    "timestamp": {
        type: Number,
        required: true
    },
    "data": {
        type: String,
        required: true
    },
    "creae_at": {
        type: Date,
        default: new Date()
    }
}, { collection: "Messages", timestamps: true });

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

exports.default = _mongoose2.default.model('Messages', MessageSchema);