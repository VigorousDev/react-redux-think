import React from 'react';
import ReactDOM from 'react-dom';
// import SplitPane from 'react-split-pane-2';
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
} from '@sketchpixy/rubix';

export default class Schedule extends React.Component {
  componentDidMount() {
    
  }

  render() {
    return (
        <Row>
        <Col xs={12}>
         {/*<SplitPane split="vertical" minSize="50"
               defaultSize={ localStorage.getItem('splitPos') }
               onChange={ size => localStorage.setItem('splitPos', size) }>
            <div></div>
            <div></div>
        </SplitPane>*/}
        </Col>
        </Row>
    );
  }
}
