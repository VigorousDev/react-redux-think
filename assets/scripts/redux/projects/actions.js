import url from 'url'
import {createAction, createAsyncAction} from '../../core/actions'
import {fetch} from '../../core/http'
import {ERROR} from '../../notifications/messages/actions'

const fetchEvents = createAsyncAction('FETCH_PROJECTS', function() {
  return (dispatch) => {
    return fetch('/api/projects')
      .catch((err) => {
        dispatch(ERROR(...err.errors))
        dispatch(this.failed(err))
        throw err
      })
      .then((res) => {
        dispatch(this.success(res))
        return res
      })
  }
})

const createEvent = createAsyncAction('CREATE_PROJECT', function(form) {
  return (dispatch) => {
    return fetch('/api/projects', {
      method: 'POST',
      body: JSON.stringify({data: {...form, type: 'project'}})
    })
    .catch((err) => {
      dispatch(ERROR(...err.errors))
      dispatch(this.failed(err))
      throw err
    })
    .then((res) => {
      dispatch(this.success(res))
      return res
    })
  }
})

const fetchEvent = createAsyncAction('FETCH_PROJECT', function(id, query) {
  return (dispatch) => {
    return fetch(url.format({pathname: `/api/projects/${id}`, query: query}))
    .catch((err) => {
      dispatch(ERROR(...err.errors))
      dispatch(this.failed(err))
      throw err
    })
    .then((res) => {
      dispatch(this.success(res))
      return res
    })
  }
})

const updateEvent = createAsyncAction('UPDATE_PROJECT', function(id, form) {
  const body = {
    data: {
      ...form,
      id: id,
      type: 'project',
    }
  }
  return (dispatch) => {
    return fetch(`/api/projects/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(body)
    })
    .catch((err) => {
      dispatch(ERROR(...err.errors))
      dispatch(this.failed(err))
      throw err
    })
    .then((res) => {
      dispatch(this.success(res))
      return res
    })
  }
})

const CLEAR_SELECTED_PROJECT = createAction('CLEAR_SELECTED_PROJECT')

export default {
  ...fetchEvents,
  ...fetchEvent,
  ...createEvent,
  ...updateEvent,
  CLEAR_SELECTED_PROJECT
}

