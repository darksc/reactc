'use strict';

import React, { Component } from 'react';

import Header from './Header';

export default class App extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Header name={this.props.routes}/>
                <h1>Hello, react!</h1>
            </div>
        );
    }
}
