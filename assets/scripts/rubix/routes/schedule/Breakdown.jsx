import React from 'react';

import {
  Row,
  Col,
  Nav,
  Tab,
  Icon,
  Grid,
  Panel,
  NavItem,
  MenuItem,
  PanelLeft,
  PanelBody,
  LoremIpsum,
  PanelRight,
  PanelHeader,
  PanelFooter,
  NavDropdown,
  PanelContainer,
  PanelTabContainer,
} from '@sketchpixy/rubix';

export class Breakdown extends React.Component {
  render() {
    return (
      <PanelTabContainer id='panel-body-header-footer-tab' defaultActiveKey="home" controls={false}>
        <Panel>
          <PanelHeader className='bg-palegreen fg-white'>
            <Nav bsStyle="tabs">
              <NavItem eventKey="home">
                Breakdown
              </NavItem>
              <NavItem eventKey="user">
                Recycle Bin
              </NavItem>
            </Nav>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Tab.Content animation={false}>
                    <Tab.Pane eventKey="home">
                      <h3>home-2</h3>
                      <p><LoremIpsum query='7s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="user">
                      <h3>user-2</h3>
                      <p><LoremIpsum query='7s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cog">
                      <h3>cog-2</h3>
                      <p><LoremIpsum query='7s'/></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelTabContainer>
    );
  }
}