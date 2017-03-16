import React from 'react'

import DefaultErrorPage from './components/ErrorPage'
import DefaultLoadingPage from './components/LoadingPage'

const identity = (arg) => arg

export default function(mapPropsToStatus = identity, ErrorPage = DefaultErrorPage, LoadingPage = DefaultLoadingPage) {
  return function(Page) {
    return class PageStatus extends React.Component {
      render() {
        const {loading, error} = (mapPropsToStatus ? mapPropsToStatus(this.props) : null) || {}
        let Component
        if (error) {
          Component = ErrorPage || Page
        }
        else if (loading) {
          Component = LoadingPage || Page
        }
        else {
          Component = Page
        }
        return <Component {...this.props} />
      }
    }
  }
}
