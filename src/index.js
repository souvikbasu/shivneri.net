import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute } from 'react-router'

import Home from './components/Home/Home';
import SignOut from './components/SignOut/SignOut';
import SignIn from './components/SignIn/SignIn';

import App from './components/App/App.jsx';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App} >
            <IndexRoute components={Home} />
            <Route path='/signin' components={SignIn} />
            <Route path='/signout' components={SignOut} />
        </Route>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
