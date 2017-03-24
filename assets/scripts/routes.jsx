import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route } from 'react-router';

import Root from './Root'

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

/* Common Components */

import Sidebar from './rubix/common/sidebar';
import Header from './rubix/common/header';
import Footer from './rubix/common/footer';

/* Pages */

import Homepage from './rubix/routes/Homepage';

import Dashboard from './rubix/routes/Dashboard';
import Social from './rubix/routes/Social';

import Inbox from './rubix/routes/Inbox';
import Mail from './rubix/routes/Mail';
import Compose from './rubix/routes/Compose';

import Projects from './rubix/routes/Projects';
import Users from './rubix/routes/Users';


import Gallery from './rubix/routes/backup/Gallery';


import Posts from './rubix/routes/backup/Posts';
import Post from './rubix/routes/backup/Post';

import Panels from './rubix/routes/backup/Panels';

import LineSeries from './rubix/routes/backup/LineSeries';
import AreaSeries from './rubix/routes/backup/AreaSeries';
import BarColSeries from './rubix/routes/backup/BarColSeries';
import MixedSeries from './rubix/routes/backup/MixedSeries';
import PieDonutSeries from './rubix/routes/backup/PieDonutSeries';

import Chartjs from './rubix/routes/backup/Chartjs';
import C3js from './rubix/routes/backup/C3js';
import Morrisjs from './rubix/routes/backup/Morrisjs';

import StaticTimeline from './rubix/routes/backup/StaticTimeline';
import InteractiveTimeline from './rubix/routes/backup/InteractiveTimeline';

import Codemirrorjs from './rubix/routes/backup/Codemirrorjs';
import Maps from './rubix/routes/backup/Maps';
import Editor from './rubix/routes/backup/Editor';

import Buttons from './rubix/routes/backup/Buttons';
import Dropdowns from './rubix/routes/backup/Dropdowns';
import TabsAndNavs from './rubix/routes/backup/TabsAndNavs';
import Sliders from './rubix/routes/backup/Sliders';
import Knobs from './rubix/routes/backup/Knobs';
import Modals from './rubix/routes/backup/Modals';
import Messengerjs from './rubix/routes/backup/Messengerjs';

import Controls from './rubix/routes/backup/Controls';
import XEditable from './rubix/routes/backup/XEditable';
import Wizard from './rubix/routes/backup/Wizard';

import Tables from './rubix/routes/backup/Tables';
import Datatablesjs from './rubix/routes/backup/Datatablesjs';
import Tablesawjs from './rubix/routes/backup/Tablesawjs';

import Grids from './rubix/routes/backup/Grids';
import Calendar from './rubix/routes/backup/Calendar';

import Dropzonejs from './rubix/routes/backup/Dropzonejs';
import Cropjs from './rubix/routes/backup/Cropjs';

import Fonts from './rubix/routes/backup/Fonts';

import Login from './rubix/routes/backup/Login';
import Signup from './rubix/routes/backup/Signup';
import Invoice from './rubix/routes/backup/Invoice';
import Pricing from './rubix/routes/backup/Pricing';

import Lock from './rubix/routes/backup/Lock';

/**
 * Includes Sidebar, Header and Footer.
 */
const routes = (
  <Route>
    <Route path='dashboard' component={Dashboard} />
    <Route path='social' component={Social} />
    <Route path='mailbox/inbox' component={Inbox} />
    <Route path='mailbox/mail' component={Mail} />
    <Route path='mailbox/compose' component={Compose} />
    <Route path='projects' component={Projects} />
    <Route path='users' component={Users} />

    <Route path='gallery' component={Gallery} />
    <Route path='blog/posts' component={Posts} />
    <Route path='blog/post' component={Post} />
    <Route path='panels' component={Panels} />
    <Route path='charts/rubix/line' component={LineSeries} />
    <Route path='charts/rubix/area' component={AreaSeries} />
    <Route path='charts/rubix/barcol' component={BarColSeries} />
    <Route path='charts/rubix/mixed' component={MixedSeries} />
    <Route path='charts/rubix/piedonut' component={PieDonutSeries} />
    <Route path='charts/chartjs' component={Chartjs} />
    <Route path='charts/c3js' component={C3js} />
    <Route path='charts/morrisjs' component={Morrisjs} />
    <Route path='timeline' component={StaticTimeline} />
    <Route path='interactive-timeline' component={InteractiveTimeline} />
    <Route path='codemirror' component={Codemirrorjs} />
    <Route path='maps' component={Maps} />
    <Route path='editor' component={Editor} />
    <Route path='ui-elements/buttons' component={Buttons} />
    <Route path='ui-elements/dropdowns' component={Dropdowns} />
    <Route path='ui-elements/tabs-and-navs' component={TabsAndNavs} />
    <Route path='ui-elements/sliders' component={Sliders} />
    <Route path='ui-elements/knobs' component={Knobs} />
    <Route path='ui-elements/modals' component={Modals} />
    <Route path='ui-elements/messenger' component={Messengerjs} />
    <Route path='forms/controls' component={Controls} />
    <Route path='forms/x-editable' component={XEditable} />
    <Route path='forms/wizard' component={Wizard} />
    <Route path='tables/bootstrap-tables' component={Tables} />
    <Route path='tables/datatables' component={Datatablesjs} />
    <Route path='tables/tablesaw' component={Tablesawjs} />
    <Route path='grid' component={Grids} />
    <Route path='calendar' component={Calendar} />
    <Route path='file-utilities/dropzone' component={Dropzonejs} />
    <Route path='file-utilities/crop' component={Cropjs} />
    <Route path='fonts' component={Fonts} />
    <Route path='invoice' component={Invoice} />
    <Route path='pricing' component={Pricing} />
  </Route>
);

const combinedRoutes = (
  <Route>
    <Route>
      {routes}
    </Route>
  </Route>
);

export default function({dispatch, getState}) {
  const requireLogin = (nextState, replace, cb) => {
    const check = () => {
      // const {session} = getState()
      // if (!session.has('user')) {
      //   replace({pathname: '/signin', query: {next: '/events'}})
      // }
      replace({pathname: '/ltr/dashboard'})
      cb()
    }
    check()
    // const session = getState().session
    // if (session.get('initialized')) {
    //   check()
    // } else {
    //   dispatch(FETCH_SESSION()).then(check, check)
    // }
  }
  return (    
    <Route path='/' component={Root}>
      <IndexRoute component={Dashboard} onEnter={requireLogin}/>
	    <Route path='/ltr'>
	      {combinedRoutes}
	    </Route>
	 </Route>
  )
}
