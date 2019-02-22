/**
 * Created by dolphin on 30/6/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import { setName } from "../actions/userActions";
import { getAllPublishers } from "../actions/publisherAction";
import { searchBookById, getAllBooks } from "../actions/bookActions";
import BookShelf from "../components/user/BookShelf";
import {  Route } from 'react-router-dom'
import CreateBook from "../components/book/CreateBook";
import Index from "../components/main/Index";
import Login from "../components/user/Login";
import CreatePublisher from "../components/book/CreatePublisher";
import CreateAuthor from "../components/author/CreateAuthor";

class App extends React.Component {
   
    render() {
        return (
            <div className="container">
                <Route path="/index" render={(props) => <Index />} />
                <Route path="/user/login" render={(props) => <Login />} />
                <Route path="/user/shelf" render={() => <BookShelf book={this.props.book} />} />
                <Route path="/book/create" render={() => <CreateBook publisher={this.props.publisher} />} />
                <Route path="/publisher/create" render={(props) => <CreatePublisher />}/>
                <Route path="/author/create" render={(props) => <CreateAuthor />}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math,
        book: state.book,
        publisher: state.publisher
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        },
        searchBookById: (name) => {
            dispatch(searchBookById(name));
        },
        getAllBooks: (book) => {
            dispatch(getAllBooks(book));
        },
        getAllPublishers: (publisher) => {
            dispatch(getAllPublishers(publisher));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);