require('env2')('config.env')
import req from 'request'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

export default {
  path: '/contact-seller',
  method: 'GET',
  config: {
    auth: 'session',
    handler: (request, reply) => {
      const oauth = jwt.verify(request.auth.credentials.twitterCookie, JWT_SECRET)
      const status = encodeURI('i really love reuseapp') // eslint-disable-line
      const url = 'https://api.twitter.com/1.1/statuses/update.json?status=' + status
      req.post({ url, oauth }, (err, response, body) => {
        reply(body)
      })
    }
  }
}
