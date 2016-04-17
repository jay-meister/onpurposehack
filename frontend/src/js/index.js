import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import Routes from './routes.js'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import { syncHistoryWithStore } from 'react-router-redux'
import ReduxPromise from 'redux-promise'
import reducers from './reducers/index.js'

const store = applyMiddleware(ReduxPromise)(createStore)(reducers)

// Create an enhanced history that syncs navigation events with the store
const enhancedHistory = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={enhancedHistory} routes={Routes} />
  </Provider>,
  document.getElementById('app')
)
