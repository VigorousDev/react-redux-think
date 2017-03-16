import React from 'react'
import {Link} from 'react-router'

export default class EmptyBar extends React.Component {  
  constructor(props) {
    super(props)
  }
  render() {
    const {link, buttonTitle} = this.props
    return (
      <div className="card text-center">
        <div className="card-block">
          <div>
            {!!link && <Link className="btn btn-lg btn-primary" to={link}>
              <i className="fa fa-fw fa-plus" /> {buttonTitle || 'Create'}
            </Link>}
            {!link && 'Empty'}
          </div>
        </div>
      </div>
    )
  }
}