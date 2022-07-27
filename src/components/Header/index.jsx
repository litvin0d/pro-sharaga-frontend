import React from "react";
import { Link } from "react-router-dom";

import s from "./Header.module.scss";
import logo from "../../assets/logo.svg";

const Header = () => {
    const [activePage, setActivePage] = React.useState(0);

    return (
        <header className={s.header}>
            <Link to="/" className={s.title}>
                <img src={logo} alt="logo" />
                <h2>ProSharaga</h2>
            </Link>
            <nav className={s.nav}>
                <Link to="/timetable" onClick={() => setActivePage(0)} className={activePage === 0 ? s.active : ""}>
                    <p>Расписание</p>
                </Link>
                <Link to="/grades" onClick={() => setActivePage(1)} className={activePage === 1 ? s.active : ""}>
                    <p>Оценки</p>
                </Link>
                <Link to="/subjects" onClick={() => setActivePage(2)} className={activePage === 2 ? s.active : ""}>
                    <p>Предметы</p>
                </Link>
                <Link to="/">
                    <p>Мой профиль</p>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
