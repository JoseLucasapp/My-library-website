import React from "react";
import { BooksListItems } from "../bookListItems/bookListItems";

import { Books } from "../../data/books";

import "./booksList.css"

const BooksList = () => {
    return (
        <div className="main-booksList">
            {Books.map((book) => {
                return (
                    <BooksListItems title={book.title} author={book.author} link={book.link} />
                )
            })}
        </div>
    )
}

export { BooksList }