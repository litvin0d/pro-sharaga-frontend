import React from "react";

import s from "./LoginPage.module.scss";

const LoginPage = () => {
    return (
        <div className={s.root}>
            <form className={s.form}>
                <div className={s.title}>
                    <h2>Pro<span>Sharaga</span></h2>
                </div>
                <p>Войдите через Проколледж</p>
                <input
                    type="text"
                    name="username"
                    placeholder="Логин"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    required
                />
                <button>Войти</button>
            </form>
        </div>
    );
};

export default LoginPage;
