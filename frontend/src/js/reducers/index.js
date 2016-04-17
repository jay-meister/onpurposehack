import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { items } from './items.js'

const rootReducer = combineReducers({
  routing: routerReducer,
  items: items
})

export default rootReducer
