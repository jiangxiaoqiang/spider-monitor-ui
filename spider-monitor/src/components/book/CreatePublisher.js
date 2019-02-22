/**
 * Created by hldev on 18-3-30.
 */

import React, {Component} from "react";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {addPublisher} from '../../service/bookService';

export default class CreatePublisher extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    handleAdd = () => {
        const publisherName = document.getElementById("publisher").value;
        var publisher = {
            name:publisherName
        };
        addPublisher(publisher);
    };

    render() {

        const style = {
            margin: 12,
        };

        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="添加出版社"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <div>
                        <TextField id="publisher" hintText="出版社名称"/>
                        <br/>
                    </div>
                    <div>
                        <RaisedButton label="添加" primary={true} style={style} onClick={() => this.handleAdd()}/>
                    </div>
                </div>
            </MuiThemeProvider>
        );

    }

}
