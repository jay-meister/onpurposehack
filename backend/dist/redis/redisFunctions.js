'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDummyData = exports.addDummyData = undefined;

var _client = require('./client.js');

var _client2 = _interopRequireDefault(_client);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_client2.default.LPUSH = _bluebird2.default.promisify(_client2.default.LPUSH);
_client2.default.LRANGE = _bluebird2.default.promisify(_client2.default.LRANGE);

// these are some dummy functions
// make sure to delete these if you're done using them
var addDummyData = exports.addDummyData = function addDummyData(data) {
  return _client2.default.LPUSH('myList', data);
};

var getDummyData = exports.getDummyData = function getDummyData() {
  return _client2.default.LRANGE('myList', 0, -1);
};