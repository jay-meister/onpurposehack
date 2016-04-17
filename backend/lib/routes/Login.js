require('env2')('config.env')

import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET

export default {
  method: ['GET', 'POST'],
  path: '/twitterauth',
  config: {
    auth: 'twitter',
    handler: (request, reply) => {
      if (request.auth.isAuthenticated) {
        const cred = request.auth.credentials
        const dataToSend = {
          consumer_key: process.env.CONSUMER_KEY,
          consumer_secret: process.env.CONSUMER_SECRET,
          token: cred.token,
          secret: cred.secret,
        }
        const jwToken = jwt.sign(dataToSend, JWT_SECRET)
        request.cookieAuth.set({'twitterCookie': jwToken})
        reply.redirect('/')
      }
    }
  }
}
