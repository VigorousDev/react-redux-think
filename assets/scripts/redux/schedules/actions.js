import {createAsyncAction} from '../actions'
import {fetch} from '../../core/http'
import {ERROR} from '../notifications/actions'

const fetchEventTickets = createAsyncAction('FETCH_PROJECT_SCHEDULES', function(eid) {
  return (dispatch) => {
    return fetch(`/api/projects/${eid}/relationships/schedules`)
      .catch((err) => {
        dispatch(ERROR(...err.errors))
        dispatch(this.failed(err))
        throw err
      })
      .then((res) => {
        const out = {eid: eid, schedules: res}
        dispatch(this.success(out))
        return res
      })
  }
})

const createTicket = createAsyncAction('CREATE_SCHEDULE', function(eid, form) {
  const body = {
    data: {
      ...form,
      type: 'schedule',
      relationships: {
        project: {
          data: {type: 'project', id: eid}
        }
      }
    }
  }
  return (dispatch) => {
    return fetch(`/api/schedules`, {
      method: 'POST',
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

const updateTicket = createAsyncAction('UPDATE_SCHEDULE', function(tid, form) {
  const body = {
    data: {
      ...form,
      id: tid,
      type: 'schedule',
    }
  }
  return (dispatch) => {
    return fetch(`/api/schedules/${tid}`, {
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

export default {
  ...fetchEventTickets,
  ...createTicket,
  ...updateTicket,
}

