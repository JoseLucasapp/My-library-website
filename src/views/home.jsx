import React from "react";

import { BooksList } from "../components/booksList/booksList";

import "./styles/home.css"

const Home = () => {
    return (
        <div className="main-home">
            <BooksList />
        </div>
    )
}

export { Home }