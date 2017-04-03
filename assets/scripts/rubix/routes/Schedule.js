import React from 'react';
import ReactDOM from 'react-dom';
import {
  Row,
  Col,
  Grid,
  Form,
  Panel,
  PanelBody,
  PanelHeader,
  FormControl,
  PanelContainer,
  Button,
  Icon
} from '@sketchpixy/rubix';
import {Breakdown} from './schedule/Breakdown';

export default class Schedule extends React.Component {
  constructor(props){
    super(props);
    $('#container').removeClass('container-open');
    $('#container').addClass('force-close');
    this.state = {
      activeTab: ''
    };
  }

  componentDidMount() {
    $(ReactDOM.findDOMNode(this.example))
      .layout({
          west: {
            size: .45,
            minSize: 541,
            spacing_closed: 15,
            togglerContent_closed: 'B<br>r<br>e<br>a<br>k<br>d<br>o<br>w<br>n',
            togglerLength_closed: 200,
            showOverflowOnHover: true
          },
          south: {
            initClosed:	true, 
            spacing_closed: 15,
            togglerContent_closed: 'Day Out of Days',
            togglerLength_closed: 200
          }
      });    
    setTimeout(function(){
      $(window).trigger('resize');
    }, 500);    
  }

  handleActiveState(eventKey) {
    this.setState({
      activeTab: eventKey
    });
  }

  getItemProps(eventKey) {
    return {
      eventKey,
      active: this.state.activeTab === eventKey
    };
  }

  render() {
    return (
      <div className="page-schedule">
        <div ref={(c) => this.example = c} style={{width:'100%', height:'100%'}}>
          <div className="pane ui-layout-west">
            <Breakdown/>
          </div>
          <div className="pane ui-layout-center">
            <div>
              <p style={{textAlign:'right'}}>Center</p>
            </div>
          </div>
          <div className="pane ui-layout-south">
            South
          </div>          
        </div>
      </div>
    );
  }
}
