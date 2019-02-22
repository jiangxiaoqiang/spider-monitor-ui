import React, { Component } from "react";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { addAuthor } from '../../service/AuthorService';

export default class CreateAuthor extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    handleAdd = () => {
        const authorName = document.getElementById("author").value;
        //const country = document.getElementById("country").value;
        var author = {
            name: authorName
        };
        addAuthor(author);
    };

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
                        title="添加作者"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <div>
                        <TextField id="author" hintText="作者姓名" />
                        <br />
                        /*<TextField id="country" hintText="国家" default="中国"/>*/
                    </div>
                    <div>
                        <RaisedButton label="提交" primary={true} style={style} onClick={() => this.handleAdd()} />
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}