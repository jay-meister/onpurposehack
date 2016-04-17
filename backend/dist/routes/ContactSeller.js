'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('env2')('config.env');


var JWT_SECRET = process.env.JWT_SECRET;

exports.default = {
  path: '/contact-seller',
  method: 'GET',
  config: {
    auth: 'session',
    handler: function handler(request, reply) {
      var oauth = _jsonwebtoken2.default.verify(request.auth.credentials.twitterCookie, JWT_SECRET);
      var status = '%40reuseapp%20reuseapp'; // eslint-disable-line
      console.log(status);
      var url = 'https://api.twitter.com/1.1/statuses/update.json?status=' + status;
      _request2.default.post({ url: url, oauth: oauth }, function (err, response, body) {
        reply(body);
      });
    }
  }
};