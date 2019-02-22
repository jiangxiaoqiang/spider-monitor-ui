/**
 * Created by jiangtingqiang@gmail.com on 18-3-27.
 */

import React from "react";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { addBookToShelf } from '../../service/bookService';
import { findAllPublisher } from "../../service/publisherService";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class CreateBook extends React.Component {

    state = {
        value: "中华书局",
        errorText: "",
    };


    constructor(props) {
        super(props);
    }

    componentWillMount() {
        findAllPublisher();
    }

    handleAdd = () => {
        const isbn = document.getElementById("isbnInput").value;
        if (isbn === "" || isbn === undefined) {
            this.setState({ errorText: 'ISBN编号不能为空' })
        }
        const bookName = document.getElementById("bookName").value;
        const publisherComponent = document.getElementById("publisher");
        const publisher = publisherComponent.innerText;
        const author = document.getElementById("author").value;
        const price = document.getElementById("price").value;
        var book = {
            isbn: isbn,
            name: bookName,
            author: author,
            publisher: publisher,
            price: price
        };
        book.isbn = isbn;
        addBookToShelf(book);
    };

    handleChange = (event, index, value) =>{ 
        
        this.setState({ value })
    };

    onChange(event) {
        if (event.target.value) {

        } else {

        }
    }

    render() {
        const publishers = this.props.publisher.size === 0 ? [] : this.props.publisher;

        var arr = [];
        arr = Object.keys(publishers).map(function (key) {
            return publishers[key];
        });

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
                        title="添加书"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <div>
                        <TextField id="isbnInput"
                            hintText="ISBN"
                            onChange={this.onChange.bind(this)}
                            errorText={this.state.errorText} />
                        <br />
                        <TextField id="bookName" hintText="书名" />
                        <br />
                        <TextField
                            id="publisher"
                            floatingLabelText="出版社"
                            value={this.state.value}
                            onChange={this.handleChange}
                            maxHeight={600}
                        >
                        </TextField>
                        <RaisedButton label="新增出版社" primary={true} style={style} href="/publisher/create" />
                        <br />
                        <TextField id="author" hintText="作者" />
                        <RaisedButton label="新增作者" primary={true} style={style} href="/author/create" />
                        <br />
                        <TextField id="price" hintText="价格" />
                    </div>
                    <div>
                        <RaisedButton label="添加" primary={true} style={style} onClick={() => this.handleAdd()} />
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}