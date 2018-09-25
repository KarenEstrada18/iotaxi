'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _users = require('../../../models/users');

var _users2 = _interopRequireDefault(_users);

var _users3 = require('../../types/users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySingleUserM = {
    type: _users3.UserType,
    args: {
        email: {
            name: 'email',
            type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString)
        }
    },
    resolve: function resolve(root, params) {
        var user = _users2.default.findOne({ email: params.email }).exec();
        return user;
    }
};
exports.default = querySingleUserM;