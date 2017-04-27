import {handleActions} from 'redux-actions'
import Immutable from 'immutable'
import {UPDATE_LOCATION} from 'react-router-redux'

const initialState = Immutable.Map({
  path: '/ltr/dashboard'
})

export default handleActions({
  [UPDATE_LOCATION]: (state, action) => {    
    var path = action.payload.pathname
    console.log(path)

    return state.withMutations(map => {
      map
        .set('path', path)
    })
  }
}, initialState)
