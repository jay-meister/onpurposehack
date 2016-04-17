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
      const filtered = filterResponse(JSON.parse(body))
      reply(JSON.stringify(filtered))
    })
  }
}

//can be refactored
const filterResponse = (twitterResponse) => {
  return twitterResponse.map(tweet => {
  	const hashtags = (Array.isArray(tweet.entities.hashtags)) ? tweet.entities.hashtags.map(hashtag => hashtag.text) : null
  	const description = (typeof tweet.text === 'string') ? tweet.text.split('@reuseapp').join('').split('https://')[0].trim() : null
  	const imgURLs = (tweet.extended_entities) ? tweet.extended_entities.media.filter(item => item.type === 'photo').map(item => item.media_url) : null
  	const coordinates = tweet.geo ? tweet.geo.coordinates : null
  	const place = tweet.place ? tweet.place.full_name : null

    return (imgURLs) ? {
      tweetId: tweet.id_str,
      date: tweet.created_at.slice(0,10),
      time: tweet.created_at.slice(10,16),
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
    } : null
  }).filter(tweet => tweet ) //filter out tweets which dont have image attached
}
