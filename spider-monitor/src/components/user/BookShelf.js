import React, { Component } from "react";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import { findAllBooks } from '../../service/bookService';
import { Utils } from "handlebars";
import DolphinUtils from "../../common/DolphinUtils";
import store from "../../store";
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

export default class BookShelf extends React.Component {

    state = {
        selectedIndex: 0,
    };


    constructor(props) {
        super(props);
    }

    componentWillMount() {
        findAllBooks();
    }

    handleFetch() {

    }

    render() {
        const books = this.props.book;
        let arr = [];
        if (books && books.book && books.book.length > 0) {
            for (let i in books.book) {
                arr.push(books.book[i]);
            }
        }
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
                        title="我的书架"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <div>
                        <TextField
                            hintText="输入书名检索"
                        />
                        <RaisedButton label="检索" primary={true} style={style} onClick={() => this.handleFetch()} />
                    </div>
                    <div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderColumn>序号</TableHeaderColumn>
                                    <TableHeaderColumn>书名</TableHeaderColumn>
                                    <TableHeaderColumn>作者</TableHeaderColumn>
                                    <TableHeaderColumn>出版社</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {arr.length > 0 && arr && arr !== undefined ? arr.map(function (book, index) {
                                    return (
                                        <TableRow key={index}>
                                            <TableRowColumn>{index + 1}</TableRowColumn>
                                            <TableRowColumn>{book.name}</TableRowColumn>
                                            <TableRowColumn>{book.author}</TableRowColumn>
                                            <TableRowColumn>{book.publisher}</TableRowColumn>
                                        </TableRow>);
                                }) : null}
                            </TableBody>
                        </Table>
                    </div>
                    <Paper zDepth={1}>
                        <BottomNavigation selectedIndex={this.state.selectedIndex}>                           
                            <BottomNavigationItem
                                label="主页"
                                icon={nearbyIcon}                                
                            />
                        </BottomNavigation>
                    </Paper>
                </div>
            </MuiThemeProvider>
        )
    }
}



