'use strict';

import React, { Component } from 'react';

export default class Register extends Component {

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    constructor(props, context) {

        super(props, context);

        this.state = {
            usernameVerify: true,
            usernameMsg: '',
            emailVerify: true,
            emailMsg: '',
            passwordVerify: true,
            password: '',
            cPassword: '',
            passwordMsg: ''
        };
    }

    render() {

        return (
            <div className="content">
                <div className="register">
                    <div>
                        <input type="text" placeholder="Username" className={!this.state.usernameVerify ? 'error' : ''} onChange={this.usernameChange.bind(this)}/>
                    </div>
                    <div className="msg">
                        {this.state.usernameMsg}
                    </div>
                    <div >
                        <input type="email" placeholder="Email" className={!this.state.emailVerify ? 'error' : ''} onChange={this.emailChange.bind(this)}/>
                    </div>
                    <div className="msg">
                        {this.state.emailMsg}
                    </div>
                    <div>
                        <input type="password" placeholder="Password" className={!this.state.passwordVerify ? 'error' : ''} onChange={this.pwChange.bind(this)}/>
                    </div>
                    <div>
                        <input type="password" placeholder="Confirm Password" className={!this.state.passwordVerify ? 'error' : ''} onChange={this.cpwChange.bind(this)}/>
                    </div>
                    <div className="msg">
                        {this.state.passwordMsg}
                    </div>
                    <div>
                        <button onClick={this.saveUser.bind(this)}>Register</button>
                    </div>
                </div>
            </div>
        );
    }

    usernameChange(e) {
        let value = e.target.value;
        let reg =/^[a-zA-Z]{6,12}$/;
        if (value.match(reg)) {
            this.setState({usernameMsg: ''});
            this.setState({usernameVerify: true});
        }else{
            this.setState({usernameMsg: 'Only lowercase letters, 6 to 12 characters!'});
            this.setState({usernameVerify: false});
        }
    }

    emailChange(e) {
        let value = e.target.value;
        let reg =/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
        if (value.match(reg)) {
            this.setState({emailMsg: ''});
            this.setState({emailVerify: true});
        }else{
            this.setState({emailMsg: 'Email format error!'});
            this.setState({emailVerify: false});
        }
    }

    pwChange(e) {
        this.setState({password: e.target.value});
        if(e.target.value == this.state.cPassword) {
            this.setState({passwordMsg: ''});
            this.setState({passwordVerify: true});
        } else {
            this.setState({passwordMsg: 'Confirm you password!'});
            this.setState({passwordVerify: false});
        }
    }

    cpwChange(e) {
        this.setState({cPassword: e.target.value});
        if(this.state.password == e.target.value) {
            this.setState({passwordMsg: ''});
            this.setState({passwordVerify: true});
        } else {
            this.setState({passwordMsg: 'Confirm you password!'});
            this.setState({passwordVerify: false});
        }
    }

    saveUser(e) {
        if(this.state.usernameVerify && this.state.emailVerify && this.state.passwordVerify) {

            alert('success!');
        }
    }
}
