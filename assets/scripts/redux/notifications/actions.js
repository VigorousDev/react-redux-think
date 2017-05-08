import _ from 'lodash'
import {createAction} from 'redux-actions'
import {shortid} from '../../core/rand'

function notify(level, ...messages) {
  const grouped = _.groupBy(messages, (m) => m.code === 'validation_failed'? 'vf' : 'rest')
  const {vf, rest} = grouped
  const filtered = [].concat(rest || [])

  if (vf && vf.length) {
    filtered.push({details: 'Validation failed', code: 'validation_failed', meta: {errors: vf}})
  }

  return _.map(filtered, (message) => ({id: shortid(), level, message}))
}

export const INFO = createAction('notifications/INFO', notify.bind(null, 'info'))
export const ERROR = createAction('notifications/ERROR', notify.bind(null, 'danger'))
export const WARNING = createAction('notifications/WARNING', notify.bind(null, 'warning'))
export const SUCCESS = createAction('notifications/SUCCESS', notify.bind(null, 'success'))
export const DISMISS = createAction('notifications/DISMISS')
export const CLEAR = createAction('notifications/CLEAR')
