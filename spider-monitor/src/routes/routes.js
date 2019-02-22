import React, {Component} from "react";
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import Book from '../components/search/Book';
import BookCreate from '../components/book/CreateBook';
import App from "../containers/App";
import injectTapEventPlugin from 'react-tap-event-plugin';
import BookShelf from "../components/user/BookShelf";
import CreateBook from "../components/book/CreateBook";
import Index from "../components/main/Index";

injectTapEventPlugin();

const routes = (
    <BrowserRouter>
        <App>
            <switch>
            </switch>
        </App>
    </BrowserRouter>
);

export default routes;