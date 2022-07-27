import React from "react";
import { Routes, Route } from "react-router";

import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import TimetablePage from "./pages/TimetablePage";
import GradesPage from "./pages/GradesPage";
import SubjectsPage from "./pages/SubjectsPage";
import "./scss/app.scss";

const App = () => {
    return (
        <div className="App">
            <LoginPage />
            {/* <Header />
            <Routes>
                <Route path="/" element={<TimetablePage />} />
                <Route path="/timetable" element={<TimetablePage />} />
                <Route path="/grades" element={<GradesPage />} />
                <Route path="/subjects" element={<SubjectsPage />} />
            </Routes> */}
        </div>
    );
};

export default App;
