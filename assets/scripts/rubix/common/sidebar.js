import React from 'react';

import {
  Sidebar, SidebarNav, SidebarNavItem,
  SidebarControls, SidebarControlBtn,
  LoremIpsum, Grid, Row, Col, FormControl,
  Label, Progress, Icon,
  SidebarDivider
} from '@sketchpixy/rubix';

import { Link, withRouter } from 'react-router';

import ChatComponent from './chat';

@withRouter
class ApplicationSidebar extends React.Component {
  handleChange(e) {
    this._nav.search(e.target.value);
  }

  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <FormControl type='text' placeholder='Search...' onChange={::this.handleChange} className='sidebar-search' style={{border: 'none', background: 'none', margin: '10px 0 0 0', borderBottom: '1px solid #666', color: 'white'}} />
              <div className='sidebar-nav-container'>
                <SidebarNav style={{marginBottom: 0}} ref={(c) => this._nav = c}>
                  <div className='sidebar-header'>PAGES</div>
                  <SidebarNavItem glyph='icon-fontello-home' name='Home' href={::this.getPath('dashboard')} />
                  <SidebarNavItem glyph='icon-flatline-film' name={<span>Project</span>}>
                    <SidebarNav>
                      <SidebarNavItem name='Projects' href={::this.getPath('projects')} />
                      <SidebarNavItem name='Users' href={::this.getPath('users')} />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-feather-align-justify' name={<span>Schedule</span>}>
                    <SidebarNav>
                      <SidebarNavItem name='Schedules' href={::this.getPath('schedules')} />
                      <SidebarNavItem name='Import Script' href={::this.getPath('importscript')} />
                    </SidebarNav>
                  </SidebarNavItem>
                </SidebarNav>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

@withRouter
export default class SidebarContainer extends React.Component {
  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }

  render() {
    return (
      <div id='sidebar'>
        <div id='avatar'>
          <Grid>
            <Row className='fg-white'>
              <Col xs={4} collapseRight>
                <img src='/imgs/app/avatars/avatar0.png' width='40' height='40' />
              </Col>
              <Col xs={8} collapseLeft id='avatar-col'>
                <div style={{top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}>Anna Sanchez</div>
                <div style={{top: 25, fontSize: 11, lineHeight: 1, fontWeight:100, position: 'relative'}}>
                  Assistant Director
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <SidebarControls>
          <SidebarControlBtn bundle='fontello' glyph='docs' sidebar={0} />
          <SidebarControlBtn bundle='fontello' glyph='users-1' sidebar={1} />
        </SidebarControls>
        <div id='sidebar-container'>
          <Sidebar sidebar={0}>
            <ApplicationSidebar />
          </Sidebar>
          <Sidebar sidebar={1}>
            <ChatComponent />
          </Sidebar>
        </div>
      </div>
    );
  }
}
