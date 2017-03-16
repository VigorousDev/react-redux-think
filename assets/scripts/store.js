import {applyMiddleware, compose, createStore, combineReducers} from 'redux'
import promise from 'redux-promise'
import {reducer as formReducer} from 'redux-form'
import {browserHistory} from 'react-router'
import {syncHistory, routeReducer} from 'react-router-redux'
import thunk from 'redux-thunk'

import {loadingReducer} from './core/actions'
import getRoutes from './routes'
import DevTools from './DevTools'

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}
const initialState = {
                routing: {
                   location: '/ltr/dashboard',
                }
            }
const debug = process.env.NODE_ENV !== 'production'

const routerMiddleware = syncHistory(browserHistory)
let enhancers = [
  applyMiddleware(...[thunk, debug && logger, promise, routerMiddleware].filter(Boolean)),
  debug ? DevTools.instrument() : null,
].filter(Boolean)

let factory = compose(...enhancers)(createStore)

const store = factory(combineReducers({
  loading: loadingReducer,
  routing: routeReducer,
  form: formReducer,
  navigation: require('./core/navigation/reducers'),
  notifications: require('./notifications/messages/reducers')
}), initialState)
//  

routerMiddleware.listenForReplays(store)

export default store
