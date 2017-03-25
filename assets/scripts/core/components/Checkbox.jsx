import classNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
export class Checkbox extends React.Component {
  componentDidMount() { this.update(this.props.checked); }
  componentWillReceiveProps(props) { this.update(props.checked); }
  update(checked) {
    ReactDOM.findDOMNode(this).indeterminate = checked === 'indeterminate';
  }
  render() {
    return (
      <input className='react-bs-select-all'
        type='checkbox'
        name={ 'checkbox' + this.props.rowIndex }
        id={ 'checkbox' + this.props.rowIndex }
        checked={ this.props.checked }
        onChange={ this.props.onChange } />
    );
  }
}

export class Switch extends React.Component{
    componentDidMount() { this.update(this.props.checked); }
    componentWillReceiveProps(props) { this.update(props.checked); }
    update(checked) {
        ReactDOM.findDOMNode(this).indeterminate = checked === 'indeterminate';
    }
    render() {
        return (
            <div className="line">
                <div className="line-cell">
                    <div className="checkbox-switch">
                        <input type="checkbox" id={this.props.id} checked={this.props.checked} onChange={this.props.onChange}/>
                        <label htmlFor={this.props.id}></label>
                    </div>
                </div>
                <div className="line-cell">
                    <label htmlFor={this.props.id}>{this.props.title}</label>
                </div>
            </div>
        );
    }
}

export const customMultiSelect = function (props) {
    const { type, checked, disabled, onChange, rowIndex } = props;
    /*
    * If rowIndex is 'Header', means this rendering is for header selection column.
    */
    if (rowIndex === 'Header') {
    return (
        <div className='checkbox-personalized'>
        <Checkbox {...props}/>
        <label htmlFor={ 'checkbox' + rowIndex }>
            <div className='check'></div>
        </label>
        </div>);
    } else {
    return (
        <div className='checkbox-personalized'>
        <input
            type={ type }
            name={ 'checkbox' + rowIndex }
            id={ 'checkbox' + rowIndex }
            checked={ checked }
            disabled={ disabled }
            onChange={ e=> onChange(e, rowIndex) }
            ref={ input => {
            if (input) {
                input.indeterminate = props.indeterminate;
            }
            } }/>
        <label htmlFor={ 'checkbox' + rowIndex }>
            <div className='check'></div>
        </label>
        </div>);
    }
}