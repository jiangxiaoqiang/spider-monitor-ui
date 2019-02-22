/**
 * Created by dolphin on 15/7/2017.
 */

import {bookType} from "../type/BookType";

export function searchBook(isbn) {
    return {
        type: "SEARCH_BOOK_BY_ISBN",
        payload: isbn
    };
}

export function findBooksByName(books) {
    return {
        type: "FIND_BOOKS_BY_NAME",
        books: books
    };
}

export function getAllBooks(data) {
    return {
        type: bookType.GET_ALL_BOOKS,
        book: {
            book: data
        }
    };
}

export function searchBookById(book) {
    return {
        type: "SEARCH_BOOK_BY_ID",
        book: book
    };
}

export function createBookToShelf(book) {
    return {
        type: "CREATE_BOOK_TO_SHELF",
        book: book
    };
}

export function createPublisher(publisher) {
    return {
        type: "CREATE_PUBLISHER",
        publisher: publisher
    };
}




