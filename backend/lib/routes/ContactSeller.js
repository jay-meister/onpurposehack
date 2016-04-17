require('env2')('config.env')

const JWT_SECRET = process.env.JWT_SECRET
import jwt from 'json-web-token'

export default {
  path: '/contact-seller',
  method: 'POST',
  config: {
    auth: 'session',
    handler: (request, reply) => {
      const decodedData = jwt.verify(request.auth.credentials.twitterCookie, JWT_SECRET)
      reply(decodedData)
    }
  }
}
