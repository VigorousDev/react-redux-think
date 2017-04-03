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
import {Panel_Left, Panel_Right, Panel_Bottom} from './schedule/ScheduleContainer';

export default class Schedule extends React.Component {
  constructor(props){
    super(props);
    $('#container').removeClass('container-open');
    $('#container').addClass('force-close');
    $('#footer-container').css('display','none');
  }

  componentWillUnmount(){
    // $('#container').removeClass('force-close');
    // $('#container').addClass('container-open');
    $('#footer-container').css('display','block');
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

  render() {
    return (
      <div className="page-schedule">
        <div ref={(c) => this.example = c} style={{width:'100%', height:'100%'}}>
          <div className="pane ui-layout-west">
            <Panel_Left/>
          </div>
          <div className="pane ui-layout-center">
            <Panel_Right/>
          </div>
          <div className="pane ui-layout-south">
            <Panel_Bottom/>
          </div>   
        </div>
      </div>
    );
  }
}
