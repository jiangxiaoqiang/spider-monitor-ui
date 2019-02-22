/**
 * Created by jiangxiaoqiang@gmail.com on 18-4-9.
 */



import React, {Component} from "react";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export default class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    render() {

        const style = {
            margin: 12,
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
                        title="首页"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <div>
                        <RaisedButton label="添加书" primary={true} style={style} href="/book/create"/>
                        <RaisedButton label="我的书架" primary={true} style={style} href="/user/shelf"/>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}