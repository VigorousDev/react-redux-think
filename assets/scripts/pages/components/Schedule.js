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
  Icon,
  Tab,
  Tabs
} from '@sketchpixy/rubix';
import {Breakdown} from './schedule/Breakdown';
import {RecycleBin} from './schedule/RecycleBin';
import {Stripboard} from './schedule/Stripboard';
import {Script} from './schedule/Script';
import {DayOutofDays} from './schedule/DayOutofDays';

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
            <Tabs defaultActiveKey={1} id='panel_left' className='tab-container'>
              <Tab eventKey={1} title="Breakdown">
                <Breakdown/>
              </Tab>
              <Tab eventKey={2} title="Recycle Bin">
                <RecycleBin/>
              </Tab>
            </Tabs>
          </div>
          <div className="pane ui-layout-center">
            <Tabs defaultActiveKey={1} id='panel_right' className='tab-container'>
              <Tab eventKey={1} title="Stripboard">
                <Stripboard/>
              </Tab>
              <Tab eventKey={2} title="Script">
                <Script/>
              </Tab>
            </Tabs>
          </div>
          <div className="pane ui-layout-south">
            <DayOutofDays/>
          </div>   
        </div>
      </div>
    );
  }
}
