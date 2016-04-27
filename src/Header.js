'use strict';

import React, { Component } from 'react';

import { Link } from 'react-router';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div>
                    <h1><Link to={'/'}>REACTC</Link></h1>
                    <p>first react project</p>
                </div>
                <ul>
                    <li className={Header.selected(this.props.name[0].name, 'Index')}><Link to={'/'}>Index</Link></li>
                    <li className={Header.selected(this.props.name[0].name, 'Login')}><Link to={'/login'}>Login</Link></li>
                    <li className={Header.selected(this.props.name[0].name, 'Register')}><Link to={'/register'}>Register</Link></li>
                </ul>
            </header>
        );
    }

    static selected(_realName, name) {
        return _realName == name ? 'selected' : '';
    }
}
