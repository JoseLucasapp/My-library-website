import React from "react";
import "./bookListItem.css"

const BooksListItems = ({ title, author, link }) => {
    return (
        <div className="main-bookListItem">
            <p className="bookListItem-title">{title}</p>
            <p>{author}</p>
            <a href={link} rel="noreferrer" target="_blank"><img className="link" src="https://img.icons8.com/fluency-systems-regular/48/undefined/external-link-squared.png" alt="link" /></a>
        </div>
    )
}

export { BooksListItems }