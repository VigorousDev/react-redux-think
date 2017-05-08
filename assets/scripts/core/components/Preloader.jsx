import React from 'react'
import ReactDOM from 'react-dom'
var Ploader = React.createClass({
  getInitialState: function() {
    return {
      display: 'none'
    }
  },
  show: function(cb) {
    this.setState({display: 'block'}, cb)
  },
  hide: function(cb) {
    this.setState({display: 'none'}, cb)
  },
  render: function() {
    return (
      <div className='preloader' style={{display: this.state.display}}>
        <img src={asset('/assets/images/logo.svg')} width='128' height='128' />
      </div>
    )
  }
})

if('document' in window) {
  window.Preloader = ReactDOM.render(<Ploader />, document.getElementById('app-preloader'))
}
