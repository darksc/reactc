'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

import Header from './Header';
import Index from './Index';
import Login from './Login';
import Register from './Register';

require('../sass/index.scss');

render((
    <Router history={hashHistory}>
        <Route path="/" name="/" component={Header}>
            <Route path="index" name="Index" component={Index}/>
            <Route path="login" name="Login" component={Login}/>
            <Route path="register" name="Register" component={Register}/>
        </Route>
    </Router>
), document.getElementById('container'));
