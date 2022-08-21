import Header from "../../components/Header";
import LessonsSlider from "../../components/LessonsSlider";
import GradeChart from "../../components/GradeChart";
import Timetable from "../../components/Timetable";
import { userData } from "../../data/userData";
import s from "./MainPage.module.scss";

const MainPage = () => {
	return (
		<div className={s.root}>
			<Header/>
			<div className={s.wrapper}>
				<div className={s.left}>
					<LessonsSlider userData={userData}/>
					<GradeChart userData={userData}/>
				</div>
				<div className={s.right}>
					<Timetable userData={userData}/>
				</div>
			</div>
		</div>
	);
}

export default MainPage;
