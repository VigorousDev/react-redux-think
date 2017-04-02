import React from 'react';
import ReactDOM from 'react-dom';
import {Resize, ResizeVertical, ResizeHorizon} from 'react-resize-layout';
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
  constructor(props){
    super(props);
    this.state = {
      left: '100px'
    };
  }

  componentDidMount() {
    // $(ReactDOM.findDOMNode(this.example))
    // .layout(
    //   { applyDefaultStyles: true }
    // );
    
  }
  componentWillUpdate(){
    console.log('update');
    
  }

  resizeClicked(e){
    
  }

  render() {
    var {left} = this.state;
    return (
      <Grid>
      <PanelContainer controls={false}>
          <Panel>
              <PanelBody>
                  <Grid>
                      sdf
                  </Grid>
              </PanelBody>
          </Panel>
      </PanelContainer>
      </Grid>
    );
  }
}
