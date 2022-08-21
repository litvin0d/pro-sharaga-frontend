import s from "./LoginPage.module.scss";
import Logo from "../../components/Logo";

const LoginPage = () => {
    return (
        <div className={s.root}>
            <form className={s.form}>
                <Logo className={s.logo} />
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

            <p className={s.text}>
                ProSharaga не несёт ответственность за достоверность отображаемых данных
            </p>
        </div>
    );
};

export default LoginPage;
