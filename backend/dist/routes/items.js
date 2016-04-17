'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('env2')('config.env');

exports.default = {
  path: '/items',
  method: 'GET',
  handler: function handler(request, reply) {
    var url = 'https://api.twitter.com/1.1/statuses/mentions_timeline.json';
    var oauth = {
      consumer_key: process.env.CONSUMER_KEY, // eslint-disable-line
      consumer_secret: process.env.CONSUMER_SECRET, // eslint-disable-line
      token: process.env.ACCESS_TOKEN,
      token_secret: process.env.ACCESS_TOKEN_SECRET };
    // eslint-disable-line
    _request2.default.get({ url: url, oauth: oauth }, function (err, response, body) {
      var filtered = filterResponse(JSON.parse(body));
      reply(JSON.stringify(filtered));
    });
  }
};

//can be refactored

var filterResponse = function filterResponse(twitterResponse) {
  return twitterResponse.map(function (tweet) {
    var hashtags = Array.isArray(tweet.entities.hashtags) ? tweet.entities.hashtags.map(function (hashtag) {
      return hashtag.text;
    }) : null;
    var description = typeof tweet.text === 'string' ? tweet.text.split('@reuseapp').join('').split('https://')[0].trim() : null;
    var imgURLs = tweet.extended_entities ? tweet.extended_entities.media.filter(function (item) {
      return item.type === 'photo';
    }).map(function (item) {
      return item.media_url;
    }) : null;
    var coordinates = tweet.geo ? tweet.geo.coordinates : null;
    var place = tweet.place ? tweet.place.full_name : null;

    return imgURLs ? {
      date: tweet.created_at.slice(0, 10),
      time: tweet.created_at.slice(10, 16),
      description: description,
      hashtags: hashtags,
      imgURLs: imgURLs,
      coordinates: coordinates,
      place: place,
      provider: {
        id: tweet.user.id,
        name: tweet.user.name,
        userName: tweet.user.screen_name,
        profileImage: tweet.user.profile_image_url
      }
    } : null;
  }).filter(function (tweet) {
    return tweet;
  }); //filter out tweets which dont have image attached
};