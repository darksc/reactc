'use strict';

import React, { Component } from 'react';

import Header from './Header';

export default class Login extends Component {
    render() {
        return (
            <div>
                <Header name={this.props.routes}/>
                <div className="content">
                    <div className="login">
                        <div>
                            <input type="text" placeholder="Email or Username" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <input type="password" placeholder="Password"/>
                        </div>
                        <div>
                            <button>登录</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

    handleChange(e) {
        var value = e.target.value;
        console.log(value, 'username');
    }
}
