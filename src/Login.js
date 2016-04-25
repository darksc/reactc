import React, { Component } from 'react';

import Header from './Header';

export default class Login extends Component {
    render() {
        return (
            <div>
                <Header name={this.props.routes}/>
                <h1>欢迎登录reactc</h1>
            </div>
        );
    }
}
