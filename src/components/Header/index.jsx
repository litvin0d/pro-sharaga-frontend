import React from "react";
import { Link } from "react-router-dom";

import s from "./Header.module.scss";
import logo from "../../assets/logo.svg"

const Header = () => {
    return (
        <header className={s.header}>
            <Link to="/" className={s.title}>
                <img src={logo} alt="logo" />
                <h2>ProSharaga</h2>
            </Link>
            <nav className={s.nav}>
                <Link to="/">Link1</Link>
                <Link to="/">Link2</Link>
                <Link to="/">Link3</Link>
                <Link to="/">Link4</Link>
            </nav>
        </header>
    );
}

export default Header;