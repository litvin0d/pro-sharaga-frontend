import { useEffect, useRef, useState } from "react";

import s from "./User.module.scss";
import { IUserInfo } from "../../models";

interface UserProps {
	userName: string,
	userInfo: IUserInfo,
}

const User = ({ userName, userInfo }: UserProps) => {
	// state открытого popup окна
	const [open, setOpen] = useState(false);

	const userRef = useRef(null);

	// обработчик клика "снаружи" popup окна для его закрытия
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const _event = event as any;

			if (userRef.current && !_event.path.includes(userRef.current)) {
				setOpen(false);
			}
		};

		document.body.addEventListener("click", handleClickOutside);

		return () => document.body.removeEventListener("click", handleClickOutside);
	}, []);

	// меняет местами фамилию и имя
	const swapName = (name: string) => {
		let result: string[] = name.split(" ");
		if (result.length < 2) return result;
		return [result[1], result[0]].concat(result.slice(2, result.length)).join(" ");
	}

	return (
		<div className={s.user} ref={userRef}>
			<div className={s.userLabel} onClick={() => setOpen(!open)}>
				<span className={open ? s.active : ""}>{swapName(userName)}</span>
				<svg
					className={open ? s.active : ""}
					width="10"
					height="6"
					viewBox="0 0 10 6"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
					/>
				</svg>
			</div>

			{open && (
				<div className={s.userPopup}>
					<ul>
						<li>Специальность: <br/><div>{userInfo.speciality}</div></li>
						<li>Форма обучения: <br/><div>{userInfo.form}</div></li>
						<li>Группа: <br/><div>{userInfo.group}</div></li>
						<li>Куратор: <br/><div>{userInfo.curator}</div></li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default User;
