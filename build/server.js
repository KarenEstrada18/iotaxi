'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _users = require('./src/models/users');

var _users2 = _interopRequireDefault(_users);

var _messages = require('./src/models/messages');

var _messages2 = _interopRequireDefault(_messages);

var _devices = require('./src/models/devices');

var _devices2 = _interopRequireDefault(_devices);

var _records = require('./src/models/records');

var _records2 = _interopRequireDefault(_records);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _graphql = require('./src/graphql');

var _graphql2 = _interopRequireDefault(_graphql);

var _create = require('./src/resolvers/create');

var _verify = require('./src/resolvers/verify');

var _dateFromTimestamp = require('date-from-timestamp');

var _dateFromTimestamp2 = _interopRequireDefault(_dateFromTimestamp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bandera = false;
var ultimoFolio = void 0;

function Unix_timestamp(t) {
    var dt = new Date(t * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = dt.getFullYear();
    var month = months[dt.getMonth()];
    var date = dt.getDate();
    var restart = 0;
    var hr = dt.getHours();
    var m = "0" + dt.getMinutes();
    var s = "0" + dt.getSeconds();
    return (/*date + '/' + month + '/' + year + ' ' + */hr + ':' + m.substr(-2) /* + ':' + s.substr(-2)*/
    );
}

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;

_mongoose2.default.connect('mongodb://iotaxi1:sistemasiotaxi1@ds157614.mlab.com:57614/iotaxi');
var db = _mongoose2.default.connection;
db.on('error', function () {
    return console.log("Error al conectar a la BD");
}).once('open', function () {
    return console.log("Conectado a la BD!!");
});

app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());

app.post('/signup', function (req, res) {
    var user = req.body;
    _users2.default.create(user).then(function (user) {
        return res.status(201).json({ "message": "Usuario Creado", "id": user._id });
    }).catch(function (err) {
        console.log(err);
        return res.json(err);
    });
});

app.post('/login', function (req, res) {
    var token = (0, _create.createToken)(req.body.email, req.body.password).then(function (token) {
        res.status(201).json({ token: token });
    }).catch(function () {
        res.status(403).json({
            message: "Login Failed!!!! :( Invalid credentials"
        });
    });
});

//Analiza los mensajes
app.post('/createMessage', function (req, res) {
    var message = req.body;
    console.log(message);
    var hora = Unix_timestamp(message.timestamp);

    var dispositivo = _devices2.default.findOne({ sigfox: message.device }).exec();
    console.log(dispositivo.device);
    console.log(dispositivo);

    if (hora >= '4:00' && hora <= '5:00') {
        console.log("Entro al corte del día");
        _devices2.default.findOne({ sigfox: message.device }).exec(function (err, dev) {
            console.log("Reset p1", dev);
            var json = {
                "contEfectivo": dev.contEfectivo,
                "contKm": dev.contKm,
                "contTime": dev.contTime,
                "contTravel": dev.contTravel,
                "initTravel": dev.initTravel
            };
            _records2.default.create(json).then(function (record) {
                console.log(record);
                _devices2.default.findOneAndUpdate({ sigfox: message.device }, { $push: { records: record._id } }, function (err, dev) {
                    return dev;
                });
                return record;
            });
            _devices2.default.findOneAndUpdate({ sigfox: message.device }, { $set: { contEfectivo: 0, contKm: 0, contTime: 0, contTravel: 0, initTravel: [] } }, function (err, dev) {
                return dev;
            });
        });
    }

    if (message.data.length === 6) {
        console.log("Entro un folio");
        _devices2.default.findOne({ sigfox: message.device }).exec(function (err, dev) {
            if (dev.lastLocation != null) {
                console.log(dev.lastLocation);
                _devices2.default.findOneAndUpdate({ sigfox: message.device }, { $push: { initTravel: dev.lastLocation } }, function (err, dev) {
                    console.log("Actualizacion de inicio de viajes");
                    return dev;
                });
                return dev;
            } else {
                return err;
            }
        });

        console.log("Salio del proceso de folio");
        return res.status(201).json({ "message": "Mensaje procesado", "Dispositivo": message.device });
    }

    if (message.data.length === 12) {
        console.log("entro una longitud 12");
        if (message.data.indexOf('00') === 0 || message.data.indexOf('01') === 0) {
            console.log("entro totalizador");
            var pesos = message.data.substr(0, 4);
            var cent = message.data.substr(4, 2);
            var cash = Number(pesos + "." + cent);
            var km = Number(message.data.substr(6, 3));
            var time = Number(message.data.substr(9, 3));
            console.log(cash, ",", km, ",", time);

            _devices2.default.findOneAndUpdate({ sigfox: message.device }, { $inc: { contEfectivo: cash, contKm: km, contTime: time, contTravel: 1 } }, function (err, dev) {
                return dev;
            });
            console.log("salio");
        } else {
            console.log("Entro una localización");
            _devices2.default.findOneAndUpdate({ sigfox: message.device }, { $set: { lastLocation: message.data } }, function (err, dev) {
                return dev;
            });
            return res.status(201).json({ "message": "Mensaje procesado", "Dispositivo": message.device });
        }
    }
});

app.post('/updateMe', function (req, res) {
    var user = req.body;
    console.log(user);
    _users2.default.findByIdAndUpdate(user._id, { $set: {
            street: user.street, district: user.district,
            image_url: user.image_url,
            numExt: user.numExt,
            numInt: user.numInt,
            city: user.city,
            country: user.country,
            cc: user.cc,
            telefono: user.tel } }).then(function (user) {
        return res.status(200).json({ "message": "Perfil Actualizado", "id": user._id });
    }).catch(function (err) {
        console.log(err);
        return res.json(err);
    });
});

app.post('/updateDevice', function (req, res) {
    var device = req.body;
    console.log(device);
    _devices2.default.findByIdAndUpdate(device._id, { $set: { conductorFullName: device.conductorFullName,
            concesion: device.concesion,
            conductorAddress: device.conductorAddress,
            conductorDistrict: device.conductorDistrict,
            conductorNumExt: device.conductorNumExt,
            conductorNumInt: device.conductorNumInt,
            conductorTel: device.conductorTel,
            marcaVehicle: device.marcaVehicle,
            modeloVehicle: device.modeloVehicle,
            placaVehicle: device.placaVehicle,
            image_url_conductor: device.image_url_conductor,
            image_url_fvehicle: device.image_url_fvehicle,
            image_url_lvehicle: device.image_url_lvehicle,
            image_url_rvehicle: device.image_url_rvehicle,
            image_url_bvehicle: device.image_url_bvehicle
        } }).then(function (device) {
        return res.status(200).json({ "message": "Dispositivo Actualizado", "id": device._id });
    }).catch(function (err) {
        console.log(err);
        return res.json(err);
    });
});

app.post('/addDevice', function (req, res) {
    var device = req.body;
    console.log(device);
    _devices2.default.create(device).then(function (device) {
        _users2.default.findByIdAndUpdate(device.user, { $push: { devices: device._id } }, function (err, user) {
            console.log(user);
        });
        console.log(device.user);
        return res.status(201).json({ "message": "Dispositivo Creado", "id": device._id });
    }).catch(function (err) {
        console.log(err);
        return res.json(err);
    });
});

app.post("/me", function (req, res) {
    var me = req.body;
    console.log(me);

    var devices = _users2.default.findById(me.id, { select: 'devices' }).populate('devices').then(function (user) {
        console.log(user);
        return res.json(user);
    }).catch(function (err) {
        return res.json(err);
    });
    console.log("devices", devices);
    return devices;
});

app.use('/graphql', function (req, res, next) {
    var token = req.headers['authorization'];
    try {
        req.user = (0, _verify.verifyToken)(token);
        next();
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
});

app.use('/graphql', (0, _expressGraphql2.default)(function (req, res) {
    return {
        schema: _graphql2.default,
        graphiql: true,
        pretty: true,
        context: {
            user: req.user
        }
    };
}));

app.get('/', function (req, res) {
    res.send("Estoy funcionando :)");
});

app.listen(PORT, function () {
    console.log("Magic Happens in port: " + PORT);
});