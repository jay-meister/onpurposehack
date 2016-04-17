import axios from 'axios'

export const loadItems = () => {
  console.log('loadItems action creater called')
  return axios.get('/items').then(items => {
    return Promise.resolve({
      type: 'LOAD_ITEMS',
      payload: items.data
    })
  })
}
