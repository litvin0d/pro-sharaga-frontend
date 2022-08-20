import { IUser } from "../../models";
import s from "./Timetable.module.scss";

interface timetableProps {
	userData: IUser,
}

const Timetable = ({ userData }: timetableProps) => {
	return (
		<div className={s.root}>
			<h3 className={s.title}>Расписание</h3>
			<ul className={s.timetableList}>
				{userData.timetable.map((lesson, i) => (
					<li className={s.timetableItem} key={i}>
						<h2 className={s.number}>{lesson.number}</h2>
						<p className={s.time}>{lesson.time.split(" ")[0]}<br/>{lesson.time.split(" ")[1]}</p>
						<div className={s.lessonWrapper}>
							{lesson.groups.map((group, j) => (
								<div className={s.lesson} key={j}>
									<div className={s.lessonTitle}>
										<h3 className={s.lessonName}>{group.name}</h3>
										<p className={`${s.status} ${group.status === "добавлено" && s.added} ${group.status === "отменено" && s.canceled }`}>{group.status}</p>
									</div>

									<div className={s.lessonInfo}>
										<p>{group.teacher}</p>
										<p>{group.classroom}</p>
									</div>
								</div>
							))}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Timetable;