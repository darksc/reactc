import React, { Component } from 'react';

import Header from './Header';

export default class Register extends Component {
    render() {
        return (
            <div>
                <Header name={this.props.routes}/>
                <h1>欢迎注册reactc</h1>
            </div>
        );
    }
}
