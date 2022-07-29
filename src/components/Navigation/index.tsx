import { useState } from "react";
import { Link } from "react-router-dom";

import s from "./Navigation.module.scss";

const Navigaton = () => {
    const [active, setActive] = useState(0);

    return (
        <nav className={s.root}>
            <Link
                to="/"
                onClick={() => setActive(0)}
                className={active === 0 ? s.active : ""}
            >
                <svg
                    className={s.svg}
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z" />
                </svg>
                <span>Главная</span>
            </Link>
            <Link
                to="/subjects"
                onClick={() => setActive(1)}
                className={active === 1 ? s.active : ""}
            >
                <svg
                    className={s.svg}
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19c0-.101.009-.191.024-.273.112-.576.584-.717.988-.727H21V4a2 2 0 0 0-2-2zm0 9-2-1-2 1V4h4v7z" />
                </svg>
                <span>Предметы</span>
            </Link>
            <Link
                to="/schedule"
                onClick={() => setActive(2)}
                className={active === 2 ? s.active : ""}
            >
                <svg
                    className={s.svg}
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm6-3.586-3.707-3.707 1.414-1.414L11 15.586l4.293-4.293 1.414 1.414L11 18.414zM5 7h14v2H5V7z" />
                </svg>
                <span>Расписание</span>
            </Link>
            <Link
                to="/grades"
                onClick={() => setActive(3)}
                className={active === 3 ? s.active : ""}
            >
                <svg
                    className={s.svg}
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M6 21H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1zm7 0h-3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1zm7 0h-3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1z" />
                </svg>
                <span>Оценки</span>
            </Link>
        </nav>
    );
};

export default Navigaton;
