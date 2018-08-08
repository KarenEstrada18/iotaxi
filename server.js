import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Message from './src/models/messages';


const app = express();
const PORT = process.env.PORT || 3000

mongoose.connect('mongodb://iotaxi1:sistemasiotaxi1@ds157614.mlab.com:57614/iotaxi')
const db = mongoose.connection;
db.on('error',()=> console.log("Error al conectar a la BD"))
    .once('open',() => console.log("Conectado a la BD!!"))

app.use(bodyParser.json());

app.post('/createMessage',(req,res) => {
    let message = req.body
    console.log(message)
    Message.create(message).then((message) => {
        return res.status(201).json({"message":"Usurio creado",
    "id":message._id})
    }).catch((err)=>{
        console.log(err);
        return res.json(err)
    }) 
})

app.get('/',(req,res) => {
    res.send("Estoy funcionando :)")
})

app.listen(PORT,() =>{
    console.log("Magic Happens in port: "+PORT)
})