import _ from 'lodash'
import {connect} from 'react-redux'
import React from 'react'

import Notification from './Notification'
import {DISMISS} from '../messages/actions'

@connect(
  ({notifications}) => ({notifications: notifications.toList().toJS()}),
  {DISMISS}
)
export default class Notifications extends React.Component {
  render() {
    const {notifications, DISMISS} = this.props
    const nodes = _.map(notifications, ({id, level, message}) => {
      return <Notification key={id} level={level} message={message} onClose={() => DISMISS(id)} />
    })
    return (
      <div className="alerts">
        {nodes}
      </div>
    )
  }
}

