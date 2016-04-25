import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

import App from './App';
import Login from './Login';
import Register from './Register';

require('../sass/index.scss');

render((
    <Router history={hashHistory}>
        <Route path="/" name="首页" component={App}/>
        <Route path="login" name="登录" component={Login}/>
        <Route path="register" name="注册" component={Register}/>
    </Router>
), document.getElementById('container'));
