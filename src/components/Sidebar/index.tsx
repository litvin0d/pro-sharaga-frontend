import { Link } from "react-router-dom";

import Logo from "../Logo";
import Navigaton from "../Navigation";
import s from "./Sidebar.module.scss";
import avatar from "../../assets/avatar.png";

const Sidebar = () => {
    return (
        <div className={s.root}>
            <Link to="/">
                <Logo className={s.logo} />
            </Link>

            <div className={s.userTitle}>
                <img src={avatar} alt="profileImage" />
                <h3>Name Surname</h3>
                <p>ИСП 8-20</p>
            </div>

            <Navigaton />

            <div className={s.logout}>
                <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M3 13H15V11H3V13Z" />
                    <path d="M5.79282 7.79291L2.29282 11.2929C1.90229 11.6834 1.90229 12.3166 2.29282 12.7071L5.79282 16.2071L7.20703 14.7929L4.41414 12L7.20703 9.20712L5.79282 7.79291Z" />
                    <path d="M8 4C8 3.44772 8.44772 3 9 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H9C8.44772 21 8 20.5523 8 20V17H10V19H20V5H10V7H8V4Z" />
                </svg>
                <span>Выйти</span>
            </div>
        </div>
    );
};

export default Sidebar;
