import React from 'react';
import {
  Tab,
  Tabs
} from '@sketchpixy/rubix';
import {Breakdown} from './Breakdown';
import {Stripboard} from './Stripboard';

export class Panel_Left extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey={1} id='panel_left' className='tab-container'>
        <Tab eventKey={1} title="Breakdown">
          <Breakdown/>
        </Tab>
        <Tab eventKey={2} title="Recycle Bin">
          Recycle Bin
        </Tab>
      </Tabs>
    );
  }
}

export class Panel_Right extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey={1} id='panel_right' className='tab-container'>
        <Tab eventKey={1} title="Stripboard">
          <Stripboard/>
        </Tab>
        <Tab eventKey={2} title="Script">
          Script
        </Tab>
      </Tabs>
    );
  }
}

export class Panel_Bottom extends React.Component {
  render() {
    return (
      <div>
        Bottom
      </div>
    );
  }
}
