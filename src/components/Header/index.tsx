import s from "./Header.module.scss";
import Logo from "../Logo";
import User from "../User";

const Header = () => {
	return (
		<div className={s.root}>
			<Logo className={s.logo} />
			<User />
		</div>
	);
}

export default Header;
