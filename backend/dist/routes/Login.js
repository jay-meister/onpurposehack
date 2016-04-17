'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('env2')('config.env');

var JWT_SECRET = process.env.JWT_SECRET;

exports.default = {
  method: ['GET', 'POST'],
  path: '/twitterauth',
  config: {
    auth: 'twitter',
    handler: function handler(request, reply) {
      if (request.auth.isAuthenticated) {
        var cred = request.auth.credentials;
        var dataToSend = {
          consumer_key: process.env.CONSUMER_KEY, // eslint-disable-line
          consumer_secret: process.env.CONSUMER_SECRET, // eslint-disable-line
          token: cred.token,
          token_secret: cred.secret };
        // eslint-disable-line
        var jwToken = _jsonwebtoken2.default.sign(dataToSend, JWT_SECRET);
        request.cookieAuth.set({ twitterCookie: jwToken });
        reply.redirect('/product-page');
      }
    }
  }
};