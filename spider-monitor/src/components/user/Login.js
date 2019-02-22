/**
 * Created by hldev on 18-3-27.
 */

import React, { Component } from "react";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    handleLogin = () => {
        const userName = document.getElementById("userName").value;
        const password = document.getElementById("password").value;
        var user = {
            userName: userName,
            password: password
        };
        //addPublisher(user);
    };

    render() {

        const style = {
            margin: 12,
        };

        const loginStyle = {
            margin: 'auto',
            marginTop:200,
            height: 200,
            width: 600,
            //backgroundColor: 'red',
            alignItems: 'center'
        };

        const AppBarExampleIcon = () => (
            <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        );

        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="登录"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <div style={loginStyle}>                        
                        <TextField id="userName" hintText="用户名" />
                        <br />
                        <TextField id="password" hintText="密码" />
                        <br />
                        <div>
                            <RaisedButton label="登录" primary={true} style={style} onClick={() => this.handleLogin()} />
                        </div>  
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}



