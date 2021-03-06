import classNames from 'classnames'
import React from 'react'
import {connect} from 'react-redux'
import Modal from 'react-modal'
import DevTools from '../core/components/DevTools'
import modalStyle from '../core/modalStyle'

import Sidebar from './components/common/sidebar';
import Header from './components/common/header';
import Footer from './components/common/footer';
import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

import { Button } from '@sketchpixy/rubix'
const debug = process.env.NODE_ENV !== 'production'

@connect((state) => {
  return {
    navigation: state.navigation.toJS()
  }
}, {})
class Root extends React.Component {
  constructor(props){
    super(props)
  }
  static contextTypes = {store: React.PropTypes.object.isRequired}
  render() {
    const {navigation} = this.props
    // console.log('navi = ', navigation)
    return (
      <MainContainer {...this.props}>
        <Sidebar/>
        <Header/>
        <div id='body'>
          {this.props.children}          
        </div>
        <Footer/>
      </MainContainer>
    )
  }
}

Root.contextTypes = {store: React.PropTypes.object.isRequired}

export default Root
