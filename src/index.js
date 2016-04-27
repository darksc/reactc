'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

import App from './App';
import Login from './Login';
import Register from './Register';

require('../sass/index.scss');

render((
    <Router history={hashHistory}>
        <Route path="/" name="Index" component={App}/>
        <Route path="login" name="Login" component={Login}/>
        <Route path="register" name="Register" component={Register}/>
    </Router>
), document.getElementById('container'));
