'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _messages = require('./src/models/messages');

var _messages2 = _interopRequireDefault(_messages);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _graphql = require('./src/graphql');

var _graphql2 = _interopRequireDefault(_graphql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

app.post('/createMessage', function (req, res) {
    var message = req.body;
    console.log(message);
    _messages2.default.create(message).then(function (message) {
        return res.status(201).json({ "message": "Usurio creado",
            "id": message._id });
    }).catch(function (err) {
        console.log(err);
        return res.json(err);
    });
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