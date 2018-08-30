import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import User from './src/models/users';
import Message from './src/models/messages';
import Device from './src/models/devices';
import graphQLHTTP from 'express-graphql';
import schema from './src/graphql';
import {createToken} from './src/resolvers/create'
import {verifyToken} from './src/resolvers/verify'


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

app.post('/createMessage',(req,res) => {
    let message = req.body
    console.log(message)
    Message.create(message).then((message) => {
        console.log("AQUI VA CHIDO")
        console.log(Device.findByIdAndUpdate(message.device,{$push:{messages:message._id}},(err,dev) => {
            return console.log(dev)
        }))
        return res.status(201).json({"message":"Mensaje creado", "id":message._id})
    }).catch((err)=>{
        console.log(err);
        return res.json(err)
    }) 
})

app.post('/addDevice',(req,res) => {
    let device = req.body
    console.log(device)
    Device.create(device).then((device) => {
        return res.status(201).json({"message":"Dispositivo Creado","id":device._id})
    }).catch((err)=>{
        console.log(err);
        return res.json(err)
    })
        
})

app.use('/graphql',(req,res,next) => {
    const token = req.headers['authorization'];
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