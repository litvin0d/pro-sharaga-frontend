import React from "react";
import { Routes, Route } from "react-router";

import Header from "./components/Header";
import "./scss/app.scss";

const App = () => { 
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route />
            </Routes>
        </div>
    );
};

export default App;
