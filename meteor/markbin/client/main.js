import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import {Bins} from '../imports/collections/bins';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import BinsMain from './components/bins/BinsMain';
import BinsList from './components/bins/BinsList';

const routes = (
 <Router history={browserHistory} >
    <Route path="/" component={App}>
    <IndexRoute component={BinsList} />
      <Route path="bins/:binId" component={BinsMain}/>
    </Route>
  </Router>
);

Meteor.startup(()=>
{
  ReactDOM.render(routes, document.querySelector('.render-target'));
});