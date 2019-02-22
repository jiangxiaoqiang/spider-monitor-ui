/**
 * Created by dolphin on 15/7/2017.
 */
import { fromJS } from 'immutable';

const initState = {};

const bookReducer = (state = fromJS(initState), action) => {
    switch (action.type) {
        case "FIND_BOOKS_BY_NAME":
            state = {
                ...action.books
            };
            break;
        case "SEARCH_BOOK_BY_ID":
            state = {
                name: action.book.name,
                isbn: action.book.isbn,
                author: action.book.author,
                publisher: action.book.publisher,
                price: action.book.price
            };
            break;
        case "SEARCH_BOOK_BY_ISBN":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "GET_ALL_BOOKS":
            state = {
                ...action.book
            };
            break;
        default:
            break;
    }
    return state;
};

export default bookReducer;