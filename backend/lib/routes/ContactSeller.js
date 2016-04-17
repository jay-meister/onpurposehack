require('env2')('config.env')
import req from 'request'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

export default {
  path: '/contact-seller',
  method: 'POST',
  config: {
    auth: 'session',
    handler: (request, reply) => {
      console.log(request.payload)
      const oauth = jwt.verify(request.auth.credentials.twitterCookie, JWT_SECRET)
      const status = '%40' + request.payload.userName + '%20' + encodeURI(request.payload.text) // eslint-disable-line
      console.log(status)
      const url = 'https://api.twitter.com/1.1/statuses/update.json?status=' + status + '&in_reply_to_status_id=' + request.payload.tweetId
      req.post({ url, oauth }, (err, response, body) => {
        console.log(body)
        reply(body)
      })
    }
  }
}
