'use strict';

import React, { Component } from 'react';

import { Link } from 'react-router';

export default class Index extends Component {

    constructor(props, context) {
        super(props, context);


    }

    render() {
        return (
            <div>
                {this.content()}
            </div>
        );
    }

    content() {
        if(!sessionStorage.getItem('login')) {
            return <h1>Please <Link to={'/login'}>Login.</Link></h1>
        } else {
            return <h1>Hello, react!</h1>
        }
    }

}
