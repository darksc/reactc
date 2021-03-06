'use strict';

import React, { Component } from 'react';

import { Router } from 'react-router';

export default class Login extends Component {

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            username: '',
            password: '',
            msg: '',
            msgClass: ''
        };
    }

    render() {
        return (
            <div className="content" onKeyDown={this.handleKeyDown.bind(this)}>
                <div className="login">
                    <div>
                        <input type="text" value={this.state.username} onChange={this.usernameChange.bind(this)} placeholder="Email or Username"/>
                    </div>
                    <div>
                        <input type="password" value={this.state.password} onChange={this.passwordChange.bind(this)} placeholder="Password"/>
                    </div>
                    <div className={this.state.msgClass}>
                        {this.state.msg}
                    </div>
                    <div>
                        <button onClick={this.handleClick.bind(this)}>Login</button>
                    </div>
                    <p>test uaername: admin, password: admin</p>
                </div>
            </div>
        );
    }

    handleKeyDown(e) {
        if(e.keyCode == '13') {
            this.handleClick();
        }
    }

    handleClick(e) {
        if(this.state.username == 'admin') {
            if(this.state.password == 'admin') {
                this.setState({msg: 'Loging...'});
                this.setState({msgClass: 'msg-success'});
                setTimeout(() => {
                    sessionStorage.setItem('login','true');
                    this.setState({msg: ''});
                    this.context.router.replace('/');
                }, 2000);
            } else {
                this.setState({msg: 'The username or password error!'});
                this.setState({msgClass: 'msg-error'});
            }
        } else {
            this.setState({msg: 'The username or password error!'});
            this.setState({msgClass: 'msg-error'});
        }
    }

    usernameChange(e) {
        this.setState({username: e.target.value});
    }

    passwordChange(e) {
        this.setState({password: e.target.value});
    }
}
