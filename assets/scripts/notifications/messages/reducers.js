import _ from 'lodash'
import {handleActions} from 'redux-actions'
import {OrderedMap} from 'immutable'

const initialState = OrderedMap()

const add = (state, action) => {
  const {payload} = action
  return initialState.withMutations(s => {
    _.forEach(payload, (m) =>  s.set(m.id, m))
  })
}

export default handleActions({
  'notifications/INFO': add,
  'notifications/ERROR': add,
  'notifications/WARNING': add,
  'notifications/SUCCESS': add,
  'notifications/DISMISS': (state, action) => state.remove(action.payload),
  'notifications/CLEAR': () => initialState,
  'async/LOADING_START': () => initialState
}, initialState)
