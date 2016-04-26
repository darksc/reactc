'use strict';

import React, { Component } from 'react';

import Header from './Header';

import { Router } from 'react-router';

export default class Login extends Component {

    constructor(props, context) {

        super(props, context);

        this.state = {
            username: '',
            password: '',
            msg: ''
        };
    }

    render() {
        return (
            <div onKeyDown={this.handleKeyDown.bind(this)}>
                <Header name={this.props.routes}/>
                <div className="content">
                    <div className="login">
                        <div>
                            <input type="text" value={this.state.username} onChange={this.usernameChange.bind(this)} placeholder="Email or Username"/>
                        </div>
                        <div>
                            <input type="password" value={this.state.password} onChange={this.passwordChange.bind(this)} placeholder="Password"/>
                        </div>
                        <div className="msg-error">
                            {this.state.msg}
                        </div>
                        <div>
                            <button onClick={this.handleClick.bind(this)}>登录</button>
                        </div>
                    </div>
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
        var self = this;
        if(this.state.username == 'admin@163.com') {
            if(this.state.password == '123456') {
                this.setState({msg: '登陆中...'});
                setTimeout(function() {
                    self.setState({msg: ''});
                }, 2000);
            } else {
                this.setState({msg: '用户名或密码错误!'});
            }
        } else {
            this.setState({msg: '用户名或密码错误!'});
        }
    }

    usernameChange(e) {
        this.setState({username: e.target.value});
    }

    passwordChange(e) {
        this.setState({password: e.target.value});
    }
}
