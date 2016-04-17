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
      const decodedData = jwt.verify(request.auth.credentials.twitterCookie, JWT_SECRET)
      const oauth = Object.assign({}, decodedData)
      delete oauth.iat
      const url = 'https://api.twitter.com/1.1/statuses/update.json'
      const status = encodeURI('i love reuseapp')
      req.post({ url: url, oauth: oauth, status: status }, (err, response, body) => {
        console.log(response)
        reply(decodedData)
      })
    }
  }
}
