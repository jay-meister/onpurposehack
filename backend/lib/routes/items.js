import req from 'request'
require('env2')('config.env')

export default {
  path: '/items',
  method: 'GET',
  handler: (request, reply) => {
    const url = 'https://api.twitter.com/1.1/statuses/mentions_timeline.json'
    const oauth = {
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      token: process.env.ACCESS_TOKEN,
      token_secret: process.env.ACCESS_TOKEN_SECRET,
    }
    req.get({ url, oauth }, (err, response, body) => {
      reply(body)
    })
  }
}
