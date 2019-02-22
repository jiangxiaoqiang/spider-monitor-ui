/**
 * Created by dolphin on 15/7/2017.
 */
import { createStore, combineReducers, applyMiddleware } from "redux";
import createLogger from 'redux-logger';
import user from "./reducers/userReducer";
import book from "./reducers/bookReducer";
import publisher from "./reducers/publisherReducer";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

export default createStore(
    combineReducers({
        user,
        book,
        publisher
    }),
    {},
    applyMiddleware(createLogger, thunk, promise())
);

