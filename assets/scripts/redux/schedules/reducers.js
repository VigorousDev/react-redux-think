import _ from 'lodash'
import {handleAction, handleActions} from 'redux-actions'
import {fromJS, OrderedSet, Map, Set} from 'immutable'
import {createAsyncHandlers} from '../actions'

const initialState = Map({
  loading: Set(),
  byEvent: Map(),
  collection: Map(),
  errors: Map()
})

const FETCH_PROJECT_SCHEDULES = createAsyncHandlers('FETCH_PROJECT_SCHEDULES', {
  success(state, action) {
    const {eid, schedules: {data}} = action.payload

    const ids = _.map(data, 'id')
    const schedulesById = _.keyBy(data, 'id')
    return state
      .mergeIn(['collection'], schedulesById)
      .setIn(['byEvent', eid], OrderedSet(ids))
  }
})

const CREATE_SCHEDULE = createAsyncHandlers('CREATE_SCHEDULE', {
  success(state, action) {
    const {data} = action.payload
    const tid = data.id
    const eid = _.get(data, '$relationships.project.id')
    return state
      .setIn(['collection', tid], data)
      .updateIn(['byEvent', eid], OrderedSet(), ts => ts.add(tid))
  }
})

const UPDATE_SCHEDULE = createAsyncHandlers('UPDATE_SCHEDULE', {
  success(state, action) {
    const {data} = action.payload
    const tid = data.id
    const eid = _.get(data, '$relationships.project.id')
    return state
      .setIn(['collection', tid], data)
      .updateIn(['byEvent', eid], OrderedSet(), ts => ts.add(tid))
  }
})

const CLEAR_SELECTED_PROJECT = handleAction('CLEAR_SELECTED_PROJECT', (state) => {
  return initialState
})

export default handleActions({
  ...FETCH_PROJECT_SCHEDULES,
  ...CREATE_SCHEDULE,
  ...UPDATE_SCHEDULE,
  CLEAR_SELECTED_PROJECT,
}, initialState)

