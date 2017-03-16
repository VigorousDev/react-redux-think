import React from 'react'
import {Link} from 'react-router'

import Notifications from '../../notifications/components/Notifications'

import classNames from 'classnames'
import {connect} from 'react-redux'
import {routeActions} from 'react-router-redux'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='body-main'>
        Homepage
      </div>
    )
  }
}