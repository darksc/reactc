'use strict';

import React, { Component } from 'react';

import { Link } from 'react-router';

import Index from './Index';

export default class Header extends Component {

    constructor(props, context) {

        super(props, context);

        this.selected.bind(this);
    }

    render() {
        return (
            <div>
                <header>
                    <div>
                        <h1><Link to={'/'}>REACTC</Link></h1>
                        <p>first react project</p>
                    </div>
                    <ul>
                        <li className={this.selected('Index')}><Link to={'/index'}>Index</Link></li>
                        <li className={this.selected('Login')}><Link to={'/login'}>Login</Link></li>
                        <li className={this.selected('Register')}><Link to={'/register'}>Register</Link></li>
                    </ul>
                </header>
                {this.props.children || <Index />}
            </div>
        );
    }

    selected(_name) {
        if(this.props.routes.length > 1) {
            return  this.props.routes[1].name == _name ? 'selected' : '';
        } else {
            return _name == 'Index' ? 'selected' : '';
        }

    }
}
