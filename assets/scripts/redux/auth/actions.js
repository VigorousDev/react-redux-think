import {createAsyncAction} from '../actions'
import {fetch} from '../../core/http'
import {ERROR} from '../notifications/actions'

const fetchSession = createAsyncAction('FETCH_SESSION', function() {
  return (dispatch) => {
    return fetch('/api/authenticate')
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

const login = createAsyncAction('LOGIN', function(form) {
  return (dispatch) => {
    return fetch('/api/authenticate', {
      method: 'POST',
      body: JSON.stringify({data: {
        type: 'sessionrequest',
        ...form
      }})
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

const fblogin = createAsyncAction('FACEBOOK_LOGIN', function(form) {
  return (dispatch) => {
    return fetch('/api/fbauthenticate', {
      method: 'POST',
      body: JSON.stringify({data: {
        type: 'fbsessionrequest',
        ...form
      }})
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

const logout = createAsyncAction('LOGOUT', function(form) {
  return (dispatch) => {
    return fetch('/api/authenticate', {
      method: 'DELETE'
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

const register = createAsyncAction('REGISTER', function(form) {
  return (dispatch) => {
    return fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({data: {type: 'user', ...form}})
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
  ...fetchSession,
  ...login,
  ...fblogin,
  ...logout,
  ...register,
}

