import {connect} from 'react-redux'
import classNames from 'classnames'
import React from 'react'

import Button from '../../core/components/Button'

export default function Notification(props) {
  const {onClose, level, message} = props
  const cs = classNames('alert', `alert-${level}`, !!onClose && 'alert-dismissible')

  return (
    <div className={cs}>
      {!!onClose && <Button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-hidden="true"
        onClick={onClose}>×</Button>}
      {message.title && <p className="h4 text-compact">{message.title}</p>}
      {message.details && <p>{message.details}</p>}
    </div>
  )
}
