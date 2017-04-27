import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route } from 'react-router';

import Root from './Root'

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

/* Common Components */

import Sidebar from './pages/components/common/sidebar';
import Header from './pages/components/common/header';
import Footer from './pages/components/common/footer';

/* Pages */

import Homepage from './pages/components/Homepage';

import Dashboard from './pages/components/Dashboard';
import Social from './pages/components/Social';

import Inbox from './pages/components/Inbox';
import Mail from './pages/components/Mail';
import Compose from './pages/components/Compose';

import Projects from './pages/components/Projects';
import Users from './pages/components/Users';
import Schedules from './pages/components/Schedules';
import ImportScript from './pages/components/ImportScript';
import Schedule from './pages/components/Schedule';


import Gallery from './pages/components/backup/Gallery';


import Posts from './pages/components/backup/Posts';
import Post from './pages/components/backup/Post';

import Panels from './pages/components/backup/Panels';

import LineSeries from './pages/components/backup/LineSeries';
import AreaSeries from './pages/components/backup/AreaSeries';
import BarColSeries from './pages/components/backup/BarColSeries';
import MixedSeries from './pages/components/backup/MixedSeries';
import PieDonutSeries from './pages/components/backup/PieDonutSeries';

import Chartjs from './pages/components/backup/Chartjs';
import C3js from './pages/components/backup/C3js';
import Morrisjs from './pages/components/backup/Morrisjs';

import StaticTimeline from './pages/components/backup/StaticTimeline';
import InteractiveTimeline from './pages/components/backup/InteractiveTimeline';

import Codemirrorjs from './pages/components/backup/Codemirrorjs';
import Maps from './pages/components/backup/Maps';
import Editor from './pages/components/backup/Editor';

import Buttons from './pages/components/backup/Buttons';
import Dropdowns from './pages/components/backup/Dropdowns';
import TabsAndNavs from './pages/components/backup/TabsAndNavs';
import Sliders from './pages/components/backup/Sliders';
import Knobs from './pages/components/backup/Knobs';
import Modals from './pages/components/backup/Modals';
import Messengerjs from './pages/components/backup/Messengerjs';

import Controls from './pages/components/backup/Controls';
import XEditable from './pages/components/backup/XEditable';
import Wizard from './pages/components/backup/Wizard';

import Tables from './pages/components/backup/Tables';
import Datatablesjs from './pages/components/backup/Datatablesjs';
import Tablesawjs from './pages/components/backup/Tablesawjs';

import Grids from './pages/components/backup/Grids';
import Calendar from './pages/components/backup/Calendar';

import Dropzonejs from './pages/components/backup/Dropzonejs';
import Cropjs from './pages/components/backup/Cropjs';

import Fonts from './pages/components/backup/Fonts';

import Login from './pages/components/backup/Login';
import Signup from './pages/components/backup/Signup';
import Invoice from './pages/components/backup/Invoice';
import Pricing from './pages/components/backup/Pricing';

import Lock from './pages/components/backup/Lock';

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
    <Route path='schedules' component={Schedules} />
    <Route path='importscript' component={ImportScript} />
    <Route path='schedule' component={Schedule} />

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
