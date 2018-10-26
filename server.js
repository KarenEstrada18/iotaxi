import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import User from './src/models/users';
import Message from './src/models/messages';
import Device from './src/models/devices';
import Record from './src/models/records'
import graphQLHTTP from 'express-graphql';
import schema from './src/graphql';
import {createToken} from './src/resolvers/create'
import {verifyToken} from './src/resolvers/verify'
import timestampToDate from 'date-from-timestamp'

let bandera = false;
let ultimoFolio;

function Unix_timestamp(t)
{
    let dt = new Date(t*1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = dt.getFullYear();
    let month = months[dt.getMonth()];
    let date = dt.getDate();
    const restart = 0;
    let hr = dt.getHours();
    let m = "0" + dt.getMinutes();
    let s = "0" + dt.getSeconds();
    return /*date + '/' + month + '/' + year + ' ' + */hr + ':' + m.substr(-2)/* + ':' + s.substr(-2)*/;
}


const app = express();
const PORT = process.env.PORT || 3000

mongoose.connect('mongodb://iotaxi1:sistemasiotaxi1@ds157614.mlab.com:57614/iotaxi')
const db = mongoose.connection;
db.on('error',()=> console.log("Error al conectar a la BD"))
    .once('open',() => console.log("Conectado a la BD!!"))

app.use(bodyParser.json());
app.use(cors());

app.post('/signup',(req,res) => {
    let user = req.body
    User.create(user).then((user) => {
        return res.status(201).json({"message":"Usuario Creado",
            "id":user._id})
    }).catch((err) =>{
        console.log(err);
        return res.json(err);
    })
});


app.post('/login', (req,res) => {
    const token  = createToken(req.body.email,req.body.password).then((token) => {
        res.status(201).json({token});
    }).catch(() => {
        res.status(403).json({
            message:"Login Failed!!!! :( Invalid credentials"
        })
    })
})

//Analiza los mensajes
app.post('/createMessage',(req,res) => {
    let message = req.body
    console.log(message)
    let hora = Unix_timestamp(message.timestamp);

    if(hora>= '4:00' && hora <='5:00'){
        console.log("Entro al corte del día")
        Device.findOne({sigfox:message.device}).exec((err,dev)=>{
            console.log("Reset p1",dev)
            let json = {
                "contEfectivo":dev.contEfectivo, 
                "contKm":dev.contKm, 
                "contTime":dev.contTime, 
                "contTravel":dev.contTravel, 
                "initTravel":dev.initTravel
            }
            Record.create(json).then((record)=>{
                console.log(record)
                Device.findOneAndUpdate({sigfox:message.device},{$push:{records:record._id}},(err,dev) => {
                    return dev
                })    
                return record
            })
            Device.findOneAndUpdate({sigfox:message.device},{$set:{contEfectivo:0, contKm:0, contTime:0, contTravel:0, initTravel:[]}},(err,dev) => {
                return dev
            })
        })    
    }

    if(message.data.length === 6){
        console.log("Entro un folio")
        let dispositivo = Device.findOne({sigfox:message.device}).exec((err,dev)=>{
            console.log("Esta devolviendo un dispositivo")
            Device.findOneAndUpdate({sigfox:message.device},{$push:{initTravel:dev.lastLocation}},(err,dev) => {
                console.log("Actualizacion de inicio de viajes")
                return dev
            })
            return dev;
        })
        console.log("Salio del proceso de folio")
    }




    if(message.data.length === 12){
        console.log("entro una longitud 12")
        if(message.data.indexOf('00') === 0 || message.data.indexOf('01') === 0){
            console.log("entro totalizador")
            let pesos = message.data.substr(0,4);
            let cent = message.data.substr(4,2);
            let cash = Number(pesos+"."+cent);
            let km = Number(message.data.substr(6,3));
            let time = Number(message.data.substr(9,3));
            console.log(cash,",",km,",",time)
            

            Device.findOneAndUpdate({sigfox:message.device},{$inc:{contEfectivo:cash, contKm:km, contTime:time, contTravel:1}},(err,dev) => {
                return dev
            })
            console.log("salio")

        }else{
            console.log("Entro una localización")
            Device.findOneAndUpdate({sigfox:message.device},{$set:{lastLocation:message.data}}, (err,dev) => {
                return dev
            })
        }
    } 
})

app.post('/updateMe',(req,res) => {
    let user = req.body
    console.log(user)
    User.findByIdAndUpdate(user._id,{$set:{
        street:user.street, district:user.district, 
        image_url:user.image_url, 
        numExt:user.numExt, 
        numInt:user.numInt, 
        city:user.city, 
        country:user.country, 
        cc:user.cc, 
        telefono:user.tel}}).then((user) => {
            return res.status(200).json({"message":"Perfil Actualizado","id":user._id})
        }).catch((err) => {
            console.log(err);
            return res.json(err)
        })
})

app.post('/updateDevice',(req,res) => {
    let device = req.body
    console.log(device)
    Device.findByIdAndUpdate(device._id,{$set:{conductorFullName:device.conductorFullName,
    concesion:device.concesion,
    conductorAddress:device.conductorAddress,
    conductorDistrict:device.conductorDistrict,
    conductorNumExt:device.conductorNumExt,
    conductorNumInt:device.conductorNumInt,
    conductorTel:device.conductorTel,
    marcaVehicle:device.marcaVehicle,
    modeloVehicle:device.modeloVehicle,
    placaVehicle:device.placaVehicle,
    image_url_conductor:device.image_url_conductor,
    image_url_fvehicle:device.image_url_fvehicle,
    image_url_lvehicle:device.image_url_lvehicle,
    image_url_rvehicle:device.image_url_rvehicle,
    image_url_bvehicle:device.image_url_bvehicle,
    }}).then((device) => {
        return res.status(200).json({"message":"Dispositivo Actualizado","id":device._id})
    }).catch((err) => {
        console.log(err);
        return res.json(err)
    })
})

app.post('/addDevice',(req,res) => {
    let device = req.body
    console.log(device)
    Device.create(device).then((device) => {
        User.findByIdAndUpdate(device.user,{$push:{devices:device._id}}, (err,user) =>{
            console.log(user)
        })
        console.log(device.user)
        return res.status(201).json({"message":"Dispositivo Creado","id":device._id})
    }).catch((err)=>{
        console.log(err);
        return res.json(err)
    })
        
})

app.post("/me",(req,res) => {
    let me = req.body
    console.log(me)
    
    let devices = User.findById(me.id,{select:'devices'}).populate('devices').then((user) => {
        console.log(user)
        return res.json(user)
    }).catch((err) =>{
        return res.json(err)
    })
    console.log("devices",devices)
    return devices;
})

app.use('/graphql',(req,res,next) => {
    const token  = req.headers['authorization'];
    try{
        req.user = verifyToken(token)
        next();
    }catch(error){
        res.status(401).json({message:error.message})
    }
})

app.use('/graphql',graphQLHTTP((req,res)=>({
    schema,
    graphiql:true,
    pretty:true,
    context:{
        user:req.user
    }
})))

app.get('/',(req,res) => {
    res.send("Estoy funcionando :)")
})

app.listen(PORT,() =>{
    console.log("Magic Happens in port: "+PORT)
})