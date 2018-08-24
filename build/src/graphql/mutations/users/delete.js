'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _users = require('../../../models/users');

var _users2 = _interopRequireDefault(_users);

var _users3 = require('../../types/users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _users3.UserType,
    args: {
        id: {
            name: "ID",
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        }
    },
    reolve: function reolve(root, params) {
        var deleteUser = _users2.default.findByIdAndRemove(params.id).exec();
        if (!deleteUser) throw new Error("Error al borrar usuarios");
        return deleteUser;
    }
};