import axios from 'axios'

export const loadItems = () => {
  console.log('loadItems action creater called')
  return axios.get('/items').then(items => {
    setTimeout(() => {
      const loading = document.getElementById('loading')
      loading.classList.add('hidden')
    }, 2000)
    return Promise.resolve({
      type: 'LOAD_ITEMS',
      payload: items.data
    })
  })
}

export const contactSeller = (message, providerId, tweetId) => {
  console.log('contactSeller action called')
  return {
    type: 'CONTACT_SELLER',
    payload: { message, providerId, tweetId }
  }
}
