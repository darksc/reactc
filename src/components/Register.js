'use strict';

import React, { Component } from 'react';

export default class Register extends Component {

    constructor(props, context) {

        super(props, context);

        this.state = {
            usernameVerify: true,
            emailVerify: true
        };
    }

    render() {

        return (
            <div className="content">
                <div className="register">
                    <div>
                        <input type="text" placeholder="Username" className={!this.state.usernameVerify ? 'error' : ''} onChange={this.usernameChange.bind(this)}/>
                    </div>
                    <div>
                        <input type="email" placeholder="Email" className={!this.state.emailVerify ? 'error' : ''} onChange={this.emailChange.bind(this)}/>
                    </div>
                    <div>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div>
                        <input type="password" placeholder="Confirm Password"/>
                    </div>
                    <div>
                        <button>Register</button>
                    </div>
                </div>
            </div>
        );
    }

    usernameChange(e) {
        var value = e.target.value;
        var reg =/^[a-zA-Z]{6,12}$/;
        if (value.match(reg)) {
            this.setState({usernameVerify: true});
        }else{
            this.setState({usernameVerify: false});
        }
    }

    emailChange(e) {
        var value = e.target.value;
        var reg =/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
        if (value.match(reg)) {
            this.setState({emailVerify: true});
        }else{
            this.setState({emailVerify: false});
        }
    }
}
