import _ from 'lodash'
import {handleAction, handleActions} from 'redux-actions'
import {fromJS, Map, OrderedMap, Set} from 'immutable'
import {get, set} from 'lodash'
import {createAsyncHandlers} from '../../core/actions'

const initialState = Map({
  initial: true,
  loading: Set(),
  total: 0,
  skip: 0,
  projects: OrderedMap(),
  selected: null,
  errors: Map()
})

const FETCH_PROJECTS = createAsyncHandlers('FETCH_PROJECTS', {
  success(state, action) {
    const {total, skip, data} = action.payload

    return state.withMutations(map => {
      map
        .set('initial', false)
        .set('total', total)
        .set('skip', skip)
        .set('projects', map.get('projects').withMutations((es) => {
          _.each(data, e => {
            es.set(e.id, fromJS(e))
          })
        }))
    })
  }
})

const FETCH_PROJECT = createAsyncHandlers('FETCH_PROJECT', {
  success(state, action) {
    const {data} = action.payload
    return state.set('selected', fromJS(data))
  }
})

const CREATE_PROJECT = createAsyncHandlers('CREATE_PROJECT', {
  success(state, action) {
    const project = action.payload.data

    return state.withMutations(map => {
      map
        .set('initial', false)
        .set('total', map.get('total') + 1)
        .set('projects', map.get('projects').set(project.id, fromJS(project)))
    })
  }
})

const UPDATE_PROJECT = createAsyncHandlers('UPDATE_PROJECT', {
  success(state, action) {
    const project = fromJS(action.payload.data)

    return state.withMutations(map => {
      const sid = map.getIn(['selected', 'id'], null)
      const eid = project.get('id')
      map.set('projects', map.get('projects').set(eid, project))
      if (sid && sid === eid) {
        map.set('selected', project)
      }
    })
  }
})

const CLEAR_SELECTED_PROJECT = handleAction('CLEAR_SELECTED_PROJECT', (state) => {
  return state.set('selected', null)
})

export default handleActions({
  ...FETCH_PROJECTS,
  ...FETCH_PROJECT,
  ...CREATE_PROJECT,
  ...UPDATE_PROJECT,
  CLEAR_SELECTED_PROJECT,
}, initialState)
