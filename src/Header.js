import React, { Component } from 'react';

import { Link } from 'react-router';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div>
                    <h1><Link to={'/'}>reactc</Link></h1>
                    <p>first react project</p>
                </div>
                <ul>
                    <li className={Header.selected(this.props.name[0].name, '首页')}><Link to={'/'}>首页</Link></li>
                    <li className={Header.selected(this.props.name[0].name, '登录')}><Link to={'/login'}>登录</Link></li>
                    <li className={Header.selected(this.props.name[0].name, '注册')}><Link to={'/register'}>注册</Link></li>
                </ul>
            </header>
        );
    }

    static selected(_realName, name) {
        return _realName == name ? 'selected' : '';
    }
}
